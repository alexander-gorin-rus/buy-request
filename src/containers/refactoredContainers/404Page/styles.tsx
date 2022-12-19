import styled from 'styled-components';

export const StyledContentContainer = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledSubtitle = styled.div`
  margin-top: 24px;
  font: ${({ theme }) => theme.typography.h3.font};
`;

export const StyledTitle = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 700;
  font-size: 40px;
  line-height: 45px;
`;
