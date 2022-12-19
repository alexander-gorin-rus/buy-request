import i18next from '../i18next';

export const stepsDelivery = [
  {
    id: '1',
    arrived: true,
    departure: true,
    description: 'The flight arrived in the country of destation',
    date: '2022-01-25 8:55:00 [GMT +3]',
  },
  {
    id: '2',
    arrived: true,
    departure: true,
    description: 'The flight departed from the country of departure',
    date: '2022-02-03 12:55:00 [GMT +8]',
  },
  {
    id: '3',
    arrived: false,
    departure: false,
    description: 'Delivered Airways',
    date: '2022-02-10 15:25:00 [GMT +8]',
  },
];

export const passwordChangeNotifications = {
  SUCCESS: i18next.t('common:passwordChange.success'),
  ERROR: i18next.t('common:passwordChange.error'),
};

export const dealStatusLabels = {
  IN_PROGRESS: 'dealCard:dealStatus.progress',
  CUSTOMER_PAID: 'dealCard:dealStatus.customer_paid',
  PAID: 'dealCard:dealStatus.paid',
  COMPLETED: 'dealCard:dealStatus.confirm',
  CANCELED: 'dealCard:dealStatus.canceled',
  DISPUTE: 'dealCard:dealStatus.dispute',
};

export const offerStatusLabels = {
  CANCELED_BY_CONSUMER: 'singleOffer:offer.canceledByConsumer',
  CANCELED_BY_SELLER: 'singleOffer:offer.canceledBySeller',
  CREATED: 'singleOffer:offer.created',
  CONFIRMED: 'singleOffer:offer.confirmed',
  IS_HOLD: 'singleOffer:offer.isHold',
  CANCELED: 'singleOffer:offer.canceled',
};

export const requestStatusLabels = {
  DEFAULT_IN_PROGRESS: 'requestCard:status.in_progress',
  DELETEABLE: 'requestCard:status.in_progress',
  IN_PROGRESS: 'requestCard:status.in_progress',
  DISABLE: 'requestCard:status.disable',
};

export enum MessageTypes {
  WARN = 'WARNING',
  INFO = 'INFO',
  FAILURE = 'FAILURE',
  SUCCESS = 'SUCCESS',
}

export enum OfferStatus {
  CANCELED_BY_CONSUMER = 'CANCELED_BY_CONSUMER',
  CANCELED_BY_SELLER = 'CANCELED_BY_SELLER',
  CONFIRMED = 'CONFIRMED',
  CREATED = 'CREATED',
  IS_HOLD = 'IS_HOLD',
  CANCELED = 'CANCELED',
}

export enum DealStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  CUSTOMER_PAID = 'CUSTOMER_PAID',
  PAID = 'PAID',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

export enum RequestStatus {
  DEFAULT_IN_PROGRESS = 'DEFAULT_IN_PROGRESS',
  DELETEABLE = 'DELETEABLE',
  IN_PROGRESS = 'IN_PROGRESS',
  DISABLE = 'DISABLE',
}

export enum TypeUser {
  seller = 'SELLER',
  consumer = 'CONSUMER',
}

export enum Colors {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  ERROR = 'error',
}

export const dealStatusColor = {
  IN_PROGRESS: Colors.PRIMARY,
  CUSTOMER_PAID: Colors.INFO,
  PAID: Colors.SECONDARY,
  COMPLETED: Colors.SUCCESS,
  CANCELED: Colors.WARNING,
  DISPUTE: Colors.ERROR,
};

export const CodeErrorStatus = {
  CODE_ALREADY_GENERATED: 'CODE_ALREADY_GENERATED',
  CODE_TIMEOUT: 'CODE_TIMEOUT',
  INCORRECT_CODE: 'INCORRECT_CODE',
  SAME_PASSWORD: 'SAME_PASSWORD',
};

export enum LoginErrors {
  USER_NOT_EXIST = 'USER_NOT_EXIST',
  PASSWORD_ERROR = 'PASSWORD_ERROR',
  EMAIL_IS_NOT_VERIFIED = 'EMAIL_IS_NOT_VERIFIED',
}

export const ErrorMessages: any = {
  register: {
    USER_EXIST: 'errors:register.USER_EXIST',
  },
  verifyEmail: {
    USER_NOT_EXIST: 'errors:verifyEmail.USER_NOT_EXIST',
    EMAIL_IS_ALREADY_VERIFIED: 'errors:verifyEmail.EMAIL_IS_ALREADY_VERIFIED',
  },
  login: {
    [LoginErrors.USER_NOT_EXIST]: 'errors:login.USER_NOT_EXIST',
    [LoginErrors.PASSWORD_ERROR]: 'errors:login.PASSWORD_ERROR',
    [LoginErrors.EMAIL_IS_NOT_VERIFIED]: 'errors:login.EMAIL_IS_NOT_VERIFIED',
  },
  incorrectPassword: {
    INCORRECT_PASSWORD: 'errors:changePasswordStatus.PASSWORD_ERROR',
  },
  mediaFile: {
    IMAGE_SIZE: 'errors:mediaFile.IMAGE_SIZE',
  },
  resetPassword: {
    [CodeErrorStatus.CODE_TIMEOUT]: 'errors:resetPassword.CODE_TIMEOUT',
    [CodeErrorStatus.INCORRECT_CODE]: 'errors:resetPassword.INCORRECT_CODE',
    [CodeErrorStatus.SAME_PASSWORD]: 'errors:resetPassword.SAME_PASSWORD',
  },
};

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum OrderName {
  CREATED_AT = 'createdAt',
  NAME = 'name',
  DESCRIPTION = 'description',
}

