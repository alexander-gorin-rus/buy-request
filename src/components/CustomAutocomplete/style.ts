import styled from 'styled-components';
import { IInputWrapperProps } from './types';

export const Listbox = styled.ul`
  width: 100%;
  margin: 2px 0 0;
  padding: 0;
  position: relative;
  list-style: none;
  background-color: ${({ theme }) => theme.palette.overlay};
  overflow: auto;
  max-height: 220px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  z-index: 2;
  border: 1px solid ${({ theme }) => theme.palette.lightBlue};
  & li {
    padding: 5px 12px;
    display: flex;
  }
  & li[aria-selected='true'] {
    background-color: ${({ theme }) => theme.palette.lightBlue};
    font-weight: 600;
  }
`;

export const Label = styled.label(
  ({ theme }) => `
  padding: 0 0 4px;
  font-size: ${theme.typography.body1.fontSize};
  line-height: ${theme.typography.body1.lineHeight};
  color: ${theme.palette.black};
  font-weight: 600;
  display: block;
`,
);

export const InputWrapper = styled.div<IInputWrapperProps>`
  background-color: ${({ theme }) => theme.palette.overlay};
  border: 1px solid ${({ theme }) => theme.palette.outline};
  color: ${({ theme }) => theme.palette.black};
  width: 100%;
  min-height: 56px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0;
  padding-left: 16px;
  :focus-within {
    border-color: ${({ theme }) => theme.palette.lightBlue};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  ${({ error, theme }) => error && `
  border-color: ${theme.palette.red};
  `}
`;

export const StyledSpan = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const AutocompleteInput = styled.input`
  background-color: ${({ theme }) => theme.palette.overlay};
  box-sizing: border-box;
  width: 0;
  min-width: 30px;
  flex-grow: 1;
  border: 0;
  margin: 0;
  outline: 0;

  ::placeholder {
    color: ${({ theme }) => theme.palette.secondaryGray};
    font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
    line-height: ${({ theme }) => theme.typography.subtitle1.lineHeight};
  }
`;
