import React from 'react';
import { MediaContainer } from './styles';

const CustomStyledMediaContainer = (children: React.Component) => (
  <MediaContainer>
    {children}
  </MediaContainer>
);

export default CustomStyledMediaContainer;