export const defaultSort = {
  createdAt: {
    orderBy: OrderBy.DESC,
    orderName: OrderName.CREATED_AT,
  },
  name: {
    orderBy: OrderBy.ASC,
    orderName: OrderName.NAME,
  },
  description: {
    orderBy: OrderBy.DESC,
    orderName: OrderName.DESCRIPTION,
  },
};

export enum ButtonVariant {
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
}

export const PRODUCT_BUCKET_NAME = 'product';
export const OFFER_BUCKET_NAME = 'offer';
export const REQUEST_BUCKET_NAME = 'request';
export const MESSAGE_BUCKET_NAME = 'message';
export const AVATAR_BUCKET_NAME = 'avatar';

export enum NotificationType {
  NEW_REQUEST_CREATED = 'NEW_REQUEST_CREATED',
  NEW_OFFER_CREATED = 'NEW_OFFER_CREATED',
  OFFER_IN_PROGRESS = 'OFFER_IN_PROGRESS',
  OFFER_CANCELED = 'OFFER_CANCELED',
  OFFER_CONFIRMED = 'OFFER_CONFIRMED',
  NEW_DEAL_CREATED = 'NEW_DEAL_CREATED',
  DEAL_STATUS_CHANGED = 'DEAL_STATUS_CHANGED',
  DEAL_IN_PROGRESS = 'DEAL_IN_PROGRESS',
  DEAL_PAID = 'DEAL_PAID',
  DEAL_CANCELED = 'DEAL_CANCELED',
  DEAL_COMPLETED = 'DEAL_COMPLETED',
  DEAL_CUSTOMER_PAID = 'DEAL_CUSTOMER_PAID',
  DEAL_DISPUTE = 'DEAL_DISPUTE',
  NEW_MESSAGE = 'NEW_MESSAGE',
}

export const USER_NOTIFICATIONS_ALLOWED_TYPES = [
  NotificationType.NEW_REQUEST_CREATED,
  NotificationType.NEW_OFFER_CREATED,
  NotificationType.OFFER_CANCELED,
  NotificationType.NEW_DEAL_CREATED,
  NotificationType.DEAL_PAID,
  NotificationType.DEAL_CANCELED,
  NotificationType.DEAL_CUSTOMER_PAID,
  NotificationType.DEAL_DISPUTE,
  NotificationType.NEW_MESSAGE,
  NotificationType.DEAL_COMPLETED,
];

export enum EmitSubscribe {
  SERVER_MESSAGE = 'SERVER_MESSAGE',
  CLIENT_MESSAGE = 'CLIENT_MESSAGE',
  SERVER_MESSAGE_DELETE = 'SERVER_MESSAGE_DELETE',
  CLIENT_MESSAGE_DELETE = 'CLIENT_MESSAGE_DELETE',
  CLIENT_MESSAGE_EDIT = 'CLIENT_MESSAGE_EDIT',
  SERVER_MESSAGE_EDIT = 'SERVER_MESSAGE_EDIT',
  SERVER_DIALOG = 'SERVER_DIALOG',
  CLIENT_DIALOG = 'CLIENT_DIALOG',
  LEAVE_DIALOG = 'LEAVE_DIALOG',
}

export const CHAT_MESSAGE_LENGTH_MAX = 255;
export const MAX_INT = 2000000000;

export const MEDIA_RESTRICTIONS = {
  FILE_MAX_SIZE: 2097152,
  IMAGE_MAX_HEIGHT: 7680,
  IMAGE_MAX_WIDTH: 7680,
  IMAGE_MIN_HEIGHT: 100,
  IMAGE_MIN_WIDTH: 100,
  IMAGE_CHAT_MAX_SIZE: 7681,
  IMAGE_MAX_PIXELS_COUNT: 33189601,
};

export const LANGUAGES = {
  en: 'en-US',
  ru: 'ru-RU',
};
export const fontFamily = '\'Nunito\', sans-serif';

export const PER_PAGE = 8;

export enum UserErrorStatus {
  USER_NOT_EXIST = 'USER_NOT_EXIST',
  EMAIL_IS_ALREADY_VERIFIED = 'EMAIL_IS_ALREADY_VERIFIED',
  OTHER = 'OTHER',
}

export enum Currency {
  RUB = 'RUB',
  USD = 'USD',
}

export const BREAKPOINTS = {
  mobile: 600,
  mobileTablet: 905,
  mediumDesktop: 1240,
  largeDesktop: 1440,
};

export const optionsDateForReviews: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
