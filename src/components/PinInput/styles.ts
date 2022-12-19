import styled, { css } from 'styled-components';

export const StyledInput = styled.input<{ isError: boolean }>`
  width: 48px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  outline: none;
  border: 1px solid ${({ theme }) => theme.palette.outline};
  background: ${(props) => props.theme.palette.overlay};
  color: ${(props) => props.theme.palette.black};
  font: ${({ theme }) => theme.typography.h1.font};
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;

  ${({ isError }) => isError && css`
    border-color: ${(props) => props.theme.palette.red};
  `}
`;

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLabel = styled.div`
  margin-bottom: 8px;
  color: ${(props) => props.theme.palette.black};
  font: ${({ theme }) => theme.typography.subtitle1.font};
`;

export const StyledMessage = styled.div<{ isError: boolean }>`
  margin-top: 4px;
  color: ${(props) => props.theme.palette.black};
  font: ${({ theme }) => theme.typography.overline.font};
  
  ${({ isError }) => isError && css`
    color: ${(props) => props.theme.palette.red};
  `}
`;
