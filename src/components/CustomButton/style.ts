import styled from 'styled-components';
import { Button, ButtonProps } from '@mui/material';
import { ButtonVariant } from '../../utils/constants';

const getColor = (props: ButtonProps) => {
  switch (props.variant) {
    case ButtonVariant.contained:
      return '#ffffff';
    case ButtonVariant.outlined:
      return '#ff8149';
    default:
      return null;
  }
};

const getBackgroundColor = (props: ButtonProps) => {
  switch (props.variant) {
    case ButtonVariant.contained:
      return '#FF8149';
    case ButtonVariant.outlined:
      return '#ffffff';
    default:
      return null;
  }
};

const getBackgroundColorHover = (props: ButtonProps) => {
  switch (props.variant) {
    case ButtonVariant.contained:
      return '#f5763f';
    case ButtonVariant.outlined:
      return '#ff8149';
    default:
      return 'transparent';
  }
};

export const StyledButton = styled(Button)`
  width: 100%;
  background-color: ${getBackgroundColor};
  color: ${getColor};
  border-color: #ff8149;
  
  :hover{
    background-color: ${getBackgroundColorHover};
    color: ${(props: ButtonProps) => (props.variant === ButtonVariant.outlined ? '#ffffff' : null)};
    border-color: #ff8149;
  }
`;
