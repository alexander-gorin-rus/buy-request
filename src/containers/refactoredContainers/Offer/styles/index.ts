import {
  Box, Typography, Container, Button,
} from '@mui/material';
import styled from 'styled-components';

export const DescriptionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 600px) {
    align-items: flex-end;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 450px) {
    justify-content: flex-end;
  }
`;

export const StyledTypography = styled(Typography)`
  margin-bottom: 1rem;
  margin-right: 5px;
  @media (max-width: 450px) {
    font-size: 1.7rem;
  }
  @media (max-width: 340px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1.3rem;
    margin-bottom: 7px;
    margin-top: 10px;
  }
`;

export const TitleContainer = styled(Container)`
  &&& {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 830px) {
      justify-content: center;
      flex-direction: column;
      padding: 0;
    }
    @media (max-width: 400px) {
      justify-content: flex-end;
      flex-direction: column;
      padding: 0;
    }
  }
`;
export const TitleConsumerContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0;
  @media (max-width: 830px) {
    justify-content: center;
    padding: 0;
  }
  @media (max-width: 400px) {
    justify-content: flex-end;
    padding: 0;
  }
`;

export const StyledDescription = styled(Typography)`
  text-align: start;
  @media (max-width: 600px) {
    text-align: right;
  }
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1.3rem;
  }
`;

export const StyledTitleTypography = styled(Typography)`
  margin-bottom: 1rem;
  border-bottom: 3px solid #FF8149;
  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
  @media (max-width: 330px) {
    font-size: 1.2rem;
  }
`;

export const StyledContainer = styled(Container)`
  min-height: 100vh;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1100px) {
    padding-top: 7rem;
    padding-bottom: 3rem;
    width: 80%;
  }
  @media (max-width: 830px) {
    width: 80%;
    padding-top: 7rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
`;

export const StyledOfferContainer = styled(Container)`
  &&& {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2rem;
    background-color: #d7e5e2;
    border-radius: 20px;
  }
`;
export const OfferContent = styled(Container)`
  &&& {
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    @media (max-width: 830px) {
      flex-direction: column;
    }
  }
`;

export const Data = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 60vh;
  padding-bottom: 2rem;
  @media (max-width: 600px) {
    align-items: flex-end;
  }
  @media (max-width: 400px) {
    min-height: 70vh;
  }
  @media (max-width: 300px) {
    min-height: 60vh;
  }
`;
export const UserData = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 60vh;
  @media (max-width: 830px) {
    align-items: center;
    min-height: fit-content;
  }
`;
export const ConsumerData = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  justify-content: flex-end;
  align-items: flex-end;
  min-height: 60vh;
  @media (max-width: 830px) {
    align-items: center;
    min-height: fit-content;
  }
`;

export const StyledTags = styled(Typography)`
  background-color: #40686B;
  color: white;
  padding: 5px 10px;
  border-radius: 19px;
  width: fit-content;
`;
export const StyledTagsMap = styled(Typography)`
  background-color: #40686B;
  color: white;
  width: fit-content;
  border-radius: 16px;
  padding: 5px 10px;
  @media (max-width: 400px) {
    padding: 2px 8px;
  }
  @media (max-width: 300px) {
    padding: 2px 5px;
  }
`;
export const ButtonStyled = styled(Button)`
  width: 17rem; 
  height: 3rem;
  background-color: #FF8149;
  color: white;
  :hover{
    background-color: #FF793A;
  }
  @media (max-width: 300px) {
    width: 13rem;
    height: 2.5rem;
  }
`;
export const ButtonStyledMessage = styled(Button)`
  width: 17rem; 
  height: 3rem;
  background-color: #40686B;
  color: white;
  :hover{
    background-color: #40686B;
  }
  @media (max-width: 300px) {
    width: 13rem;
    height: 2.5rem;
  }
`;

export const StyledButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 13rem;
`;

export const StyledBudget = styled(Typography)`
  margin-right: 5px;
  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

export const BudgetTypographyBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const BudgetBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const DateTypographyBox = styled(Box)`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
`;

export const DateBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const StyledServicesGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const TitleAndPriceWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  @media(max-width: 700px) {
    display: block;
    justify-content: flex-start;
  }
`;

export const OfferStatusMessage = styled.p`
  font-size: 1rem;
`;

export const OfferPageWrapper = styled.div`
margin-top: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 700px) {
    display: block;
    justify-content: flex-start;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const IconBox = styled.div`
  display: inline-block;
  margin: 0 0 0 20px;
  @media(max-width: 700px) {
    margin: 20px 20px 0 0;
  }
`;

export const OfferInfoWrapper = styled.div`
  position: relative;
  left: 0;
  width: 100%;
`;

export const OfferInfo = styled.p`
  position: relative;
  width: 100%;
  height: auto;
  margin: 40px 0 40px 0;
`;

export const OfferTitle = styled.span`
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.h2.fontWeight};
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
`;

export const OfferBudgetWrapper = styled.div`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.h1.fontWeight};
  font-size: ${(props) => props.theme.typography.h1.fontSize};
  line-height: ${(props) => props.theme.typography.h1.lineHeight};
  display: flex;
`;

export const MediaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 30px;
`;

export const MediaTitle = styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
`;

export const IconRubleWrapper = styled.div`
  position: relative;
  padding-left: 4px;
  width: 17px;
  height: 17px;
`;

export const TagsWrapper = styled.div`
  position: relative;
  margin: 20px 0 20px 0;
`;

export const TagsTitle = styled.span`
  display: block;
  font-style: normal;
  font: ${(props) => props.theme.typography.h3.font};
`;

export const DealAndComplainWrapper = styled.div`
  position: relative;
  margin: 40px 0 0 0;
  left: -1%;
  width: 101%;
  display: flex;
  @media(max-width: 870px) {
    margin-bottom: 60px;
  }
`;

export const CustomStyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 4px 0 4px;
  width: 201px;
  height: 48px;
  background: ${(props) => props.theme.palette.blue};
  border-radius: 5px;
  @media(max-width: 700px) {
    width: 160px;
    height: 48px;
  }
`;

export const ComplainButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  left: 83%;
  @media(max-width: 870px) {
    top: 70px;
    left: 0;
  }
  @media(max-width: 600px) {
    top: 120px;
    left: 5px;
    margin-bottom: 50px;
  }
`;

export const ComplainContainer = styled.div`
  position: relative;
  left: 0%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.palette.blue};
  cursor: pointer;
  font-weight: ${(props) => props.theme.typography.fontWeight};
  font-size: ${(props) => props.theme.typography.button.fontSize};
  line-height: ${(props) => props.theme.typography.button.lineHeight};
`;

export const BargainNotice = styled.div`
  position: absolute;
  left: 420px;
  top: 5px;
  width: 250px;
  font-style: ${(props) => props.theme.typography.logo.fontStyle};
  color: ${(props) => props.theme.palette.secondaryGray};
  font-weight: ${(props) => props.theme.typography.body2.fontWeight};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
  line-height: 16px;
  @media(max-width: 700px) {
    left: 340px;
  }
  @media(max-width: 600px) {
    left: 5px;
    top: 70px;
  }
`;
