import React, { memo, VFC } from 'react';
import { t } from 'i18next';

import { StyledTitle } from 'src/components/FilterComponent/style';
import { IUserTypeProps } from '../types';
import { StyledSelect } from '../styles';

const UserTypeSelect: VFC<IUserTypeProps> = memo(({
  itemsList,
  optionPlaceholder,
  handleSelect,
  title,
  value,
}) => (
  <>
    <StyledTitle>{title}</StyledTitle>
    <StyledSelect
      options={itemsList}
      onChange={handleSelect}
      value={value}
      isSearchable={false}
      formatOptionLabel={(data) => t(data.label)}
      placeholder={optionPlaceholder}
    />
  </>
));

export default UserTypeSelect;
