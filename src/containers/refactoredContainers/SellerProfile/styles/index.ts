import styled from 'styled-components';
import {
  Button,
  FormControl,
  TextField,
  Typography,
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
export const ButtonModalStyled = styled(Button)`
  color: #FF8149;
  :hover{
    background-color: #fce2d7;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 2rem;
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  display: flex;
  max-width: 500px;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    align-items: flex-end;
    padding-right: 15px;
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

export const StyledSelectFormControl = styled(FormControl)`
  width: 100%;
  max-width: 500px;
  max-height: 200px;
`;

export const StyledAccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const StyledTypography = styled(Typography)`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  border-bottom: 3px solid #FF8149;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    margin-left: 5rem;
  }
  @media (max-width: 450px) {
    margin-left: 3rem;
  }
`;
