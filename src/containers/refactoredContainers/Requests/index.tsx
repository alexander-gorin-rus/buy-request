import React, {
  EffectCallback,
  memo,
  useEffect,
  useMemo,
  useState,
  VFC,
} from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import EmptyListPlaceholder from 'src/components/EmptyListPlaceholder';
import {
  PagesWrapper, PageTitle, StyledPaginationContainer, StyledSortAndFiltersWrapper,
} from 'src/commonStyles';
import {
  defaultSort, PER_PAGE, RequestStatus,
} from 'src/utils/constants';
import { getComponentLoadingSelector, isCurrentUserConsumerSelector, isCurrentUserSellerSelector } from 'src/core/selectors';
import { ISortItem, IRequestCard } from 'src/core/types';
import { CardsBlock } from 'src/commonStyles/CardsBlock';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import Pagination from 'src/components/Pagination';
import { APP_ROUTES } from 'src/core/appRoutes';
import { SortAndFilterIcons } from 'src/components/SortAndFilterIcons';
import { FilterComponent } from 'src/components/FilterComponent';
import IconDate from 'src/components/SortAndFilterIcons/icons/IconDateSort/IconDate';
import Sorting from 'src/components/Sorting';
import Preloader from 'src/components/Preloader';
import { FilterFieldType } from 'src/components/FilterComponent/types';
import { REQUESTS_STATUS_OPTIONS } from './constants';
import {
  IconsWrapper,
  NewRequestWrapper,
  RequestsTitleDiv,
  TitleAndNewRequestBlock,
} from './styles';
import RequestCard from './components/RequestCard';
import { clearRequests, getRequests } from './actions/actions';
import { getRequestsSelector } from './selectors';
import { IFilterValues } from './types';

const Requests: VFC = memo(() => {
  const perPage = PER_PAGE;
  const { t } = useTranslation(['request', 'common']);
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useSearchParams();
  const page = Number(queryParams.get('page')) || 1;
  const isLoading = useSelector(getComponentLoadingSelector);
  const { data, pageInfo } = useSelector(getRequestsSelector) ?? {};
  const isCurrentUserConsumer = useSelector(isCurrentUserConsumerSelector);
  const isCurrentUserSeller = useSelector(isCurrentUserSellerSelector);
  const navigate = useNavigate();
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const statuses = useMemo(() => {
    const status = queryParams.get('statuses');
    return status ? [status] as RequestStatus[] : [];
  }, [queryParams]);

  const sort = useMemo(() => {
    const orderBy = queryParams.get('orderBy');
    const orderName = queryParams.get('orderName');
    return orderBy && orderName ? {
      orderBy,
      orderName,
    } as ISortItem : defaultSort.createdAt;
  }, [queryParams]);

  const handlePageChange = (value: number) => {
    queryParams.set('page', value.toString());
    setQueryParams(queryParams);
  };

  const handleSortChange = (newSort: ISortItem) => {
    queryParams.set('orderBy', newSort.orderBy);
    queryParams.set('orderName', newSort.orderName);
    setQueryParams(queryParams);
  };

  useEffect(() => {
    dispatch(getRequests({
      page,
      perPage,
      sort: [sort],
      statuses,
    }));
  }, [page, sort, statuses]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearRequests());
  }, []);

  const CreateNewRequestRedirect = () => {
    navigate(`${APP_ROUTES.CREATE_REQUEST}`);
  };

  const toggleFilterPopup = () => setShowFiltersModal(!showFiltersModal);

  const handleSubmit = (filterValues: IFilterValues) => {
    queryParams.set('statuses', filterValues.status);
    queryParams.set('page', '1');
    setQueryParams(queryParams);
  };

  return (
    <PagesWrapper>

      <TitleAndNewRequestBlock>
        <RequestsTitleDiv>
          <PageTitle>
            {t('request:title')}
          </PageTitle>
        </RequestsTitleDiv>
        {isCurrentUserConsumer && (
          <NewRequestWrapper>
            <CustomStyledButton
              size="large"
              primary
              onClick={CreateNewRequestRedirect}
            >
              {t('request:newRequest')}
            </CustomStyledButton>
          </NewRequestWrapper>
        )}
      </TitleAndNewRequestBlock>

      <IconsWrapper>
        <StyledSortAndFiltersWrapper>
          {
          isCurrentUserSeller ? (
            <Sorting
              sort={sort}
              sortOption={defaultSort.createdAt}
              setSort={handleSortChange}
              icon={IconDate}
            />
          ) : (
            <>
              <SortAndFilterIcons
                sort={sort}
                sortOption={defaultSort.createdAt}
                setSort={handleSortChange}
                popupToggle={toggleFilterPopup}
              />
              {showFiltersModal && (
                <FilterComponent
                  onClose={toggleFilterPopup}
                  onSubmit={handleSubmit}
                  buttonTitle={t('common:filterPopup.apply')}
                  scheme={[{
                    name: 'status',
                    fieldType: FilterFieldType.select,
                    label: t('common:filterPopup.status'),
                    options: REQUESTS_STATUS_OPTIONS,
                    initialValue: statuses[0],
                    optionPlaceholder: t('common:filterPopup.chooseStatus'),
                  }]}
                />
              )}
            </>
          )
        }
        </StyledSortAndFiltersWrapper>
      </IconsWrapper>
      {isLoading ? <Preloader isComponent /> : (
        <>
          {!!data?.length
           && (
           <>
             <CardsBlock>
               {data?.map(
                 (elem: IRequestCard) => <RequestCard key={elem.id} data={elem} />,
               )}
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
            <EmptyListPlaceholder>{t('request:emptyRequests')}</EmptyListPlaceholder>
          )}
        </>
      )}

    </PagesWrapper>
  );
});

export default Requests;
