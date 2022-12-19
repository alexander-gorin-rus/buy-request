import { AnyAction } from 'redux';
import types from '../../../../core/actionTypes';
import { defaultSort } from '../../../../utils/constants';
import {
  INotificationsState,
  NotificationsSelectType,
  NotificationsSelectPeriod,
} from '../types';

const initialState: INotificationsState = {
  request: null,
  filters: {
    page: 1,
    isRead: true,
    notificationType: NotificationsSelectType.ALL,
    notificationPeriod: NotificationsSelectPeriod.ALL,
  },
  sorting: defaultSort.createdAt,
};

export default (
  state: INotificationsState = initialState,
  action: AnyAction,
): INotificationsState => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_NOTIFICATIONS_CENTER_SUCCESS:
      return {
        ...state,
        request: payload?.request || null,
      };
    case types.CLEAR_NOTIFICATIONS:
      return {
        ...initialState,
      };
    case types.SET_NOTIFICATIONS_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload,
        },
      };
    case types.SET_NOTIFICATIONS_SORTING:
      return {
        ...state,
        sorting: payload?.sorting,

      };
    default:
      return { ...state };
  }
};
