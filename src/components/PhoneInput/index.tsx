import React, { useEffect, useState, VFC } from 'react';
import { PhoneField } from './style';
import i18next from '../../i18next';
import { formatPhoneNumber } from '../../utils/helpers';
import { IAny } from '../../core/types';

const PhoneInput: VFC<IAny> = ({
  id = 'phone', name = 'phone', label = 'common:form.label.phoneNumber',
  onChange, error = null, disabled = false, ref, onBlur, initialValue = '',
  placeholder = '',
}) => {
  const [value, setValue] = useState(initialValue);
  const { t } = i18next;

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <PhoneField
      onChange={(e) => {
        setValue(formatPhoneNumber(e.target.value));
      }}
      disabled={disabled}
      onBlur={onBlur}
      id={id}
      ref={ref}
      name={name}
      value={value}
      placeholder={placeholder}
      label={t(label)}
      error={!!error}
      helperText={error?.message && t(error.message)}
    />
  );
};

export default PhoneInput;
