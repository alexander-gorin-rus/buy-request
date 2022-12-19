import React, { memo, VFC } from 'react';
import { useTranslation } from 'react-i18next';

import { INotification } from '../../types';
import Item from '../Item';
import { SEmoji, SList, SNotFoundTitle } from './styles';

interface ContentProps {
  items: INotification[] | null | undefined;
}

const List: VFC<ContentProps> = ({ items }) => {
  const { t } = useTranslation('notifications');

  if (!items?.length) {
    return (
      <SNotFoundTitle>
        <SEmoji>&#128064;</SEmoji>
        {t('notFound')}
      </SNotFoundTitle>
    );
  }

  return (
    <SList>
      {
        items?.map((item) => (
          <Item
            key={item.id}
            item={item}
          />
        ))
      }
    </SList>
  );
};

export default memo(List);
