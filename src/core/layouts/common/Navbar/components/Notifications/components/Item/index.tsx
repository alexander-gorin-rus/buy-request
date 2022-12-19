import React, { memo, VFC } from 'react';
import { useTranslation } from 'react-i18next';

import dispatchPromise, { timeFormatForNotifications } from 'src/utils/helpers';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { INotification } from '../../types';
import { NOTIFICATION_TYPES } from '../../constants';
import { markNotificationAsRead } from '../../actions/actions';
import {
  SDate, SIcon, SItem, SSubtitle, STitle, STitleContainer,
} from './styles';

interface ItemProps {
  item: INotification;
}

const Item: VFC<ItemProps> = ({ item }) => {
  const { t } = useTranslation('notifications');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    Icon, text, type, redirectUrl,
  } = NOTIFICATION_TYPES[item.type] ?? {};
  const date = timeFormatForNotifications(item.createdAt);

  const openNotification = () => {
    dispatchPromise(dispatch, markNotificationAsRead({ id: item.id }))
      .then(() => {
        navigate(`${redirectUrl}/${item.subjectId}`);
      });
  };

  return (
    <SItem onClick={openNotification}>
      <SIcon type={type}>
        <Icon />
      </SIcon>
      <div>
        <STitleContainer>
          <STitle>{item.message}</STitle>
          <SDate>{date}</SDate>
        </STitleContainer>
        <SSubtitle>{t(text)}</SSubtitle>
      </div>
    </SItem>
  );
};

export default memo(Item);
