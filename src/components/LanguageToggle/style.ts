import styled from 'styled-components';

export const LanguageContainer = styled.div<{ hideMobile?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${({ hideMobile }) => hideMobile && `
      display: none;
    `}
  }
`;

export const LanguageSeparator = styled.span`
  border: 1px solid ${({ theme }) => theme.palette.skyBlue};
  width: 0;
  height: 16px;
`;

export const LanguageBtn = styled.button<{ active?: boolean, type: string, onClick: Function }>`
  color: ${({ theme }) => theme.palette.skyBlue};
  padding: 0;
  border: none;
  background: none;
  font: ${({ theme }) => theme.typography.subtitle1.font};
  outline: none;
  cursor: pointer;

  ${({ active, theme }) => active && `
    color: ${theme.palette.blue};
  `}
`;
