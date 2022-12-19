import styled from 'styled-components';

export const SList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SNotFoundTitle = styled.h2`
  font: ${({ theme }) => theme.typography.h2.font};
  color: ${({ theme }) => theme.palette.black};
`;

export const SEmoji = styled.span`
  margin-right: 12px;
`;
