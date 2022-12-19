import React, { VFC, memo } from 'react';
import { OrderBy } from '../../utils/constants';
import {
  StyledCheckbox,
  StyledRadioGroup,
} from './styled';
import { ISortingProps } from './types';

const Sorting: VFC<ISortingProps> = memo(({
  sort, sortOption, setSort, icon: IconComponent,
}) => {
  const handleChangeSorting = () => {
    setSort({
      ...sortOption,
      orderBy: sort.orderName === sortOption.orderName
        && sort.orderBy === OrderBy.ASC ? OrderBy.DESC : OrderBy.ASC,
    });
  };

  return (
    <StyledRadioGroup>
      <StyledCheckbox
        checked={sort.orderName === sortOption.orderName}
        onChange={handleChangeSorting}
        icon={<IconComponent />}
        checkedIcon={<IconComponent />}
      />
    </StyledRadioGroup>
  );
});

export default Sorting;
