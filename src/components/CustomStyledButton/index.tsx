import React, { memo, VFC } from 'react';
import { StyledButton } from './style';
import { IButtonProps } from './types';
import Preloader from '../Preloader';

export const CustomStyledButton: VFC<IButtonProps> = memo(({
  isLoading, disabled, children, primary, ...anyProps
}) => (
  <StyledButton
    disabled={disabled}
    primary={primary}
    {...anyProps}

  >
    {isLoading && <Preloader isWhite={primary} />}
    { children }
  </StyledButton>
));
