import React, {
  VFC, memo, useEffect, EffectCallback, useState,
  useMemo,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { FilterComponent } from 'src/components/FilterComponent';
import Checkbox from 'src/components/Checkbox';
import { defaultSort } from 'src/utils/constants';
import { ISortItem } from 'src/core/types';
import Pagination from 'src/components/Pagination';
import { PageTitle, StyledPaginationContainer } from 'src/commonStyles';
import { SortAndFilterIcons } from 'src/components/SortAndFilterIcons';
import { useSearchParams } from 'react-router-dom';
import EmptyListPlaceholder from 'src/components/EmptyListPlaceholder';
import EyesSmile from 'src/icons/eyesSmile.png';
import { FilterFieldType } from 'src/components/FilterComponent/types';
import { getComponentLoadingSelector } from 'src/core/selectors';
import Preloader from 'src/components/Preloader';
import {
  clearNotifications, getNotifications,
} from './actions/actions';
import NotificationCenterCard from './components/NotificationCenterCard';
import {
  getNotificationsSelector,
  getNotificationsSelectTypeSelector,
} from './selectors';
import {
  NotificationsSelectType,
  NotificationsSelectPeriod,
  INotification,
  IGetNotificationsPayload,
  IFilterForm,
} from './types';
import {
  ClearBlock,
  DateSelectWrapper,
  FiltersAndSortWrapper,
  FilterItems,
  FiltersListBlock,
  NotificationsCardsWrapper,
  NotificationsPageWrapper,
  SortingBlock,
} from './styles';
import { NOTIFICATIONS_DATE_TYPE_OPTIONS } from './constants';

const NotificationCenter: VFC = memo(() => {
  const { t } = useTranslation(['common', 'notificationsCenter']);
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useSearchParams();

  const page = Number(queryParams.get('page')) || 1;
  const isRead = queryParams.get('isRead') === 'true';
  const notificationType = (queryParams.get('type') || NotificationsSelectType.ALL) as NotificationsSelectType;
  const notificationPeriod = (queryParams.get('period') || NotificationsSelectPeriod.ALL) as NotificationsSelectPeriod;

  const { data, pageInfo } = useSelector(getNotificationsSelector) ?? {};
  const notificationsSelectType = useSelector(getNotificationsSelectTypeSelector);
  const isLoading = useSelector(getComponentLoadingSelector);

  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const toggleFilterPopup = () => setShowFiltersModal(!showFiltersModal);
  const sorting = useMemo(() => {
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

  const handleIsReadChange = () => {
    queryParams.set('isRead', (!isRead).toString());
    queryParams.set('page', '1');
    setQueryParams(queryParams);
  };

  const handleNotificationTypeChange = (type: NotificationsSelectType) => () => {
    queryParams.set('type', type.toString());
    queryParams.set('page', '1');
    setQueryParams(queryParams);
  };

  const handleNotificationPeriodChange = (values: IFilterForm) => {
    queryParams.set('period', values.period.toString());
    queryParams.set('page', '1');
    setQueryParams(queryParams);
  };

  const handelNotificationSortingChange = (newSort: ISortItem) => {
    queryParams.set('orderBy', newSort.orderBy);
    queryParams.set('orderName', newSort.orderName);
    setQueryParams(queryParams);
  };

  const updateNotifications = useCallback(() => {
    dispatch(getNotifications({
      page, isRead, notificationType, notificationPeriod, sorting,
    }));
  }, [page, isRead, notificationType, notificationPeriod, sorting]);

  useEffect(() => {
    updateNotifications();
  }, [page, isRead, notificationType, notificationPeriod, sorting]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearNotifications());
  }, []);

  useEffect(
    () => {
      const intervalId = window.setInterval(
        (filtersAndSorting: IGetNotificationsPayload) => dispatch(
          getNotifications(filtersAndSorting),
        ),
        30000,
        {
          page, isRead, notificationType, notificationPeriod, sorting,
        },
      );
      return () => {
        clearInterval(intervalId);
      };
    },
    [page, isRead, notificationType, notificationPeriod, sorting],
  );

  const renderList = () => {
    if (isLoading) {
      return (
        <Preloader isComponent />
      );
    }
    return data?.length ? (
      <>
        {data?.map((item: INotification) => (
          <NotificationCenterCard
            key={item.id}
            data={item}
            updateNotifications={updateNotifications}
          />
        ))}
        <StyledPaginationContainer>
          <Pagination
            page={page}
            total={pageInfo?.totalPageCount || 1}
            onChange={handlePageChange}
          />
        </StyledPaginationContainer>
      </>
    ) : (
      <EmptyListPlaceholder smile={EyesSmile}>
        {t('notificationsCenter:noNotifications')}
      </EmptyListPlaceholder>
    );
  };

  return (
    <>
      <PageTitle>{t('common:pageTitles.notifications')}</PageTitle>
      <NotificationsPageWrapper>
        <FiltersAndSortWrapper>
          <FiltersListBlock>
            {notificationsSelectType.map((type) => (
              <FilterItems
                key={type}
                value={type}
                onClick={handleNotificationTypeChange(type)}
                isActive={notificationType === type}
              >
                {t(`notificationsCenter:type.${type}`)}
              </FilterItems>
            ))}
          </FiltersListBlock>
          <SortingBlock>
            <SortAndFilterIcons
              sort={sorting}
              sortOption={defaultSort.createdAt}
              setSort={handelNotificationSortingChange}
              popupToggle={toggleFilterPopup}
            />
            {
              showFiltersModal && (
                <DateSelectWrapper>
                  <FilterComponent
                    onClose={toggleFilterPopup}
                    onSubmit={handleNotificationPeriodChange}
                    buttonTitle={t('common:filterPopup.apply')}
                    scheme={[{
                      name: 'period',
                      label: t('notificationsCenter:period.label'),
                      fieldType: FilterFieldType.select,
                      options: NOTIFICATIONS_DATE_TYPE_OPTIONS,
                      initialValue: notificationPeriod,
                      optionPlaceholder: t('notificationsCenter:period.choose_period'),
                    }]}
                  />
                </DateSelectWrapper>
              )
            }
          </SortingBlock>
        </FiltersAndSortWrapper>
        <ClearBlock>
          <Checkbox
            text={t('notificationsCenter:showViewed')}
            value={!isRead}
            onClick={handleIsReadChange}
            alternative
          />
        </ClearBlock>
        <NotificationsCardsWrapper>
          {renderList()}
        </NotificationsCardsWrapper>
      </NotificationsPageWrapper>
    </>
  );
});

export default NotificationCenter;
