import React, {
  memo, useEffect, useState, VFC,
} from 'react';
import { IAny } from '../../core/types';
import i18next from '../../i18next';
import { StyledInput } from './style';

const CustomInput: VFC<IAny> = memo(({
  disabled, label, error, name, id, type = 'text',
  ref, onChange, onBlur, initialValue = '', placeholder = '',
}) => {
  const [value, setValue] = useState(initialValue);
  const { t } = i18next;

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <StyledInput
      onChange={(e) => {
        setValue(e.target.value);
      }}
      id={id}
      type={type}
      name={name}
      ref={ref}
      disabled={disabled}
      placeholder={placeholder}
      label={t(label)}
      error={!!error}
      onBlur={onBlur}
      helperText={error?.message && t(error.message)}
    />
  );
});

export default CustomInput;
