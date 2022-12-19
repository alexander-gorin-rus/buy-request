import i18next from 'i18next';
import { NotificationType } from '../../../../utils/constants';
import { NotificationsSelectType, NotificationsSelectPeriod, INotificationsSelectDateItem } from '../types';

export const NOTIFICATION_TYPES_MAP = {
  [NotificationsSelectType.ALL]: {
    types: [
      NotificationType.NEW_REQUEST_CREATED,
      NotificationType.NEW_OFFER_CREATED,
      NotificationType.OFFER_CANCELED,
      NotificationType.NEW_DEAL_CREATED,
      NotificationType.DEAL_PAID,
      NotificationType.DEAL_CANCELED,
      NotificationType.DEAL_COMPLETED,
      NotificationType.DEAL_CUSTOMER_PAID,
      NotificationType.DEAL_DISPUTE,
      NotificationType.NEW_MESSAGE,
    ],
    isArchive: false,
  },
  [NotificationsSelectType.DEALS]: {
    types: [
      NotificationType.NEW_DEAL_CREATED,
      NotificationType.DEAL_PAID,
      NotificationType.DEAL_CANCELED,
      NotificationType.DEAL_COMPLETED,
      NotificationType.DEAL_CUSTOMER_PAID,
      NotificationType.DEAL_DISPUTE,
      NotificationType.NEW_MESSAGE,
    ],
    isArchive: false,
  },
  [NotificationsSelectType.OFFERS]: {
    types: [
      NotificationType.NEW_OFFER_CREATED,
      NotificationType.OFFER_CANCELED,
    ],
    isArchive: false,
  },
  [NotificationsSelectType.REQUESTS]: {
    types: [
      NotificationType.NEW_REQUEST_CREATED,
    ],
    isArchive: false,
  },
  [NotificationsSelectType.ARCHIVED]: {
    types: [
      NotificationType.NEW_REQUEST_CREATED,
      NotificationType.NEW_OFFER_CREATED,
      NotificationType.OFFER_CANCELED,
      NotificationType.NEW_DEAL_CREATED,
      NotificationType.DEAL_PAID,
      NotificationType.DEAL_CANCELED,
      NotificationType.DEAL_COMPLETED,
      NotificationType.DEAL_CUSTOMER_PAID,
      NotificationType.DEAL_DISPUTE,
      NotificationType.NEW_MESSAGE,
    ],
    isArchive: true,
  },
};

export const NOTIFICATION_PERIOD_MAP = {
  [NotificationsSelectPeriod.ALL]: undefined,
  [NotificationsSelectPeriod.LAST_DAY]: 1,
  [NotificationsSelectPeriod.LAST_WEEK]: 7,
  [NotificationsSelectPeriod.LAST_MONTH]: 31,
};

export const CONSUMER_NOTIFICATIONS_SELECT_TYPE = [
  NotificationsSelectType.ALL,
  NotificationsSelectType.DEALS,
  NotificationsSelectType.OFFERS,
  NotificationsSelectType.ARCHIVED,
];

export const SELLER_NOTIFICATIONS_SELECT_TYPE = [
  NotificationsSelectType.ALL,
  NotificationsSelectType.DEALS,
  NotificationsSelectType.REQUESTS,
  NotificationsSelectType.ARCHIVED,
];

export const NOTIFICATIONS_DATE_TYPE_OPTIONS: INotificationsSelectDateItem[] = [
  {
    label: i18next.t('notificationsCenter:period.all'),
    value: NotificationsSelectPeriod.ALL,
  },
  {
    label: i18next.t('notificationsCenter:period.last_day'),
    value: NotificationsSelectPeriod.LAST_DAY,
  },
  {
    label: i18next.t('notificationsCenter:period.last_week'),
    value: NotificationsSelectPeriod.LAST_WEEK,
  },
  {
    label: i18next.t('notificationsCenter:period.last_month'),
    value: NotificationsSelectPeriod.LAST_MONTH,
  },
];
