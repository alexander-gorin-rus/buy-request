import React, { VFC } from 'react';

import { ICheckboxProps } from './types';
import {
  StyledCheckboxContainer,
  StyledLabel,
  StyledInput,
} from './styles';

const Checkbox: VFC<ICheckboxProps> = ({
  text, disabled, value, onClick, alternative,
}) => (
  <StyledCheckboxContainer>
    <StyledLabel disabled={disabled} alternative={alternative}>
      <StyledInput
        type="checkbox"
        checked={value}
        disabled={disabled}
        onClick={onClick}
      />
      <span>{text}</span>
    </StyledLabel>
  </StyledCheckboxContainer>
);

export default Checkbox;
