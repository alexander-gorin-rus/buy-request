import React, {
  memo, useCallback, VFC,
} from 'react';
import {
  BigImageBox,
  BigImageBoxContainer,
} from '../styled';
import config from '../../../config';
import { MESSAGE_BUCKET_NAME } from '../../../utils/constants';

export interface IBigImageBoxComponent {
  firstImage: string;
  toggleMediaOpen: (index: number) => void;
}

const BigImageBoxComponent: VFC<IBigImageBoxComponent> = memo(({
  firstImage, toggleMediaOpen,
}) => {
  const toggleClick = useCallback(() => {
    toggleMediaOpen(0);
  }, [toggleMediaOpen]);

  return (
    <BigImageBoxContainer>
      <BigImageBox
        onClick={toggleClick}
        src={`${config.mediaServiceUrl}/${MESSAGE_BUCKET_NAME}/${firstImage}`}
        alt={firstImage}
      />
    </BigImageBoxContainer>
  );
});

export default BigImageBoxComponent;
