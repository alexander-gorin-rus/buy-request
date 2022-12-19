import React, { VFC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  useNavigate,
} from 'react-router-dom';
import dispatchPromise, { dateFormatWithTime } from 'src/utils/helpers';
import { ReactComponent as DeleteIcon } from 'src/delete.svg';
import Popup from 'src/components/Popup';
import {
  markNotificationAsRead,
  removeNotification,
} from '../actions/actions';
import {
  StyledNotificationCard,
  StyledNotificationDate,
  NotificationIcon,
  NotificationInfo,
  NotificationMessage,
  NotificationType,
  IsReadMark,
  IsReadMarkWrapper,
  DeleteIconWrapper,
  NotificationInfoWrapper,
} from '../styles';
import { INotificationCenterCardProps } from '../types';
import useNotificationContent from '../hooks/useNotificationContent';
import NotificationsIcons from './NotificationsIcons';

const NotificationCenterCard: VFC<INotificationCenterCardProps> = memo(
  ({ data, updateNotifications }) => {
    const [isDeletedNotificationOpen, setIsDeletedNotificationOpen] = useState(false);
    const { t } = useTranslation(['common', 'notificationsCenter']);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
      id, isRead, createdAt, archive, type,
    } = data;

    const { label, redirectUrl } = useNotificationContent(data, t);

    const toggleDeleteNotificationModal = () => {
      setIsDeletedNotificationOpen((prev) => !prev);
    };

    const markAsRead = () => {
      if (isRead) {
        navigate(redirectUrl);
      } else {
        dispatchPromise(dispatch, markNotificationAsRead({ id }))
          .then(() => {
            navigate(redirectUrl);
          });
      }
    };

    const deleteNotification = () => {
      dispatchPromise(dispatch, removeNotification({ id }))
        .then(() => {
          toggleDeleteNotificationModal();
          updateNotifications();
        });
    };

    return (
      <>
        <StyledNotificationCard>
          <IsReadMarkWrapper>
            {!isRead && (
            <IsReadMark />
            )}
          </IsReadMarkWrapper>
          <NotificationIcon>
            <NotificationsIcons
              type={type}
            />
          </NotificationIcon>
          <NotificationInfoWrapper>
            <NotificationInfo>
              <NotificationMessage
                onClick={markAsRead}
              >
                {label}
                <StyledNotificationDate>{dateFormatWithTime(createdAt)}</StyledNotificationDate>
              </NotificationMessage>
              <NotificationType>
                {label}
              </NotificationType>
            </NotificationInfo>
            {!archive && (
            <DeleteIconWrapper
              onClick={toggleDeleteNotificationModal}
            >
              <DeleteIcon />
            </DeleteIconWrapper>
            )}
          </NotificationInfoWrapper>
        </StyledNotificationCard>
        {isDeletedNotificationOpen && (
        <Popup
          title={t('notificationsCenter:notifications.deleteNotification')}
          accept={deleteNotification}
          cancel={toggleDeleteNotificationModal}
          acceptButtonTitle={t('common:form.button.continue')}
          cancelButtonTitle={t('common:form.button.cancel')}
        />
        )}
      </>
    );
  },
);

export default NotificationCenterCard;
