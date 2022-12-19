import Select from 'react-select';
import styled from 'styled-components';
import { ICurrencyInputProps, ILabelProps, ICurrencyInputWrapper } from './types';

export const StyledCurrencyInput = styled.input<ICurrencyInputProps>`
  position: relative;
  color: ${({ disabled, theme }) => (disabled ? theme.palette.secondaryGray : theme.palette.black)};
  border: none;
  margin: 0;
  padding: 0 16px;
  box-shadow: none;
  font: ${(props) => props.theme.typography.button.font};
  background: transparent;
  width: 100%;
  height: 100%;
  outline: 0;
  border-right: 1px solid ${(props) => props.theme.palette.outline};
  
  &:focus::-webkit-input-placeholder, 
  &:focus:-moz-placeholder
  &:focus {
    outline: 0;
  }
  
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.palette.secondaryGray};
  }
  
  &:focus:-ms-input-placeholder, &:focus:-moz-placeholder {
      opacity: 0;
  }
  
  &:-webkit-autofill,
  &:-webkit-autofill:active,
  &:-webkit-autofill:focus {
    color: ${(props) => props.theme.palette.secondaryGray}!important;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export const CurrencyInputError = styled.span`
  color: ${(props) => props.theme.palette.red};
  font: ${(props) => props.theme.typography.body2.font};
  margin-top: 0;
`;

export const CurrencyInputLabel = styled.label<ILabelProps>`
  color: ${({ disabled, theme }) => (disabled ? theme.palette.secondaryGray : theme.palette.black)};
  font: ${(props) => props.theme.typography.subtitle1.font};
  
  @media(max-width: 320px) {
    font: ${(props) => props.theme.typography.body2.font};
  }
`;

export const CurrencyInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CurrencyInputWrapper = styled.div<ICurrencyInputWrapper>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  color: ${({ disabled, theme }) => (disabled ? theme.palette.secondaryGray : theme.palette.black)};
  border-radius: 5px;
  height: 56px;
  padding: 0;
  text-indent: 16px;
  margin: 8px 0 0 0;
  box-shadow: 0 0 9px ${(props) => props.theme.palette.lightBlue};
  border: 1px solid ${(props) => props.theme.palette.outline};
  font-size: ${(props) => props.theme.typography.button.fontSize};
  background: ${(props) => props.theme.palette.overlay};
  box-sizing: border-box;
  ${({ error, theme }) => error && `
  border-color: ${theme.palette.red};
  `}
  width: 100%;
  ${({ isFocus, theme }) => isFocus && `
    border: 1px solid ${theme.palette.lightBlue};
    box-shadow: 0 0 9px #E7F5FF;
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  `}
`;

export const CurrencySelect = styled(Select)`
  & .currency-select__control {
    background: transparent;
    border: none;
    outline: none;
    user-select: none;
  }
  
  & .currency-select__indicator-separator {
    display: none;
  }
  
  & .currency-select__dropdown-indicator {
    padding-left: 0;
    
    svg {
      fill: ${(props) => props.theme.palette.blue};
    }
    
    &, &:hover {
      color: ${(props) => props.theme.palette.black};
    }
  }
  
  & .currency-select__control--is-focused {
      border: none;
  }
  
  & .currency-select__value-container {
    justify-content: center;
    padding: 0 0 0 9px;
  }
  
  & .currency-select__single-value {
    font: ${(props) => props.theme.typography.h3};
    color: ${(props) => props.theme.palette.secondaryGray};
    width: 47px;
    margin: 0;
  }

  & .currency-select__menu {
    background: ${(props) => props.theme.palette.overlay};
    border: 1px solid ${(props) => props.theme.palette.lightBlue};
    border-radius: 5px;
    margin-top: 8px;
    box-shadow: 0 0 9px ${(props) => props.theme.palette.lightBlue};
    transition: border-color 0.3s ease-in-out;
    box-sizing: content-box;
    right: -1px;
  }

  & .currency-select__menu-list {
    padding: 9px 0;
  }

  & .currency-select__control--is-disabled {
    opacity: 0.3;
  }

  & .currency-select__option {
    font: ${(props) => props.theme.typography.body1};
    color: ${(props) => props.theme.palette.black};
    text-indent: initial;
    display: flex;
    justify-content: center;
  }
`;
