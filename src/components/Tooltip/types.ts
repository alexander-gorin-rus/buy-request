import { ReactNode } from 'react';

export interface ITooltipProps {
  text?: string;
  children: ReactNode;
  showOnOverflow?: boolean;
}

export interface IStyledTooltipContainerProps {
  showOnOverflow?: boolean;
  isOverflow: boolean;
}
