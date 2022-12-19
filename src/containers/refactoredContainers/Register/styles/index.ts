import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Select from 'src/components/Select';

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  gap: 8px;
  width: 100%;
  margin-top: 32px;
`;

export const RegisterInputsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  @media(max-width: 470px){
    flex-direction: column;
    gap: 16px
  }
`;

export const RegisterItemsWrapper = styled.div`
  width: 50%;
  @media(max-width: 470px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 64px - 40px);
  @media(max-width: 870px) {
    width: 100%;
  }
`;

export const SendEmailNotification = styled.span`
  margin-top: 50px;
  font: ${(props) => props.theme.typography.h1.font};
  text-align: center;
  @media(max-width: 570px) {
    margin-top: 32px;
  }
`;

export const CompleteRegistrationText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 24px;
  @media(max-width: 570px) {
    margin-top: 16px;
  }
`;

export const CompleteRegistrationNotification = styled.span`
  font: ${(props) => props.theme.typography.body1.font};
`;

export const AccountLinkWrapper = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export const AccountLink = styled(Link)`
  font: ${(props) => props.theme.typography.button.font};
  color: ${(props) => props.theme.palette.blue};
  text-decoration: none;
`;

export const StyledSelect = styled(Select)`
  margin-top: 8px;
`;
