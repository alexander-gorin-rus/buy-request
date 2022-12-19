import { ReactNode, SyntheticEvent } from 'react';

export interface IBadgeProps {
  children?: ReactNode,
  alternative?: boolean;
  onDelete?: (event: SyntheticEvent) => void;
  smallFont?: boolean;
}

export interface IStyledBadgeProps {
  alternative?: boolean;
  font?: boolean;
}
