import React, {
  VFC, memo, useEffect, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatHeader from './components/ChatHeader';
import ChatInput from './components/ChatInput';
import ChatMessageList from './components/ChatMessageList';
import {
  StyledChatContainer,
  StyledChatBox,
} from './styled';
import { IChatProps } from './types';
import { useChat } from './hooks/useChat';
import { getCompanionUser } from './actions/actions';
import { getChatCompanionUserSelector } from './selectors';

const Chat: VFC<IChatProps> = memo(({
  userIds, currentUserId, dealId, isChatOpen, toggleChatView,
}) => {
  const companionUserId = useMemo(
    () => userIds.find((id) => id !== currentUserId),
    [userIds, currentUserId],
  );

  const companionUser = useSelector(getChatCompanionUserSelector);

  const userName = `${companionUser?.name} ${companionUser?.surname}`;

  const dispatch = useDispatch();

  useEffect(() => {
    if (companionUserId) {
      dispatch(getCompanionUser({ userId: companionUserId }));
    }
  }, [companionUserId, dispatch]);

  const { messages, sendMessage } = useChat(userIds, currentUserId, dealId);

  return (
    <StyledChatContainer>
      <StyledChatBox isChatOpen={isChatOpen}>
        <ChatHeader toggleChatView={toggleChatView} userName={userName} />
        <ChatMessageList messages={messages} />
        <ChatInput
          sendMessage={sendMessage}
        />
      </StyledChatBox>
    </StyledChatContainer>
  );
});

export default Chat;
