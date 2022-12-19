import styled from 'styled-components';
import { ICheckBoxLabelProps } from './types';

export const CheckboxContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export const SwitchLabel = styled.label`
  position: relative;
  justify-content: space-between;
  cursor: pointer;
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const CheckBoxLabel = styled.label<ICheckBoxLabelProps>`
  position: relative;
  display: block;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${({ theme, disabled }) => (disabled ? theme.palette.tetriaryGray : theme.palette.skyBlue)};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4px;
    background: ${({ theme }) => theme.palette.white};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    margin-right: 21px;
  }
`;
export const CheckBox = styled.input`
  display: none;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme, disabled }) => (disabled ? theme.palette.tetriaryGray : theme.palette.blue)};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
