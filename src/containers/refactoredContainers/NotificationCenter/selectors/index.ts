import { createSelector } from 'reselect';
import { AppState } from '../../../../core/reducers';
import { isCurrentUserConsumerSelector, isCurrentUserSellerSelector } from '../../../../core/selectors';
import { CONSUMER_NOTIFICATIONS_SELECT_TYPE, SELLER_NOTIFICATIONS_SELECT_TYPE } from '../constants';

export const getNotificationsSelector = (state: AppState) => state.notificationsCenter.request;

export const getNotificationsFiltersSelector = (
  state: AppState,
) => state.notificationsCenter.filters;

export const getNotificationsSortingSelector = (
  state: AppState,
) => state.notificationsCenter.sorting;

export const getNotificationsSelectTypeSelector = createSelector(
  isCurrentUserConsumerSelector,
  isCurrentUserSellerSelector,
  (isCurrentUserConsumer, isCurrentUserSeller) => {
    if (isCurrentUserConsumer) {
      return CONSUMER_NOTIFICATIONS_SELECT_TYPE;
    }
    if (isCurrentUserSeller) {
      return SELLER_NOTIFICATIONS_SELECT_TYPE;
    }
    return [];
  },
);
