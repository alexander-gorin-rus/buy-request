import React, { FC } from 'react';
import { IIconProps } from '../core/types';
import { ReactComponent as Delete } from './svg/delete.svg';

const IconDelete: FC<IIconProps> = ({ onClick }) => (
  <Delete
    onClick={onClick}
  />
);

export default IconDelete;
