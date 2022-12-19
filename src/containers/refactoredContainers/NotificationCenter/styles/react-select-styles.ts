import { theme } from 'src/utils/theme';

export const reactSelectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    boxShadow: 'none',
    outline: `1px solid ${theme.palette.outline}`,
    background: theme.palette.blue,
    width: '160px',
    height: '50px',
    borderRadius: '5px',
    border: state.isFocused && 'none',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused && theme.palette.lightBlue,
    color: state.isFocused && theme.palette.black,
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: `${theme.palette.black}`,
  }),
};
