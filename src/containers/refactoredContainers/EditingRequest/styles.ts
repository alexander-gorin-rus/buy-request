import styled from 'styled-components';

export const Title = styled.span`
  display: flex;
  font: ${({ theme }) => theme.typography.h1.font};
  color: ${({ theme }) => theme.typography.h1.color};
`;
