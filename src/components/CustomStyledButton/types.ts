import React, { SyntheticEvent } from 'react';

export interface IButtonProps {
  isLoading?: boolean;
  noBorder?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large' | 'fullWidth';
  low?: boolean;
  primary?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  children?: React.ReactNode;
}
