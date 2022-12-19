import React, { memo, VFC } from 'react';
import { ISelectProps } from './types';
import { ReactComponent as IconSelect } from '../../images/arrow-down.svg';
import {
  IconSelectWrapper,
  OptionPlaceholder,
  StyledOption,
  StyledSelect,
} from './style';

export const CustomSelect: VFC<ISelectProps> = memo(({
  itemsList,
  children,
  optionPlaceholder,
  ...anyProps
}) => (
  <>
    <StyledSelect
      {...anyProps}
      required
    >
      <OptionPlaceholder
        disabled
        selected
        hidden
        value=""
      >
        {optionPlaceholder}
      </OptionPlaceholder>
      {itemsList?.length
        && itemsList.map((selectItem: string) => (
          <StyledOption
            key={selectItem}
            value={selectItem}
          >
            {selectItem}
          </StyledOption>
        ))}
    </StyledSelect>
    <IconSelectWrapper>
      <IconSelect />
    </IconSelectWrapper>
  </>
));
