import types from 'src/core/actionTypes';
import { IDefaultErrorPayload } from 'src/core/types';
import {
  IMarkNotificationAsReadPayload,
  IFetchNotificationsSuccess,
  Payload,
} from '../types';

export const getNotificationsRequest = () => ({
  type: types.GET_NOTIFICATIONS_REQUEST,
});

export const getNotificationsSuccess = (payload: Payload): IFetchNotificationsSuccess => ({
  type: types.GET_NOTIFICATIONS_SUCCESS,
  payload,
});

export const markNotificationAsRead = (payload: IMarkNotificationAsReadPayload) => ({
  type: types.MARK_NOTIFICATION_AS_READ_REQUEST,
  payload,
});

export const markNotificationAsReadSuccess = () => ({
  type: types.MARK_NOTIFICATION_AS_READ_SUCCESS,
});

export const markNotificationAsReadFailure = (payload: IDefaultErrorPayload) => ({
  type: types.MARK_NOTIFICATION_AS_READ_FAILURE,
  payload,
});
