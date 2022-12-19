import React, {
  useEffect, useState, VFC,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from 'src/core/appRoutes';
import { AppState } from 'src/core/reducers';

import List from './components/List';
import { getNotificationsRequest } from './actions/actions';
import {
  StyledBell, StyledNotificationsBtn,
  StyledNotificationsSubContainer,
  StyledNotifications, SLink, SCloseBtn,
  SHorizontalContainer,
  STitle,
  StyledClose,
} from './styles';

const Notifications: VFC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('notifications');

  const [isShow, setIsShow] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number>();

  const notifications = useSelector((state: AppState) => state.notifications.notifications);

  const count = notifications?.length ?? 0;

  const toggle = () => setIsShow(!isShow);

  const getNotifications = () => {
    dispatch(getNotificationsRequest());
  };

  useEffect(() => {
    getNotifications();

    const handle = () => {
      setIsShow(false);
    };

    document.addEventListener('click', handle);

    setIntervalId(window.setInterval(getNotifications, 30000));

    return () => {
      document.removeEventListener('click', handle);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <StyledNotifications onClick={(e) => e.stopPropagation()}>
      <StyledNotificationsBtn
        type="button"
        onClick={toggle}
        count={count}
      >
        <StyledBell />
      </StyledNotificationsBtn>
      {
        isShow && (
          <StyledNotificationsSubContainer>
            <SHorizontalContainer>
              <STitle>{t('title')}</STitle>
              <SCloseBtn
                type="button"
                onClick={toggle}
              >
                <StyledClose />
              </SCloseBtn>
            </SHorizontalContainer>
            <SLink to={APP_ROUTES.NOTIFICATIONS} onClick={toggle}>
              {t('viewAll')}
            </SLink>
            <List items={notifications} />
          </StyledNotificationsSubContainer>
        )
      }
    </StyledNotifications>
  );
};

export default Notifications;
