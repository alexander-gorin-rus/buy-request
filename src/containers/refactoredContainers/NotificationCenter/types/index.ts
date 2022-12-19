import { Dispatch, SetStateAction } from 'react';
import { ActionMeta, SingleValue } from 'react-select';
import {
  IDefaultAction, IDefaultPromiseAction, IPageInfo, ISortItem,
} from 'src/core/types';
import { NotificationType } from 'src/utils/constants';

export interface INotification {
  id: string;
  createdAt: string;
  isRead: boolean;
  message: string;
  subjectId: string;
  type: NotificationType;
  updatedAt: string;
  userId: string;
  archive: boolean;
}

export enum NotificationsSelectType {
  ALL = 'all',
  DEALS = 'deals',
  OFFERS = 'offers',
  REQUESTS = 'requests',
  ARCHIVED = 'archived',
}

export interface IStatusSelectActive {
  isActive?: boolean;
}

export enum NotificationsSelectPeriod {
  ALL = 'all',
  LAST_DAY = 'last_day',
  LAST_WEEK = 'last_week',
  LAST_MONTH = 'last_month',
}

export interface INotificationsSelectDateItem {
  label: string;
  value: NotificationsSelectPeriod;
}

export interface INotificationsSelectDateProps {
  itemsList: INotificationsSelectDateItem[];
  optionPlaceholder?: string;
  sortOption: ISortItem;
  sort: ISortItem;
  setSort: Dispatch<SetStateAction<ISortItem>> | ((value: ISortItem) => void);
  handleSelect: (newValue: SingleValue<INotificationsSelectDateItem>,
    actionMeta: ActionMeta<INotificationsSelectDateItem>) => void;
}

export interface IFilterForm {
  period: string;
}

export interface IIconsType {
  type: NotificationType;
}

export interface INotificationCenterCardProps {
  data: INotification;
  updateNotifications: () => void;
}

export interface INotificationsRequest {
  pageInfo: IPageInfo
  data: INotification[] | [];
}

export interface IGetNotificationsPayload {
  page: number;
  perPage?: number;
  isRead?: boolean;
  notificationType?: NotificationsSelectType;
  notificationPeriod?: NotificationsSelectPeriod;
  sorting?: ISortItem;
}

export interface ISingleNotificationProps {
  data: IGetNotificationsPayload;
}

export interface INotificationsFilters {
  page: number;
  isRead: boolean;
  notificationType: NotificationsSelectType;
  notificationPeriod: NotificationsSelectPeriod;
}

export interface INotificationsState {
  request: INotificationsRequest | null;
  filters: INotificationsFilters,
  sorting: ISortItem;
}

export interface INotificationsSuccessPayload {
  request: INotificationsRequest;
}

export interface IMarkNotificationAsReadPayload {
  id: string;
}

export interface IRemoveNotificationPayload {
  id: string;
}

export interface IRemoveNotificationAction {
  type: string;
  payload: IRemoveNotificationPayload
}

export interface IGetNotificationsAction
  extends IDefaultAction<string, IGetNotificationsPayload> {}
export interface IGetNotificationsSuccessAction
  extends IDefaultAction<string, INotificationsSuccessPayload> {}
export interface IMarkNotificationAsReadAction
  extends IDefaultPromiseAction<string, IMarkNotificationAsReadPayload> {}
export interface IClearNotificationsAction extends IDefaultAction<string, null> {}
export type INotificationCenterAction =
  IGetNotificationsSuccessAction |
  IClearNotificationsAction;

export interface IRemoveNotificationPromiseAction
  extends IDefaultPromiseAction<string, IRemoveNotificationPayload> {}
