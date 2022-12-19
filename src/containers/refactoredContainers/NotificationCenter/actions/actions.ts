import types from '../../../../core/actionTypes';
import { IDefaultErrorPayload } from '../../../../core/types';
import {
  INotificationsSuccessPayload,
  IGetNotificationsSuccessAction,
  IMarkNotificationAsReadPayload,
  IMarkNotificationAsReadAction,
  IRemoveNotificationPayload,
  IRemoveNotificationAction,
  IGetNotificationsPayload,
} from '../types';

export const getNotifications = (payload: IGetNotificationsPayload) => ({
  type: types.GET_NOTIFICATIONS_CENTER_REQUEST,
  payload,
});

export const getNotificationsSuccess = (
  payload: INotificationsSuccessPayload,
): IGetNotificationsSuccessAction => ({
  type: types.GET_NOTIFICATIONS_CENTER_SUCCESS,
  payload,
});

export const getNotificationsFailure = (payload: IDefaultErrorPayload) => ({
  type: types.GET_NOTIFICATIONS_CENTER_FAILURE,
  payload,
});

export const clearNotifications = () => ({
  type: types.CLEAR_NOTIFICATIONS,
});

export const markNotificationAsRead = (
  payload: IMarkNotificationAsReadPayload,
): IMarkNotificationAsReadAction => ({
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

export const removeNotificationSuccess = () => ({
  type: types.REMOVE_NOTIFICATION_SUCCESS,
});

export const removeNotificationFailure = (payload: IDefaultErrorPayload) => ({
  type: types.REMOVE_NOTIFICATION_FAILURE,
  payload,
});

export const removeNotification = (
  payload: IRemoveNotificationPayload,
): IRemoveNotificationAction => ({
  type: types.REMOVE_NOTIFICATION_REQUEST,
  payload,
});
