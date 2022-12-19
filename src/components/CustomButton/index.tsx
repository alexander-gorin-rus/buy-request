import { ButtonProps } from '@mui/material';
import React, { memo, VFC } from 'react';
import Loader from '../Loader';
import { StyledButton } from './style';

interface ISubmitButtonProps extends ButtonProps<any, any> {
  isLoading?: boolean;
  disabled?: boolean;
  title: JSX.Element | string;
}

export const CustomButton: VFC<ISubmitButtonProps> = memo(({
  isLoading, disabled, title, ...anyProps
}) => {
  if (isLoading) return <Loader isComponent />;
  return (
    <StyledButton
      disabled={disabled}
      {...anyProps}
    >
      {title}
    </StyledButton>
  );
});
