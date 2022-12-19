import React, { VFC } from 'react';

import { ICustomLinkProps } from './types';
import { StyledLink } from './styles';

const CustomLink: VFC<ICustomLinkProps> = ({ children, ...restProps }) => (
  <StyledLink {...restProps}>
    {children}
  </StyledLink>
);

export default CustomLink;
