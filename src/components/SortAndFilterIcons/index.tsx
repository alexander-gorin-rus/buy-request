import React, { VFC } from 'react';
import {
  IconsWrapper,
  IconsBox,
} from 'src/commonStyles/CardsBlock';
import Sorting from '../Sorting';
import IconDate from './icons/IconDateSort/IconDate';
import IconFilterPopup from './icons/IconFilterPopup/IconFilterPopup';
import { ISortAndFilterProps } from './types';

export const SortAndFilterIcons: VFC<ISortAndFilterProps> = ({
  sort,
  sortOption,
  setSort,
  popupToggle,
}) => (
  <IconsBox>
    <IconsWrapper>
      <Sorting
        sort={sort}
        sortOption={sortOption}
        setSort={setSort}
        icon={IconDate}
      />
      <IconFilterPopup onClick={popupToggle} />
    </IconsWrapper>
  </IconsBox>
);
