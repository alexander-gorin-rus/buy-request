import { FC, SVGProps } from 'react';
import { TFuncKey } from 'react-i18next';

import { NotificationType } from 'src/utils/constants';

import { APP_ROUTES } from 'src/core/appRoutes';
import { ReactComponent as Info } from '../images/info.svg';
import { ReactComponent as Message } from '../images/message.svg';
import { ReactComponent as Close } from '../images/close.svg';
import { ReactComponent as Success } from '../images/success.svg';

export const NOTIFICATION_TYPES: {
  [key: string]: {
    text: TFuncKey<'notifications'>;
    type: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
    redirectUrl: string;
  }
} = {
  [NotificationType.NEW_REQUEST_CREATED]: {
    text: 'request.created',
    type: 'INFO',
    Icon: Info,
    redirectUrl: APP_ROUTES.REQUEST_MARKETPLACE,
  },
  [NotificationType.NEW_OFFER_CREATED]: {
    text: 'offer.created',
    type: 'INFO',
    Icon: Info,
    redirectUrl: APP_ROUTES.OFFERS,
  },
  [NotificationType.OFFER_CANCELED]: {
    text: 'offer.canceled',
    type: 'DANGER',
    Icon: Close,
    redirectUrl: APP_ROUTES.OFFERS,
  },
  [NotificationType.NEW_DEAL_CREATED]: {
    text: 'deal.created',
    type: 'SUCCESS',
    Icon: Success,
    redirectUrl: APP_ROUTES.DEAL_CONFIRMATION,
  },
  [NotificationType.DEAL_PAID]: {
    text: 'deal.paid',
    type: 'SUCCESS',
    Icon: Success,
    redirectUrl: APP_ROUTES.DEAL_CONFIRMATION,
  },
  [NotificationType.DEAL_CANCELED]: {
    text: 'deal.canceled',
    type: 'DANGER',
    Icon: Close,
    redirectUrl: APP_ROUTES.DEAL_CONFIRMATION,
  },
  [NotificationType.DEAL_COMPLETED]: {
    text: 'deal.completed',
    type: 'SUCCESS',
    Icon: Success,
    redirectUrl: APP_ROUTES.DEAL_CONFIRMATION,
  },
  [NotificationType.DEAL_CUSTOMER_PAID]: {
    text: 'deal.paid',
    type: 'SUCCESS',
    Icon: Success,
    redirectUrl: APP_ROUTES.DEAL_CONFIRMATION,
  },
  [NotificationType.DEAL_DISPUTE]: {
    text: 'deal.dispute',
    type: 'INFO',
    Icon: Info,
    redirectUrl: APP_ROUTES.DEAL_CONFIRMATION,
  },
  [NotificationType.NEW_MESSAGE]: {
    text: 'new_message',
    type: 'MESSAGE',
    Icon: Message,
    redirectUrl: APP_ROUTES.DEAL_CONFIRMATION,
  },
};
