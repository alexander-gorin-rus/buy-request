import React, {
  memo, useEffect, VFC, useState, EffectCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import EmptyListPlaceholder from 'src/components/EmptyListPlaceholder';
import {
  PagesWrapper, PageTitle, StyledPaginationContainer, StyledSortAndFiltersWrapper,
} from 'src/commonStyles';
import Pagination from 'src/components/Pagination';
import { getComponentLoadingSelector } from 'src/core/selectors';
import { ISortItem } from 'src/core/types';
import { DealStatus, defaultSort } from 'src/utils/constants';
import { TitleBlock, CardsBlock } from 'src/commonStyles/CardsBlock';
import { SortAndFilterIcons } from 'src/components/SortAndFilterIcons';
import { FilterComponent } from 'src/components/FilterComponent';
import Preloader from 'src/components/Preloader';

import { FilterFieldType } from 'src/components/FilterComponent/types';
import { clearDealList, getDealList } from './actions/actions';
import DealListItem from './components/DealListItem';
import { getDealListSelector } from './selectors';
import { IDealListItem, IFilterValues } from './types';
import { DEAL_STATUS_OPTIONS } from './constants';

const DealList: VFC = memo(() => {
  const perPage = 4;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data, pageInfo } = useSelector(getDealListSelector) ?? {};
  const isLoading = useSelector(getComponentLoadingSelector);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const toggleFilterPopup = () => setShowFiltersModal(!showFiltersModal);
  const [queryParams, setQueryParams] = useSearchParams();
  const page = Number(queryParams.get('page')) || 1;

  const statuses = useMemo(() => {
    const status = queryParams.get('statuses');
    return status ? [status] as DealStatus[] : [];
  }, [queryParams]);

  const handlePageChange = (value: number) => {
    queryParams.set('page', value.toString());
    setQueryParams(queryParams);
  };

  const sort = useMemo(() => {
    const orderBy = queryParams.get('orderBy');
    const orderName = queryParams.get('orderName');
    return orderBy && orderName ? {
      orderBy,
      orderName,
    } as ISortItem : defaultSort.createdAt;
  }, [queryParams]);

  useEffect(() => {
    dispatch(getDealList({
      page,
      perPage,
      sort: [sort],
      statuses,
    }));
  }, [page, sort, statuses]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearDealList());
  }, []);

  const handleSubmit = (filterValues: IFilterValues) => {
    queryParams.set('statuses', filterValues.status);
    queryParams.set('page', '1');
    setQueryParams(queryParams);
  };

  const handleSortChange = (newSort: ISortItem) => {
    queryParams.set('orderBy', newSort.orderBy);
    queryParams.set('orderName', newSort.orderName);
    setQueryParams(queryParams);
  };

  return (
    <PagesWrapper>

      <TitleBlock>
        <PageTitle>{t('pageTitles.dealList')}</PageTitle>
      </TitleBlock>

      <StyledSortAndFiltersWrapper>
        <SortAndFilterIcons
          sort={sort}
          sortOption={defaultSort.createdAt}
          setSort={handleSortChange}
          popupToggle={toggleFilterPopup}
        />
        {
        showFiltersModal && (
          <FilterComponent
            onClose={toggleFilterPopup}
            onSubmit={handleSubmit}
            buttonTitle={t('common:filterPopup.apply')}
            scheme={[{
              name: 'status',
              fieldType: FilterFieldType.select,
              label: t('common:filterPopup.status'),
              options: DEAL_STATUS_OPTIONS,
              initialValue: statuses[0],
              optionPlaceholder: t('common:filterPopup.chooseStatus'),
            }]}
          />
        )
      }
      </StyledSortAndFiltersWrapper>
      {isLoading ? <Preloader isComponent /> : (
        <>
          {!!data?.length && (
            <>
              <CardsBlock>
                {data.map((deal: IDealListItem) => (
                  <DealListItem key={deal.id} deal={deal} />
                ))}
              </CardsBlock>
              <StyledPaginationContainer>
                <Pagination
                  page={page}
                  total={pageInfo?.totalPageCount || 1}
                  onChange={handlePageChange}
                />
              </StyledPaginationContainer>
            </>
          )}
          {!data?.length && (
            <EmptyListPlaceholder>
              {t('deal:emptyDeals')}
            </EmptyListPlaceholder>
          )}
        </>
      )}

    </PagesWrapper>
  );
});

export default DealList;
