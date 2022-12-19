import styled from 'styled-components';
import {
  Container, FormControl, Rating, Typography,
} from '@mui/material';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    padding-right: 0;
    margin-top: 4rem;
    padding-left: 3rem;
  }
`;

export const StyledContentContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 4rem;
  gap: 20px;
  @media (max-width: 500px) {
    justify-content: flex-end;
    padding: 0;
  }
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
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const StyledTypographyFormTitle = styled(Typography)`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  align-content: center;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const StyledFormControl = styled(FormControl)`
  margin-top: 2rem;
  width: 300px;
`;

export const StyledRating = styled(Rating)`
  margin-top: 2rem;
  font-size: 4rem;
`;

export const StyledControlsGroup = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
  
  > * {
    max-width: 200px;
  }
`;
