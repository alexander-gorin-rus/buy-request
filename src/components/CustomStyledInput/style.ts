import styled from 'styled-components';
import { IInputProps, ILabelProps, IInputWithCountProps } from './types';

export const StyledInput = styled.input<IInputProps>`
  position: relative;
  color: ${({ disabled, theme }) => (disabled ? theme.palette.secondaryGray : theme.palette.black)};
  border-radius: 5px;
  padding: 0 16px ;
  margin: 8px 0 0 0;
  box-shadow: 0px 0px 9px ${(props) => props.theme.palette.lightBlue};
  border: 1px solid ${(props) => props.theme.palette.outline};
  height: 56px;
  font-size: ${(props) => props.theme.typography.button.fontSize};
  background: ${(props) => props.theme.palette.overlay};
  ${({ error, theme }) => error && `
  border-color: ${theme.palette.red};
  `}
  width: 100%;
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  &:focus:-moz-placeholder {
    opacity: 0;
  }
  &:focus {
    border: 1px solid ${(props) => props.theme.palette.lightBlue};
    box-shadow: 0px 0px 9px #E7F5FF;
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  }
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.palette.secondaryGray};
  }
  &:focus:-ms-input-placeholder {
      opacity: 0;
  }
  &:focus:-moz-placeholder {
    opacity: 0;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:active,
  &:-webkit-autofill:focus {
    background-color: ${(props) => props.theme.palette.white} !important;
    color: #555 !important;
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    -webkit-text-fill-color: #555555 !important;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export const InputFieldWarning = styled.span`
  color: ${(props) => props.theme.palette.red};
  margin-top: 0;
  font: ${(props) => props.theme.typography.body2.font};
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.typography.body2.fontSize};
    line-height: ${(props) => props.theme.typography.body2.lineHeight};
  }
`;

export const StyledInputLable = styled.label<ILabelProps>`
  color: ${({ disabled, theme }) => (disabled ? theme.palette.secondaryGray : theme.palette.black)};
  font: ${(props) => props.theme.typography.subtitle1.font};
  @media(max-width: 320px) {
    font-size: ${(props) => props.theme.typography.body2.fontSize};
    line-height: ${(props) => props.theme.typography.body2.lineHeight};
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputIconWrapper = styled.div`
  position: absolute;
  right: 16px;
  bottom: 24px;
  z-index: 2;
  width: 14px;
  height: 14px;
  opacity: 0.4;
`;

export const WrapperWithIcon = styled.div`
  position: relative;
`;

export const FieldWithCount = styled.div<IInputWithCountProps>`
  border: 1px solid ${(props) => props.theme.palette.outline};
  border-radius: 5px;
  padding: 12px 5px 12px 16px ;
  margin: 8px 0 0 0;
  box-shadow: 0px 0px 9px ${(props) => props.theme.palette.lightBlue};
  font-size: ${(props) => props.theme.typography.button.fontSize};
  background: ${(props) => props.theme.palette.overlay};
  ${({ error, theme }) => error && `
  border-color: ${theme.palette.red};
  `};
  &:focus, &:focus-within {
    border: 1px solid ${(props) => props.theme.palette.lightBlue};
    box-shadow: 0px 0px 9px #E7F5FF;
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  };
  &:-webkit-autofill,
  &:-webkit-autofill:active,
  &:-webkit-autofill:focus {
    background-color: ${(props) => props.theme.palette.white} !important;
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
  }
`;

export const InputWithCount = styled.input<IInputProps>`
  color: ${({ disabled, theme }) => (disabled ? theme.palette.secondaryGray : theme.palette.black)};
  background: ${(props) => props.theme.palette.overlay};
  font-size: ${(props) => props.theme.typography.button.fontSize};
  border: none;
  width: 100%;

  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  &:focus:-moz-placeholder {
    opacity: 0;
  }
  &:focus {
    border: none;
    box-shadow: none;
    transition: none;
    outline: 0;
  }
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.palette.secondaryGray};
  }
  &:focus:-ms-input-placeholder {
      opacity: 0;
  }
  &:focus:-moz-placeholder {
    opacity: 0;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:active,
  &:-webkit-autofill:focus {
    background-color: ${(props) => props.theme.palette.white} !important;
    color: #555 !important;
    -webkit-box-shadow: none !important;
    -webkit-text-fill-color: #555555 !important;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;
