import { ReactNode } from 'react';

export interface ISwitchProp {
  value: boolean;
  label: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export interface ICheckBoxLabelProps {
  disabled?: boolean;
}
