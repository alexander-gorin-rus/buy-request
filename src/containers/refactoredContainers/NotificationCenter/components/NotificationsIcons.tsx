import React, { VFC } from 'react';
import { NotificationType } from 'src/utils/constants';
import { ReactComponent as RequstOfferIcon } from 'src/images/request-offer-created-icon.svg';
import { ReactComponent as OfferCancelledIcon } from 'src/images/offer-cancelled.svg';
import { ReactComponent as DealCreatedIcon } from 'src/images/deal-created.svg';
import { ReactComponent as NewNotificationIcon } from 'src/images/new-notification.svg';
import { IIconsType } from '../types';

const NotificationsIcons: VFC<IIconsType> = ({ type }) => {
  switch (type) {
    case NotificationType.NEW_REQUEST_CREATED:
    case NotificationType.NEW_OFFER_CREATED:
      return (
        <RequstOfferIcon />
      );
    case NotificationType.OFFER_CANCELED:
    case NotificationType.DEAL_CANCELED:
      return (
        <OfferCancelledIcon />
      );
    case NotificationType.NEW_DEAL_CREATED:
      return (
        <DealCreatedIcon />
      );
    case NotificationType.NEW_MESSAGE:
      return (
        <NewNotificationIcon />
      );
    default: return null;
  }
};

export default NotificationsIcons;
