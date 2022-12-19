import type { HTMLAttributes, ReactNode } from 'react';

export interface PinInputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  type?: 'text' | 'number';
  initialValue?: string;
  onChange?: (newValue: string) => void;
  onComplete?: (newValue: string) => void;
  setResetValue?: (status: boolean) => void;
  length?: number;
  label?: ReactNode;
  message?: ReactNode;
  isError?: boolean;
  isMasked?: boolean;
  isUpperCase?: boolean;
  resetValue?: boolean;
}
