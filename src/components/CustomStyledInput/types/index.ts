export interface IInputProps {
  type?: string;
  helperText?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
  lable?: string;
  primary?: boolean;
  disabled?: boolean;
  placeholder?: string;
}
