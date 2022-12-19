import React, { VFC } from 'react';
import { IBadgeProps } from './types';
import { StyledBadge } from './styles';
import { ReactComponent as Cross } from '../../cross.svg';

const Badge:VFC<IBadgeProps> = ({
  children, onDelete, smallFont, alternative,
}) => (
  <StyledBadge alternative={alternative} font={smallFont}>
    {children}
    {!!onDelete && <Cross onClick={onDelete} />}
  </StyledBadge>
);

export default Badge;
