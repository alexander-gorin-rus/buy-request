import styled from 'styled-components';
import { ITextareaProps, ITextareaWithCountProps } from './types';

export const StyledTextareaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledTextarea = styled.textarea<ITextareaProps>`
  color: ${({ disabled, theme }) => (disabled ? theme.palette.secondaryGray : theme.palette.black)};
  resize: none;
  border-radius: 5px;
  margin: 8px 0 0 0;
  box-shadow: 0 0 9px ${(props) => props.theme.palette.lightBlue};
  border: 1px solid ${(props) => props.theme.palette.outline};
  height: 140px;
  padding: 16px 16px;
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  background: ${(props) => props.theme.palette.overlay};
  ${({ error, theme }) => error && `
  border-color: ${theme.palette.red};
  `}
  width: 100%;
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  &:focus::-moz-placeholder {
    opacity: 0;
  }
  &:focus:-ms-input-placeholder {
      opacity: 0;
  }
  &:focus:-moz-placeholder {
    opacity: 0;
  }
  &:focus {
    border: 1px solid ${(props) => props.theme.palette.lightBlue};
    box-shadow: 0px 0px 9px ${(props) => props.theme.palette.lightBlue};
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  }
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.palette.secondaryGray};
  }
`;

export const TextareaWithCount = styled.textarea<ITextareaProps>`
  color: ${({ disabled, theme }) => (disabled ? theme.palette.secondaryGray : theme.palette.black)};
  background: ${(props) => props.theme.palette.overlay};
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  border: none;
  width: 100%;
  resize: none;
  height: 140px;
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

export const FieldWithCount = styled.div<ITextareaWithCountProps>`
  border: 1px solid ${(props) => props.theme.palette.outline};
  border-radius: 5px;
  padding: 12px 16px 12px 16px ;
  margin: 8px 0 0 0;
  box-shadow: 0px 0px 9px ${(props) => props.theme.palette.lightBlue};
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
