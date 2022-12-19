import { Dispatch, SetStateAction } from 'react';
import { ISortItem } from '../../core/types';

export interface ISortAndFilterProps {
  sort: ISortItem;
  sortOption: ISortItem;
  setSort: Dispatch<SetStateAction<ISortItem>> | ((value: ISortItem) => void);
  popupToggle?: () => void;
}

export interface IIconFilterPopupProps {
  onClick?: () => void;
}
