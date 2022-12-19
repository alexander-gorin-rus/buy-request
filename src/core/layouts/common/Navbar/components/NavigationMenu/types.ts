import { ReactNode } from 'react';

export interface INavigationMenuProps {
  trigger: ReactNode;
  children: ReactNode;
}

export interface IStyledNavigationMenuItemProps {
  active: boolean;
}
