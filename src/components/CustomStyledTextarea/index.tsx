import React, {
  memo, VFC,
  useState,
  useCallback,
} from 'react';
import { Counter } from 'src/core/layouts/styles';
import { ITextareaProps } from './types';
import {
  StyledTextarea,
  StyledTextareaWrapper,
  TextareaWithCount,
  FieldWithCount,
} from './style';
import { InputFieldWarning, StyledInputLable } from '../CustomStyledInput/style';

const CustomStyledTextarea: VFC<ITextareaProps> = memo(({
  error,
  label,
  onChange,
  disabled,
  placeholder,
  allowableAmount,
  ...anyProps
}) => {
  const [quantityAntered, setQuantityAntered] = useState(0);

  const onHandleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    if (allowableAmount) {
      setQuantityAntered(e.target.value.length);
    }
  }, []);

  return (
    <StyledTextareaWrapper>
      <StyledInputLable disabled={disabled}>
        {label}
      </StyledInputLable>
      {allowableAmount ? (
        <FieldWithCount error={!!error}>
          <TextareaWithCount
            {...anyProps}
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
        <StyledTextarea
          {...anyProps}
          disabled={disabled}
          placeholder={placeholder}
          error={!!error}
          onChange={onHandleChange}
        />
      )}
      <InputFieldWarning>{error}</InputFieldWarning>
    </StyledTextareaWrapper>
  );
});

export default CustomStyledTextarea;
