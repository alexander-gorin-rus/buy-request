export interface ISelectOption {
  label: string;
  value: string;
}

export interface IFilterPopupProps {
  scheme: {
    name: string;
    fieldType: FilterFieldType;
    options?: ISelectOption[],
    label: string;
    initialValue: any;
    optionPlaceholder?: string;
    // TODO: add proper typing
  }[];
  onClose: () => void;
  onSubmit: (e: any) => void;
  buttonTitle: string;
}

export interface IFilterForm {
  status: string;
  myProducts: boolean;
}

export enum FilterFieldType {
  select = 'select',
  checkbox = 'checkbox',
}
