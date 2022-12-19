import styled from 'styled-components';
import {
  FormControl, Box,
} from '@mui/material';
import { StyledContainedButton } from 'src/core/layouts/styles';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledTitle = styled.h2`
  font: ${({ theme }) => theme.typography.h2.font};
`;

export const StyledForm = styled.form`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  display: flex;
  max-width: 500px;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    align-items: center;
  }

  @media (max-width: 450px) {
    align-items: center;
    padding-right: 0;
    padding-left: 3rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ButtonStyled = styled(StyledContainedButton)`
  width: 8rem;
  height: 2.6rem;
`;

export const StyledBox = styled(Box)`
  height: 3rem;
`;

export const ModalContentBox = styled(Box)`
  display: flex;
  justify-content: center;
`;
