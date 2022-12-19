import { IDefaultAction, IDefaultPromiseAction } from 'src/core/types';
import { NotificationType } from 'src/utils/constants';

export interface INotification {
  id: string;
  isRead: boolean;
  userId: string;
  subjectId: string;
  message: string;
  type: NotificationType;
  createdAt: string;
}

export interface INotificationsState {
  notifications: INotification[] | null | undefined,
}

export type Payload = {
  notifications: INotification[],
};

export interface IMarkNotificationAsReadPayload {
  id: string;
}

export interface IFetchNotificationsSuccess extends IDefaultAction<string, Payload> {}

export interface IMarkNotificationAsReadAction
  extends IDefaultPromiseAction<string, IMarkNotificationAsReadPayload> {}
