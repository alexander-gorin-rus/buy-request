import React, { VFC, memo, useState } from 'react';
import { theme } from 'src/utils/theme';
import { ICurrencyInputProps } from './types';
import { currencyOptions } from './constants';
import {
  CurrencyInputError,
  StyledCurrencyInput,
  CurrencyInputLabel,
  CurrencyInputContainer,
  CurrencyInputWrapper,
  CurrencySelect,
} from './style';

const CurrencyInput: VFC<ICurrencyInputProps> = memo(({
  value,
  type,
  label,
  onChange,
  disabled,
  placeholder,
  error,
  onChangeCurrency,
}) => {
  const [inputWrapperIsFocus, setInputWrapperIsFocus] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0].value);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, selectedCurrency);
  };

  const handleSelect = (selected: any) => {
    setSelectedCurrency(selected.value);
    if (onChangeCurrency) onChangeCurrency(selected.value);
  };

  const handleInputOnFocus = () => {
    setInputWrapperIsFocus((prev) => !prev);
  };

  return (
    <CurrencyInputContainer>
      <CurrencyInputLabel disabled={disabled}>{label}</CurrencyInputLabel>
      <CurrencyInputWrapper disabled={disabled} error={!!error} isFocus={inputWrapperIsFocus}>
        <StyledCurrencyInput
          type={type}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          error={!!error}
          onChange={onHandleChange}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnFocus}
        />
        <CurrencySelect
          classNamePrefix="currency-select"
          isSearchable={false}
          options={currencyOptions}
          onChange={handleSelect}
          defaultValue={currencyOptions[0]}
          formatOptionLabel={(option: any) => option.label}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnFocus}
          isDisabled={disabled}
          styles={{
            control: (provided) => ({
              ...provided,
              boxShadow: 'none',
              outline: `1px solid ${theme.palette.outline}`,
              background: theme.palette.overlay,
            }),
            option: (provided, state: any) => ({
              ...provided,
              backgroundColor: state.isFocused && theme.palette.lightBlue,
              color: state.isFocused && theme.palette.black,
            }),
          }}
        />
      </CurrencyInputWrapper>
      <CurrencyInputError>{error}</CurrencyInputError>
    </CurrencyInputContainer>
  );
});

export default CurrencyInput;
