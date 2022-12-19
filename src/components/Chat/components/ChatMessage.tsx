import React, {
  VFC, memo, useState, useMemo, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import config from '../../../config';
import { getCurrentUserSelector } from '../../../core/selectors';
import { timeFormat } from '../../../utils/helpers';
import {
  StyledMessageBox,
  StyledMessage,
  StyledMessageTime,
  StyledMessageGroup,
  ImageContainer,
} from '../styled';
import { IChatMessageProps } from '../types';
import OpenMediaComponent from '../../OpenMediaComponent';
import SmallImagesComponent from './SmallImageBoxContainer';
import BigImageBoxComponent from './BigImageBoxContainer';

const ChatMessage: VFC<IChatMessageProps> = memo(({ message }) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const firstImage = message.images ? message.images[0] : '';
  const otherImages = message.images?.slice(1, 5);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [clickedMedia, setClickedMedia] = useState(0);

  const toggleMediaOpen = (index: number) => {
    setIsMediaModalOpen(!isMediaModalOpen);
    setClickedMedia(index);
  };

  const mediaUrls = useMemo(() => {
    if (message.images) {
      return message.images.map((image) => (
        `${config.mediaServiceUrl}/message/${image}`
      ));
    }
    return [];
  }, [message]);

  const onClickHandle = useCallback(() => {
    toggleMediaOpen(0);
  }, [toggleMediaOpen]);

  return (
    <StyledMessageBox isSelf={message.userId === currentUser?.id} isMediaOpen={isMediaModalOpen}>
      <StyledMessageGroup>
        {message.images
          && (
          <ImageContainer>
            <SmallImagesComponent
              otherImages={otherImages}
              images={message.images.length}
              toggleMediaOpen={toggleMediaOpen}
            />
            <BigImageBoxComponent firstImage={firstImage} toggleMediaOpen={toggleMediaOpen} />
          </ImageContainer>
          )}
        <StyledMessage>
          {message.text}
        </StyledMessage>
        <StyledMessageTime>
          {timeFormat(message.createdAt)}
        </StyledMessageTime>
      </StyledMessageGroup>
      <OpenMediaComponent
        media={mediaUrls}
        open={isMediaModalOpen}
        clickedMedia={clickedMedia}
        closeModal={onClickHandle}
        openMediaModal={isMediaModalOpen}
        setOpenMediaModal={setIsMediaModalOpen}
      />
    </StyledMessageBox>
  );
});

export default ChatMessage;
