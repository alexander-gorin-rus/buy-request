import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';
import { Dispatch, SetStateAction } from 'react';
import { ISortItem } from '../../../core/types';

export interface ISortingProps {
  sort: ISortItem;
  sortOption: ISortItem;
  setSort: Dispatch<SetStateAction<ISortItem>> | ((value:ISortItem) => void)
  icon: OverridableComponent<SvgIconTypeMap>;
}
