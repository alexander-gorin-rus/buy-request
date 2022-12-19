import React, { FC } from 'react';

import SadSmile from 'src/icons/sadSmile.png';
import { StyledEmptyListPlaceholderContainer } from './styles';
import { IEmptyListPlaceholderProps } from './types';

const EmptyListPlaceholder: FC<IEmptyListPlaceholderProps> = ({ children, smile = SadSmile }) => (
  <StyledEmptyListPlaceholderContainer>
    <img src={smile} alt="smile" />
    {children}
  </StyledEmptyListPlaceholderContainer>
);

export default EmptyListPlaceholder;
