import React, { VFC, memo } from 'react';
import { useSelector } from 'react-redux';
import { IChatHeaderProps } from '../types';
import {
  StyledChatHeader, StyledChatTitle,
  StyledChatTitleBox, StyledCross,
} from '../styled';
import { AvatarComponent } from '../../AvatarComponent';
import { getChatCompanionUserSelector } from '../selectors';

const ChatHeader: VFC<IChatHeaderProps> = memo(({ toggleChatView, userName }) => {
  const companionUser = useSelector(getChatCompanionUserSelector);
  return (
    <StyledChatHeader>
      <StyledChatTitleBox>
        <AvatarComponent
          isEdit={false}
          src={companionUser?.avatar}
        />
        <StyledChatTitle>{userName}</StyledChatTitle>
      </StyledChatTitleBox>
      <StyledCross onClick={toggleChatView} />
    </StyledChatHeader>
  );
});

export default ChatHeader;
