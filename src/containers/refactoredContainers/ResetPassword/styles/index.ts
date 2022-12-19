import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;

  button {
    font: ${(props) => props.theme.typography.button.font};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 414px;
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  svg {
    width: 217px;
  }
`;

export const StyledDescription = styled.p`
  font: ${(props) => props.theme.typography.subtitle1.font};
  text-align: center;
`;

export const StyledLink = styled.span`
  color: ${(props) => props.theme.palette.blue};
  cursor: pointer;
`;

export const StyledEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  @media(max-width: 470px){
    flex-direction: column;
    gap: 16px
  }
`;

export const AccountLinkWrapper = styled.div`
  margin-top: 14px;
  text-align: center;
`;

export const AccountLink = styled(Link)`
  font: ${(props) => props.theme.typography.button.font};
  color: ${(props) => props.theme.palette.blue};
  text-decoration: none;
`;

export const ResendButtonWrapper = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResendButton = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font: ${(props) => props.theme.typography.button.font};
  color: ${(props) => props.theme.palette.blue};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.palette.skyBlue};
  }
`;

export const StyledCodeWrapper = styled.div`
  margin-top: 32px;
  width: 100%;
`;
