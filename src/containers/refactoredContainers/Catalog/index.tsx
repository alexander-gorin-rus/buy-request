import React, {
  VFC, memo, useEffect, useState, EffectCallback, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import EmptyListPlaceholder from 'src/components/EmptyListPlaceholder';
import Preloader from 'src/components/Preloader';
import {
  PagesWrapper, PageTitle, StyledPaginationContainer, StyledSortAndFiltersWrapper,
} from 'src/commonStyles';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { APP_ROUTES } from 'src/core/appRoutes';

import { getComponentLoadingSelector, isCurrentUserSellerSelector } from 'src/core/selectors';
import { ISortItem } from 'src/core/types';
import { defaultSort, PER_PAGE } from 'src/utils/constants';
import Pagination from 'src/components/Pagination';
import { CardsBlock, TitleBlock } from 'src/commonStyles/CardsBlock';
import { SortAndFilterIcons } from 'src/components/SortAndFilterIcons';
import { useSearchParams } from 'react-router-dom';
import { FilterComponent } from 'src/components/FilterComponent';
import { FilterFieldType } from 'src/components/FilterComponent/types';
import { getCatalogSelector } from './selectors';
import { clearCatalog, getCatalog } from './actions/actions';
import ProductCard from './components/ProductCard';
import { StyledButtonContainer } from './styles';

const Catalog: VFC = memo(() => {
  const perPage = PER_PAGE;

  const { t } = useTranslation(['common', 'catalog']);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(getComponentLoadingSelector);
  const { data, pageInfo } = useSelector(getCatalogSelector) ?? {};
  const isCurrentUserSeller = useSelector(isCurrentUserSellerSelector);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [queryParams, setQueryParams] = useSearchParams();
  const page = Number(queryParams.get('page')) || 1;
  const myProducts = queryParams.get('myProducts') === 'true';

  const toggleFilterPopup = () => setShowFiltersModal(!showFiltersModal);

  const sort = useMemo(() => {
    const orderBy = queryParams.get('orderBy');
    const orderName = queryParams.get('orderName');
    return orderBy && orderName ? {
      orderBy,
      orderName,
    } as ISortItem : defaultSort.createdAt;
  }, [queryParams]);

  const handleCreateProduct = () => {
    navigate(APP_ROUTES.CREATING_PRODUCT);
  };

  const handlePageChange = (value: number) => {
    queryParams.set('page', value.toString());
    setQueryParams(queryParams);
  };

  const handleSortChange = (newSort: ISortItem) => {
    queryParams.set('orderBy', newSort.orderBy);
    queryParams.set('orderName', newSort.orderName);
    setQueryParams(queryParams);
  };

  const onFilterSubmit = useCallback((values) => {
    queryParams.set('myProducts', values.myProducts.toString());
    queryParams.set('page', '1');
    setQueryParams(queryParams);
  }, [page, sort]);

  useEffect(() => {
    dispatch(getCatalog({
      page,
      perPage,
      myOwnProduct: myProducts,
      sort: [sort],
    }));
  }, [page, sort, myProducts]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearCatalog());
  }, []);

  return (
    <PagesWrapper>

      <TitleBlock>
        <PageTitle>
          {t('common:pageTitles.catalog')}
        </PageTitle>

        {isCurrentUserSeller && (
          <StyledButtonContainer>
            <CustomStyledButton
              onClick={handleCreateProduct}
              primary
            >
              {t('common:form.button.createProduct')}
            </CustomStyledButton>
          </StyledButtonContainer>
        )}

      </TitleBlock>

      <StyledSortAndFiltersWrapper>
        <SortAndFilterIcons
          sort={sort}
          sortOption={defaultSort.createdAt}
          setSort={handleSortChange}
          popupToggle={toggleFilterPopup}
        />
        {
        (showFiltersModal && isCurrentUserSeller) && (
          <FilterComponent
            onClose={toggleFilterPopup}
            onSubmit={onFilterSubmit}
            buttonTitle={t('common:filterPopup.apply')}
            scheme={[{
              name: 'myProducts',
              fieldType: FilterFieldType.checkbox,
              label: t('common:filterPopup.myProducts'),
              initialValue: myProducts,
            }]}
          />
        )
      }
      </StyledSortAndFiltersWrapper>
      {isLoading ? (
        <Preloader isComponent />
      )
        : (
          <>
            <CardsBlock>
              {!!data?.length && data.map(
                (product) => <ProductCard product={product} key={product.id} />,
              )}
            </CardsBlock>
            {data && !data?.length && (
              <EmptyListPlaceholder>{t('catalog:noProducts')}</EmptyListPlaceholder>
            )}
            {pageInfo && !!data?.length
            && (
              <StyledPaginationContainer>
                <Pagination
                  page={page}
                  total={pageInfo.totalPageCount}
                  onChange={handlePageChange}
                />
              </StyledPaginationContainer>
            )}
          </>
        )}

    </PagesWrapper>
  );
});

export default Catalog;
