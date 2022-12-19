import React, { FC } from 'react';
import { IIconProps } from '../core/types';
import { ReactComponent as Edit } from './svg/edit.svg';

const IconEdit: FC<IIconProps> = ({ onClick }) => (
  <Edit
    onClick={onClick}
  />
);

export default IconEdit;
