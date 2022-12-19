import React, {
  memo,
  useState,
  VFC,
} from 'react';
import {
  ClosedEye,
  OpenedEye,
  CustomPasswordStyledInput,
} from './style';
import { ICustomPasswordInputProps } from './types';

const CustomPasswordInput: VFC<ICustomPasswordInputProps> = memo(({
  error,
  label,
  placeholder,
  ...rest
}) => {
  const [showSymbols, setShowSymbols] = useState(false);
  const changeSymbols = () => {
    setShowSymbols(!showSymbols);
  };

  return (
    <CustomPasswordStyledInput
      label={label}
      placeholder={placeholder}
      {...rest}
      type={showSymbols ? 'text' : 'password'}
      error={error}
      icon={showSymbols ? <OpenedEye onClick={changeSymbols} />
        : <ClosedEye onClick={changeSymbols} />}
    />
  );
});

export default CustomPasswordInput;
