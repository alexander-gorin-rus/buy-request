import React, {
  memo, useCallback,
  useState,
  VFC,
} from 'react';
import { Counter } from 'src/core/layouts/styles';
import {
  FieldWithCount,
  InputWithCount,
  InputFieldWarning,
  InputIconWrapper,
  StyledInput,
  StyledInputLable,
  StyledInputWrapper,
  WrapperWithIcon,
} from './style';
import { IInputProps } from './types';

const CustomStyledInput: VFC<IInputProps> = memo(({
  type,
  label,
  onChange,
  disabled,
  placeholder,
  error,
  icon,
  allowableAmount,
  className,
  ...anyProps
}) => {
  const [quantityAntered, setQuantityAntered] = useState(0);

  const onHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, e.target.value);
    if (allowableAmount) {
      setQuantityAntered(e.target.value.length);
    }
  }, []);

  return (
    <StyledInputWrapper className={className}>
      <StyledInputLable disabled={disabled}>{label}</StyledInputLable>
      <WrapperWithIcon>
        {icon
        && (
          <InputIconWrapper>
            {icon}
          </InputIconWrapper>
        )}
        {allowableAmount ? (
          <FieldWithCount error={!!error}>
            <InputWithCount
              {...anyProps}
              type={type}
              disabled={disabled}
              placeholder={placeholder}
              onChange={onHandleChange}
            />
            <Counter>
              {quantityAntered}
              /
              {allowableAmount}
            </Counter>
          </FieldWithCount>

        ) : (
          <StyledInput
            {...anyProps}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            error={!!error}
            onChange={onHandleChange}
          />
        )}

      </WrapperWithIcon>

      <InputFieldWarning>{error}</InputFieldWarning>
    </StyledInputWrapper>
  );
});

export default CustomStyledInput;
