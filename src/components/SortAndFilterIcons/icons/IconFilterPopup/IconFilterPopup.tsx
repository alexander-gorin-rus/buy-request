import React, { VFC } from 'react';
import { ReactComponent as FilterPopup } from 'src/images/filter-popup.svg';
import { IconDateSortWrapper } from '../../styles';
import { IIconFilterPopupProps } from '../../types';

const IconFilterPopup: VFC<IIconFilterPopupProps> = ({ onClick }) => (
  <IconDateSortWrapper onClick={onClick}>
    <FilterPopup />
  </IconDateSortWrapper>
);

export default IconFilterPopup;
