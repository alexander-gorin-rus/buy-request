import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
  label?: string;
  primary?: boolean;
  placeholder?: string;
  error?: React.ReactNode;
  icon?: React.SVGProps<SVGElement>;
  allowableAmount?: number;
}

export interface ILabelProps {
  disabled?: boolean;
}

export interface IInputWithCountProps {
  error?: React.ReactNode;
}
