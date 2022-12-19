import { useMemo } from 'react';
import { TFunction } from 'react-i18next';
import { INotification } from '../types';
import { APP_ROUTES } from '../../../../core/appRoutes';
import { NotificationType } from '../../../../utils/constants';

const useNotificationContent = (data: INotification, t: TFunction) => {
  const { type, subjectId } = data;
  const { label, redirectUrl } = useMemo(() => {
    switch (type) {
      case NotificationType.NEW_REQUEST_CREATED:
        return {
          label: t('notificationsCenter:request.created.label'),
          redirectUrl: `${APP_ROUTES.REQUEST_MARKETPLACE}/${subjectId}`,
        };
      case NotificationType.NEW_OFFER_CREATED:
        return {
          label: t('notificationsCenter:offer.created.label'),
          redirectUrl: `${APP_ROUTES.OFFERS}/${subjectId}`,
        };
      case NotificationType.OFFER_CANCELED:
        return {
          label: t('notificationsCenter:offer.canceled.label'),
          redirectUrl: `${APP_ROUTES.OFFERS}/${subjectId}`,
        };
      case NotificationType.NEW_DEAL_CREATED:
        return {
          label: t('notificationsCenter:deal.created.label'),
          redirectUrl: `${APP_ROUTES.DEAL_CONFIRMATION}/${subjectId}`,
        };
      case NotificationType.DEAL_PAID:
        return {
          label: t('notificationsCenter:deal.paid.label'),
          redirectUrl: `${APP_ROUTES.DEAL_CONFIRMATION}/${subjectId}`,
        };
      case NotificationType.DEAL_CANCELED:
        return {
          label: t('notificationsCenter:deal.canceled.label'),
          redirectUrl: `${APP_ROUTES.DEAL_CONFIRMATION}/${subjectId}`,
        };
      case NotificationType.DEAL_COMPLETED:
        return {
          label: t('notificationsCenter:deal.completed.label'),
          redirectUrl: `${APP_ROUTES.DEAL_CONFIRMATION}/${subjectId}`,
        };
      case NotificationType.DEAL_CUSTOMER_PAID:
        return {
          label: t('notificationsCenter:deal.customer_paid.label'),
          redirectUrl: `${APP_ROUTES.DEAL_CONFIRMATION}/${subjectId}`,
        };
      case NotificationType.DEAL_DISPUTE:
        return {
          label: t('notificationsCenter:deal.dispute.label'),
          redirectUrl: `${APP_ROUTES.DEAL_CONFIRMATION}/${subjectId}`,
        };
      case NotificationType.NEW_MESSAGE:
        return {
          label: t('notificationsCenter:new_message.label'),
          redirectUrl: `${APP_ROUTES.DEAL_CONFIRMATION}/${subjectId}`,
        };
      default:
        return {
          label: t('notificationsCenter:default.label'),
          redirectUrl: '',
        };
    }
  }, [data]);
  return { label, redirectUrl };
};

export default useNotificationContent;
