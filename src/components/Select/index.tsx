import React, { VFC } from 'react';
import { ClearIndicatorProps, components, GroupBase } from 'react-select';

import { ISelectOption, ISelectProps } from './types';
import { StyledSelect, ReactSelectPlaceholder, StyledCrossInCircle } from './styles';

const ClearIndicator = (
  props: ClearIndicatorProps<ISelectOption, false, GroupBase<ISelectOption>>,
) => (
  <components.ClearIndicator {...props}>
    <StyledCrossInCircle />
  </components.ClearIndicator>
);

const Select: VFC<ISelectProps> = ({
  isClearable,
  isSearchable,
  options,
  value,
  onChange,
  placeholder,
  formatOptionLabel,
  className,
}) => (
  <StyledSelect
    className={className}
    isClearable={isClearable}
    options={options}
    value={value}
    onChange={onChange}
    isSearchable={isSearchable}
    formatOptionLabel={formatOptionLabel}
    placeholder={(
      <ReactSelectPlaceholder>
        {placeholder}
      </ReactSelectPlaceholder>
    )}
    classNamePrefix="Select"
    components={{
      ClearIndicator,
    }}
  />
);

export default Select;
