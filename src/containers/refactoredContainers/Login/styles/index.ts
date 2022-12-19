import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CustomStyledButton } from 'src/components/CustomStyledButton';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-start;
  padding: 16px;
  width: 100%;
  max-width: 500px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  margin-top: -10px;
  width: 100%;
`;

export const ForgotPassword = styled(Link)`
  font: ${(props) => props.theme.typography.button};
  color: ${(props) => props.theme.palette.blue};
  text-decoration: none;
  position: absolute;
  right: 0%;
  top: 2px;
  z-index: 1;
  cursor: pointer;
`;

export const CreateAccount = styled(Link)`
  font: ${(props) => props.theme.typography.button};
  color: ${(props) => props.theme.palette.blue};
  text-decoration: none;
`;

export const ResendEmailContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledResendTitle = styled.div`
  margin-top: 50px;
  font: ${({ theme }) => theme.typography.h1.font};
  text-align: center;
`;

export const StyledResendText = styled.div`
  margin-top: 12px;
  font: ${({ theme }) => theme.typography.body1.font};
  text-align: center;
`;

export const StyledResendButton = styled(CustomStyledButton)`
  margin-top: 24px;
  width: 146px;
`;
