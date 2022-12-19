import React, { VFC } from 'react';
import uniqueId from 'lodash/uniqueId';

import { ISwitchProp } from './types';
import {
  CheckBox,
  CheckboxContainer,
  CheckBoxLabel,
  CheckBoxWrapper,
  SwitchLabel,
} from './styles';

const Switch: VFC<ISwitchProp> = ({
  value, label, disabled, onClick,
}) => {
  const id = uniqueId('checkbox');
  const onCheckboxClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClick();
  };
  return (
    <CheckboxContainer onClick={onCheckboxClick}>
      <CheckBoxWrapper>
        <CheckBox id={id} type="checkbox" checked={value} disabled={disabled} />
        <CheckBoxLabel htmlFor={id} disabled={disabled} />
        <SwitchLabel>{label}</SwitchLabel>
      </CheckBoxWrapper>
    </CheckboxContainer>
  );
};
export default Switch;
