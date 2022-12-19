import React from 'react';

export interface ISelectProps {
  itemsList: string[];
  children?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  optionPlaceholder?: string;
}
