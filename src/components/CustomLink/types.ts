import { ReactNode } from 'react';

export interface ICustomLinkProps {
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}
