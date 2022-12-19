import types from 'src/core/actionTypes';

import { IFetchNotificationsSuccess, INotificationsState } from '../types';

const initialState: INotificationsState = {
  notifications: null,
};

export default (
  state: INotificationsState = initialState,
  action: IFetchNotificationsSuccess,
): INotificationsState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: payload?.notifications,
      };
    default:
      return {
        ...state,
      };
  }
};
