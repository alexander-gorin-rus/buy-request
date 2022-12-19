import { ReactNode } from 'react';
import { OnChangeValue } from 'react-select';

export interface ISelectProps {
  isClearable?: boolean;
  isSearchable?: boolean;
  options: ISelectOption[];
  value: ISelectOption | null | undefined;
  onChange: (value: OnChangeValue<ISelectOption, false>) => void;
  formatOptionLabel: (data: ISelectOption) => string;
  placeholder: ReactNode;
  className?: string;
}

export interface ISelectOption {
  label: string;
  value: string;
}
