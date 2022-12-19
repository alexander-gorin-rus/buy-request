import styled from 'styled-components';
import { IButtonProps } from './types';

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  font: ${(props) => props.theme.typography.button.font};
  border-radius: 5px;
  cursor: pointer;
  height: ${({ low }) => (low ? '40px' : '48px')};
  padding: ${({ low }) => (low ? '10px 16px' : '14px 32px')};
  width: 100%;
  white-space: nowrap;
  ${({ primary, theme }) => primary && `
    border: none;
    background: ${theme.palette.blue};
    color: ${theme.palette.white};
  `}
  ${({ primary, theme }) => !primary && `
    border: 1px solid ${theme.palette.blue};
    background: ${theme.palette.white};
    color: ${theme.palette.blue};
  `}
  ${({ size }) => (size === 'small') && `
   width: 48px;
  `}
  ${({ size }) => (size === 'medium') && `
   width: 94px;
  `}
  ${({ size }) => (size === 'large') && `
   width: 297px;
  `}
  ${({ size }) => (size === 'fullWidth') && `
   width: 100%;
  `}
  ${({ disabled, primary, theme }) => (disabled && primary) && `
   background-color: ${theme.palette.secondaryGray};
  `}
  ${({ disabled, primary, theme }) => (disabled && !primary) && `
   background-color: ${theme.palette.white};
   border: 1px solid ${theme.palette.secondaryGray};
   color: ${theme.palette.secondaryGray};
  `}
  ${({ disabled }) => (disabled) && `
    pointer-events: none;
  `}
  ${({ noBorder }) => (noBorder) && `
   border-width: 0;
  `}

  :hover{
    ${({ primary, theme }) => primary && `
      background-color:  ${theme.palette.skyBlue};
      border-color: ${theme.palette.skyBlue};
      color: ${theme.palette.white};
    `}
    ${({ primary, theme }) => !primary && `
      background:  ${theme.palette.white};
      border-color: ${theme.palette.arctic};
      color: ${theme.palette.skyBlue};
    `}
  }
`;
