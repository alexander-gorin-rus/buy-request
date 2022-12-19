import React, { VFC, memo } from 'react';
import { LANGUAGES } from 'src/utils/constants';
import { useTranslation } from 'react-i18next';
import { StyledChatMessageList, StyledGroupedMessage, StyledMessageData } from '../styled';
import { IChatMessage, IChatMessageListProps } from '../types';
import ChatMessage from './ChatMessage';

const ChatMessageList: VFC<IChatMessageListProps> = memo(({ messages }) => {
  const { t, i18n: { language } } = useTranslation('common');

  const items = messages.reduce((acc: { [acc: string] : IChatMessage[] }, el) => {
    let options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' } as Intl.DateTimeFormatOptions;
    const messageDate = new Date(el.createdAt);
    const monthName = () => {
      if (language === LANGUAGES.en) {
        return messageDate.toLocaleDateString('en-US', options);
      }
      return messageDate.toLocaleDateString('ru-RU', options);
    };
    let date = monthName();

    if (messageDate.toLocaleDateString() === new Date().toLocaleDateString()) {
      date = `${t('chat.days.today')}`;
    }
    const yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);

    if (messageDate.toLocaleDateString() === yesterday.toLocaleDateString()) {
      date = `${t('chat.days.yesterday')}`;
    }

    if (messageDate.getFullYear() !== new Date().getFullYear()) {
      options = { day: 'numeric', month: 'long', year: 'numeric' } as Intl.DateTimeFormatOptions;
    }

    if (acc[date]) {
      return { ...acc, [date]: acc[date].concat([el]) };
    }
    return { ...acc, [date]: [el] };
  }, {});

  return (
    <StyledChatMessageList>
      {Object.keys(items).map((key) => (
        <StyledGroupedMessage key={key} title={key}>
          {items[key].map((message) => <ChatMessage message={message} key={message.id} />)}
          <StyledMessageData>{key}</StyledMessageData>
        </StyledGroupedMessage>
      ))}
    </StyledChatMessageList>
  );
});

export default ChatMessageList;
