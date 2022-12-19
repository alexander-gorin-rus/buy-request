import {
  Alert,
  Box,
  Button,
  Container,
  LinearProgress,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import manFigure from 'src/images/man.svg';
import womanFigure from 'src/images/woman.svg';

export const StyledDiv = styled.div`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #40686b;
  height: 65vh;
  padding: 0 5rem; //FIXME
  @media (max-width: 1400px) {
    padding: 5rem 0;
    height: 68vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (max-width: 600px) {
    height: 80vh;
    padding-top: 8rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (max-height: 750px) {
    padding: 13rem 0;
    height: 75vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
export const StyledAdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    text-align: center;
  }
`;
export const StyledAdditionalButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    margin-top: 3rem;
  }
`;
export const StyledInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #d7e5e2;
  flex-direction: column;
  height: 60vh;
  @media (min-width: 801px) {
    height: 20vh;
  }
  @media (min-width: 1401px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    height: 28vh;
  }
  @media (max-height: 670px) {
    height: 30vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const StyledTitleTypography = styled(Typography)`
  margin-top: 0.8rem;
  color: white;
  font-size: 80px;
  @media (max-width: 600px) {
    font-size: 60px;
    margin: 0 1rem;
  }
  @media (max-width: 350px) {
    font-size: 40px;
  }
`;
export const StyledSubtitleTypography = styled(Typography)`
  color: white;
  margin-top: 0.2rem;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 15px;
    margin: 0 1rem;
  }
`;
export const StyledBox = styled.div`
  margin-top: 2rem;
`;

export const StyledBoxContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 801px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
  }
  @media (min-width: 1401px) {
    width: unset;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 0;
  }
`;

export const StyledInfoTypography = styled(Typography)`
  background-color: #f2f6f5;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0 1rem;
  text-align: center;
  @media (max-width: 800px) {
    margin-top: 2rem;
    width: 12rem;
    text-align: center;
  }
`;
export const StyledInfoTitleTypography = styled(Typography)`
  border-bottom: 5px solid #ff8149;
  padding: 5px 0;
  text-align: center;
  @media (max-width: 300px) {
    font-size: 17px;
  }
`;

export const StyledButtonContainer = styled.div`
  background-color: white;
  width: 25rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  @media (max-width: 600px) {
    width: 17rem;
    height: 13rem;
  }
  @media (max-width: 300px) {
    width: 15rem;
    height: 11rem;
  }
`;

export const StyledRegisterButton = styled(Button)`
  background-color: #ff8149;
  color: white;
  width: 13rem;
  padding: 12px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 5px 13px -3px rgba(34, 60, 80, 0.41);
  margin-top: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;

  :hover {
    background-color: #ff793a;
    box-shadow: 0px 5px 13px -3px rgba(34, 60, 80, 0.64);
  }

  @media (max-width: 600px) {
    width: 11rem;
  }
  @media (max-width: 300px) {
    width: 10rem;
  }
`;

export const StyledTypographyGetStarted = styled(Typography)`
  font-size: 30px;
  font-weight: lighter;
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (max-width: 350px) {
    font-size: 23px;
  }
`;

export const StyledContentContainer = styled(Container)`
  padding: 64px 30px 40px;
  min-height: 86vh;
  @media (max-width: 1320px) {
    padding-left: 103px;
  }
  @media (max-width: 600px) {
    padding-left: 87px;
  }
`;

export const StyledPageTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const StyledPageTitle = styled(Typography)`
  display: inline-block;
  border-bottom: 3px solid #ff8149;
  font-size: 40px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const StyledOutlineButton = styled(Button)`
  width: 15rem;
  height: 3rem;
  border-color: #ff8149;
  color: #ff8149;
  line-height: 1.2rem;

  :hover {
    border-color: #ff8149;
    background-color: #ff8149;
    color: white;
  }
`;

export const StyledContainedButton = styled(Button)`
  width: 15rem;
  height: 3rem;
  background-color: #ff8149;
  color: white;

  :hover {
    background-color: #ff793a;
  }
`;

export const StyledInfoBlock = styled.div`
  margin-top: 10px;
  min-height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const StyledServicesGroup = styled.div`
  margin-top: 20px;
  min-height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const StyledModalInfoBlock = styled.div`
  width: 100%;
  margin-bottom: 15px;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const StyledLinearProgress = styled(LinearProgress)`
  margin: 1rem 0;
`;

export const StyledErrorAlert = styled(Alert)`
  margin: 1rem 0;
`;

export const LoaderBox = styled(Box)`
  margin-bottom: 15px;
  height: 4px;
  width: 100%;
`;

export const SortingBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const StyledErrorMessage = styled(Typography)`
  color: #d32f2f;
`;

export const StyledProfileForm = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const Counter = styled.p`
  font: ${(props) => props.theme.typography.overline.font};
  color: ${(props) => props.theme.palette.secondaryGray}; 
`;

export const StyledAuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 104px);
  padding: 0 16px;

  @media screen and (min-width: 871px) {
    background: url(${manFigure}) left -14px bottom 35px no-repeat, url(${womanFigure}) right top 34px no-repeat;
  }
`;
