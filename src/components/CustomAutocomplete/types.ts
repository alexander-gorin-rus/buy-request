import React from 'react';

export interface IAutocompleteItem {
  id: string;
  name: string;
}

export interface IAutocompleteProps {
  label: string;
  itemsList: IAutocompleteItem[];
  emptyValueText: string;
  onChange: (e: IAutocompleteItem[]) => void;
  tagsLocalization?: (e: IAutocompleteItem) => string;
  children?: React.ReactNode;
  value?: string[] | null;
  placeholder: string;
  error?: React.ReactNode;
}

export interface IInputWrapperProps {
  error?: React.ReactNode;
}
