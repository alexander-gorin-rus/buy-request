import styled from 'styled-components';

export const StyledControlsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  > * {
    width: 200px;
  }
`;

export const StyledBackArrowContainer = styled.div`
  display: flex;
  align-items: center;
  font: ${(props) => props.theme.typography.h3.font};
  cursor: pointer;
  & > svg {
    margin-right: 1rem;
  }
`;

export const StyledButtonsBlock = styled.div`
  display: flex;
  margin-top: 54px;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.mobiletablet}) {
    flex-wrap: wrap;
  }
`;

export const ButtonWrapper = styled.div`
  width: 202px;
`;
