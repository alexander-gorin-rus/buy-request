import React from 'react';
import { Currency } from 'src/utils/constants';

export interface ICurrencyInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, currency: string) => void;
  onChangeCurrency?: (currency: string) => void;
  type?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: React.ReactNode;
}

export interface ICurrencyInputWrapper {
  isFocus?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
}

export interface ILabelProps {
  disabled?: boolean;
}

export interface ICurrencyOption {
  value: Currency;
  label: string;
}
