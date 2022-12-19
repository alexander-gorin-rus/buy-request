import styled from 'styled-components';
import { Typography, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const StyledRoot = styled('div')`
  height: 100%;
  min-height: 100vh;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media (max-width: 1024px) {
    padding: 0 2.5rem 0 4.5rem;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
    justify-content: center;
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
`;

export const StyledWrapper = styled('div')``;

export const StyledButtonBack = styled(Button)`
  display: flex;
  align-items: center;
  height: 3rem;
  min-width: 12rem;
  font-size: 1.25rem;
  margin: 0 auto;
`;

export const StyledArrowBack = styled(ArrowBackIcon)`
  margin-right: 1rem;
`;

export const StyledForm = styled(Box)``;

export const StyledDescription = styled(Typography)`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 600px) {
    max-width: 380px;
    font-size: 1rem;
  }
`;

export const StyledDescriptionSend = styled('span')`
  color:  #FF8149;
  margin-left: 0.5rem;
  text-decoration: underline;
`;

export const StyledContainer = styled(Box)`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    margin-top: 2rem;
    justify-content: center;
    flex-direction: column;
  }
`;

export const StyledCountries = styled(Box)`
  width: 100%;

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

export const StyledCountryDestation = styled(Box)`
  border-left: 4px solid #FF8149;
  border-top: 1px solid #cccccc ;
  border-bottom: 1px solid #cccccc ;
  border-right: 1px solid #cccccc ;
  height: 5rem;
  max-width: 23rem;
  width: 100%;
  padding: 0.5rem;
`;

export const StyledCountryDeparture = styled(StyledCountryDestation)`
  border-left: 4px solid #333333;
  margin-top: 1rem;
`;

export const StyledCountyLabel = styled(Typography)`
  font-size: 1rem;
  text-align: end;
`;

export const StyledNameCountry = styled(Typography)`
  font-size: 1.75rem;
`;

export const StyledTrackerContainer = styled(Box)`
  flex-direction: column;
`;
