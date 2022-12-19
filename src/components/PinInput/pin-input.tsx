import type { ChangeEvent, KeyboardEvent, ClipboardEvent } from 'react';
import React, {
  memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import { PinInputProps } from './types';
import {
  StyledInput, StyledLabel, StyledMessage, StyledWrapper, StyledContainer,
} from './styles';

export const PinInput = memo(
  ({
    length = 6,
    type = 'text',
    isError = false,
    isMasked = false,
    isUpperCase = false,
    resetValue = false,
    setResetValue,
    initialValue,
    onChange,
    onComplete,
    label,
    message,
    ...otherProps
  }: PinInputProps) => {
    const charRefs = useRef<(HTMLInputElement | null)[]>([]);
    const activeRefIndex = useRef<number>();
    const [internalValue, setInternalValue] = useState<Record<string, string | undefined>>({});

    useEffect(() => {
      const values = Object.values(internalValue) as (number | string)[];
      let charStr = '';

      if (values.length === 0 || values.every((val) => typeof val === 'undefined')) {
        return onChange && onChange('');
      }

      values.forEach((val) => {
        if (typeof val === 'undefined') return;
        charStr += val.toString();
      });

      if (isUpperCase) charStr = charStr.toUpperCase();

      if (onChange) onChange(charStr);
      return onComplete && onComplete(charStr);
    }, [internalValue, length, type]);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLInputElement>, charIndex: number) => {
        const isCaretBefore = charRefs.current[charIndex]?.selectionStart === 0;

        if (event.key === 'Backspace') {
          if (isCaretBefore) {
            if (charIndex === 0) return;

            const prevIndex = charIndex - 1;
            activeRefIndex.current = prevIndex;
            setInternalValue((prevValue) => ({
              ...prevValue,
              [prevIndex]: undefined,
            }));
          } else {
            activeRefIndex.current = charIndex;
            setInternalValue((prevValue) => ({
              ...prevValue,
              [charIndex]: undefined,
            }));
          }
          return;
        }

        if (event.key === 'ArrowLeft') {
          if (
            charIndex === 0
            || (typeof internalValue[charIndex] !== 'undefined' && !isCaretBefore)
          ) {
            return;
          }
          const prevIndex = charIndex - 1;
          charRefs.current[prevIndex]?.focus();
          return;
        }

        if (event.key === 'ArrowRight') {
          if (
            charIndex + 1 === length
            || (typeof internalValue[charIndex] !== 'undefined' && isCaretBefore)
          ) {
            return;
          }
          const nextIndex = charIndex + 1;
          charRefs.current[nextIndex]?.focus();
        }
      },
      [length, internalValue],
    );

    const handleChange = useCallback(
      // eslint-disable-next-line consistent-return
      (event: ChangeEvent<HTMLInputElement>, charIndex: number) => {
        const newValue = event.target.value;

        activeRefIndex.current = charIndex;

        if (type === 'number') {
          const digit = parseInt(newValue, 10);
          if (Number.isNaN(digit)) {
            return setInternalValue((prevValue) => ({
              ...prevValue,
              [charIndex]: undefined,
            }));
          }
          setInternalValue((prevValue) => ({
            ...prevValue,
            [charIndex]: digit,
          }));
        } else {
          const isValidChar = /\w/.test(newValue);

          if (!isValidChar) {
            return setInternalValue((prevValue) => ({
              ...prevValue,
              [charIndex]: undefined,
            }));
          }
          setInternalValue((prevValue) => ({
            ...prevValue,
            [charIndex]: newValue,
          }));
        }

        if (charIndex + 1 === length) {
          activeRefIndex.current = undefined;
        } else {
          activeRefIndex.current = charIndex + 1;
        }
      },
      [type, length],
    );

    const handlePaste = useCallback(
      // eslint-disable-next-line consistent-return
      (event: ClipboardEvent<HTMLInputElement>, charIndex: number) => {
        const newInternalValue = { ...internalValue };

        const pastedText = event.clipboardData
          .getData('text')
          .substr(0, length - charIndex)
          .split('');

        pastedText.forEach((el, idx) => {
          newInternalValue[charIndex + idx] = el;
        });

        setInternalValue(newInternalValue);
      },
      [type, length, internalValue],
    );

    useEffect(() => {
      charRefs.current[activeRefIndex.current!]?.focus();
    });

    // Pre-populate pin input
    useEffect(() => {
      if (typeof initialValue === 'undefined') {
        return;
      }

      const chars = initialValue.toString().split('');

      // eslint-disable-next-line consistent-return
      [...Array(length)].forEach((_, index) => {
        const isMore = index + 1 > chars.length;

        if (isMore) {
          return setInternalValue((prevValue) => ({
            ...prevValue,
            [index]: undefined,
          }));
        }

        const char = chars![index];

        if (type === 'number') {
          const digit = parseInt(char, 10);
          if (Number.isNaN(digit)) return undefined;
          return setInternalValue((prevValue) => ({
            ...prevValue,
            [index]: digit,
          }));
        }

        setInternalValue((prevValue) => ({
          ...prevValue,
          [index]: char,
        }));
      });
    }, []);

    useEffect(() => {
      if (resetValue && setResetValue) {
        setInternalValue({});
        setResetValue(false);
      }
    }, [resetValue]);

    const pinInput = useMemo(
      () => [...Array(length)].map((_, index) => (
        <StyledInput
          ref={(el) => { charRefs.current[index] = el; }}
          isError={isError}
          type={isMasked ? 'password' : 'text'}
          maxLength={1}
          key={uuid()}
          defaultValue={isUpperCase ? internalValue[index]?.toUpperCase() : internalValue[index]}
          onChange={(ev) => handleChange(ev, index)}
          onKeyDown={(ev) => handleKeyDown(ev, index)}
          onPaste={(ev) => handlePaste(ev, index)}
          onBlur={() => { activeRefIndex.current = undefined; }}
        />
      )),
      [length, handleChange, handleKeyDown, internalValue, isMasked, isError],
    );

    if (!length) return null;

    return (
      <StyledContainer {...otherProps}>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledWrapper>
          {pinInput}
        </StyledWrapper>
        {message && <StyledMessage isError={isError}>{message}</StyledMessage>}
      </StyledContainer>
    );
  },
);
