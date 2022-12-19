import React, {
  memo, VFC,
} from 'react';
import {
  ImageNumberBlock, SmallImageBox, SmallImageBoxContainer, SmallImageWrapper,
} from '../styled';
import config from '../../../config';
import { MESSAGE_BUCKET_NAME } from '../../../utils/constants';

export interface ISmallImageComponent {
  otherImages: string[];
  images: number;
  toggleMediaOpen: (index: number) => void;
}

const SmallImagesComponent: VFC<ISmallImageComponent> = memo(({
  otherImages, images, toggleMediaOpen,
}) => {
  const pictureNumber = images ? images - 5 : 0;

  return (
    <SmallImageBoxContainer>
      {otherImages?.map((image: string, index: number) => (
        <SmallImageWrapper key={image}>
          <SmallImageBox
            src={`${config.mediaServiceUrl}/${MESSAGE_BUCKET_NAME}/${image}`}
            alt={image}
            onClick={() => toggleMediaOpen(index + 1)}
          />
          {(pictureNumber > 0 && index === 2)
            && (
              <ImageNumberBlock onClick={() => toggleMediaOpen(index)}>
                +
                {pictureNumber}
              </ImageNumberBlock>
            )}
        </SmallImageWrapper>
      ))}
    </SmallImageBoxContainer>
  );
});

export default SmallImagesComponent;
