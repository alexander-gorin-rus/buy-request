import styled from 'styled-components';

export const StyledControls = styled.div`
  @media (min-width: 901px) {
    align-items: end;
    display: flex;
    flex-direction: column;
  }
  & > *:not(:first-child) {
    margin-top: 15px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 202px;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledModalControl = styled.div`
  width: 7rem;
`;
