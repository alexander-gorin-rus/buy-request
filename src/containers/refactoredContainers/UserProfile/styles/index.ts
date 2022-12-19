import styled from 'styled-components';
import {
  Button,
  FormControl,
  TextField,
} from '@mui/material';

export const TextFieldStyled = styled(TextField)`
  width: 100%;
  @media (max-width: 600px) {
    width: 23rem;
  }
  @media (max-width: 450px) {
    width: 20rem;
  }
  @media (max-width: 400px) {
    width: 15rem;
  }
`;

export const ButtonStyled = styled(Button)`
  border-color: #FF8149;
  color: #FF8149;
  :hover{
    border-color: #FF8149;
    background-color: #FF8149;
    color: white;
  }
  @media (max-width: 600px) {
    width: 18rem;
  }
  @media (max-width: 450px) {
    width: 16rem;
  }
  @media (max-width: 400px) {
    width: 13rem;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    align-items: center;
    /* padding-right: 15px; */
  }
  @media (max-width: 450px) {
    align-items: center;
    padding-right: 0;
    padding-left: 3rem;
  }
`;

export const RowButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
