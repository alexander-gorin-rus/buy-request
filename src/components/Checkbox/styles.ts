import styled from 'styled-components';

import { IStyledLabelProps } from './types';

export const StyledCheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const StyledLabel = styled.label<IStyledLabelProps>`
  color: ${({ theme, disabled }) => (disabled ? theme.palette.secondaryGray : theme.palette.blue)};
  cursor: pointer;
  &>span {
    ${({ theme, alternative, disabled }) => (!disabled && (`
      color: ${alternative ? theme.palette.black : theme.palette.blue};
      :hover {
        color: ${theme.palette.skyBlue};
      }
    `))};
    font: ${({ theme }) => theme.typography.subtitle1.font};
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  &>span::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid ${({ theme }) => theme.palette.blue};
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  &>input:not(:disabled):not(:checked)+span:hover::before {
    border-color: ${({ theme }) => theme.palette.skyBlue};
  }
  &>input:not(:disabled):active+span::before {
    background-color: ${({ theme }) => theme.palette.skyBlue};
    border-color: ${({ theme }) => theme.palette.skyBlue};
  }

  &>input:focus:not(:checked)+span::before {
    border-color: ${({ theme }) => theme.palette.blue};
  }
  &>input:checked+span::before {
    border-color: ${({ theme }) => theme.palette.blue};
    background-color: ${({ theme }) => theme.palette.blue};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  &>input:disabled+span::before {
    background-color: ${({ theme }) => theme.palette.secondaryGray};
    border-color: ${({ theme }) => theme.palette.secondaryGray};
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
