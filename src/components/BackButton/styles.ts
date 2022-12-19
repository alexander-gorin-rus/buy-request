import styled from 'styled-components';

export const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;
`;

export const BackButtonTitle = styled.p`
  font: ${(props) => props.theme.typography.h3.font};
`;
