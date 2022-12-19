export interface ICheckboxProps {
  text: string;
  disabled?: boolean;
  value: boolean;
  onClick: () => void;
  alternative?: boolean;
}

export interface IStyledLabelProps {
  disabled?: boolean;
  alternative?: boolean;
}
