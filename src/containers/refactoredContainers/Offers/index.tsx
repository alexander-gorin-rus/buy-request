import React, {
  EffectCallback,
  memo, useCallback, useEffect, useMemo, useState, VFC,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import EmptyListPlaceholder from 'src/components/EmptyListPlaceholder';
import {
  StyledPaginationContainer, PageTitle, PagesWrapper, StyledSortAndFiltersWrapper,
} from 'src/commonStyles';
import Pagination from 'src/components/Pagination';
import { getComponentLoadingSelector } from 'src/core/selectors';
import { ISortItem } from 'src/core/types';
import { defaultSort, OfferStatus, PER_PAGE } from 'src/utils/constants';
import { TitleBlock, CardsBlock } from 'src/commonStyles/CardsBlock';
import { SortAndFilterIcons } from 'src/components/SortAndFilterIcons';
import { FilterComponent } from 'src/components/FilterComponent';
import { useSearchParams } from 'react-router-dom';
import Preloader from 'src/components/Preloader';
import { FilterFieldType } from 'src/components/FilterComponent/types';
import { getOffersPageInfoSelector, getOffersSelector } from './selectors';
import { clearOffers, getOffersRequest } from './actions/actions';
import OfferCard from './components/OfferCard';
import { OFFER_STATUS_OPTIONS } from './contants';
import { IFilterValues } from './types';

const Offers: VFC = memo(() => {
  const dispatch = useDispatch();
  const perPage = PER_PAGE;
  const [queryParams, setQueryParams] = useSearchParams();
  const page = Number(queryParams.get('page')) || 1;
  const { t } = useTranslation(['offer', 'common']);
  const offers = useSelector(getOffersSelector);
  const pageInfo = useSelector(getOffersPageInfoSelector);
  const isLoading = useSelector(getComponentLoadingSelector);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const toggleFilterPopup = () => setShowFiltersModal(!showFiltersModal);

  const statuses = useMemo(() => {
    const status = queryParams.get('statuses');
    return status ? [status] as OfferStatus[] : [];
  }, [queryParams]);

  const sort = useMemo(() => {
    const orderBy = queryParams.get('orderBy');
    const orderName = queryParams.get('orderName');
    return orderBy && orderName ? {
      orderBy,
      orderName,
    } as ISortItem : defaultSort.createdAt;
  }, [queryParams]);

  const dispatchOffers = useCallback((payload) => {
    dispatch(getOffersRequest(payload));
  }, [dispatch]);

  useEffect(() => {
    dispatchOffers({
      page,
      perPage,
      sort: [sort],
      statuses,
    });
  }, [page, sort, statuses]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearOffers());
  }, []);

  const handlePageChange = (value: number) => {
    queryParams.set('page', value.toString());
    setQueryParams(queryParams);
  };

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
        <PageTitle>
          {t('offer:title')}
        </PageTitle>
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
              options: OFFER_STATUS_OPTIONS,
              initialValue: statuses[0],
              optionPlaceholder: t('common:filterPopup.chooseStatus'),
            }]}
          />
        )
      }
      </StyledSortAndFiltersWrapper>
      {isLoading ? <Preloader isComponent /> : (
        <>
          {!!offers?.length
            && (
              <>
                <CardsBlock>
                  {offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
                </CardsBlock>
                {pageInfo?.totalPageCount && (
                  <StyledPaginationContainer>
                    <Pagination
                      total={pageInfo.totalPageCount}
                      onChange={handlePageChange}
                      page={page}
                    />
                  </StyledPaginationContainer>
                )}
              </>
            )}
          {!offers?.length && (
            <EmptyListPlaceholder>{t('offer:emptyOffers')}</EmptyListPlaceholder>
          )}
        </>
      )}

    </PagesWrapper>
  );
});

export default Offers;
