import React, { VFC } from 'react';

import { StyledImage } from './styles';
import { IMediaPreviewProps } from './types';

const MediaPreview: VFC<IMediaPreviewProps> = ({
  url, mark, width, height,
}) => (
  <StyledImage url={url} width={width} height={height}>{mark}</StyledImage>
);

export default MediaPreview;
