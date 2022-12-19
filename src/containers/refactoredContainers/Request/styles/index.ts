import {
  Box, Typography, Container, Button,
} from '@mui/material';
import styled from 'styled-components';
import { ReactComponent as Lightning } from '../../../../lightning.svg';
import { ReactComponent as Edit } from '../../../../edit.svg';
import { ReactComponent as Delete } from '../../../../delete.svg';
import { ReactComponent as Check } from '../../../../images/check.svg';

export const DescriptionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 600px) {
    align-items: flex-end;
  }
`;
export const TagsBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    justify-content: flex-end;
  }
  @media (max-width: 400px) {
    gap: 10px;
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

export const BudgetBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const TitleContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
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

export const StyledRequestContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2rem;
  background-color: #d7e5e2;
  border-radius: 20px;
  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const RequestData = styled(Container)`
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

export const StyledBackToListContainer = styled.div`
  display: flex;
  width: 100%;
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  cursor: pointer;
  & > svg {
    margin-right: 1rem;
  }
`;

export const StyledTitleContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledTitle = styled.div`
  width: 100%;
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
`;

export const StyledBudgetContainer = styled.div`
  margin-top: 1rem;
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
`;

export const StyledDescriptionContainer = styled.div`
  margin-top: 1.5rem;
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
`;

export const StyledMediaLabel = styled.div`
  margin-top: 3.5rem;
  font: ${({ theme }) => theme.typography.h3.font};
`;

export const StyledTagsLabel = styled.div`
  margin-top: 1.5rem;
  font: ${({ theme }) => theme.typography.h3.font};
`;

export const StyledMediaContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

export const StyledReportContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.blue};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
`;

export const StyledLightning = styled(Lightning)`
  margin-right: 0.75rem;
  & > path {
    stroke: ${({ theme }) => theme.palette.blue};
  }
`;

export const StyledConsumerActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StyledEdit = styled(Edit)`
  cursor: pointer;
  & > path {
    fill: ${({ theme }) => theme.palette.blue};
  }
  
`;

export const StyledDelete = styled(Delete)`
  cursor: pointer;
  & > path {
    fill: ${({ theme }) => theme.palette.red};
  }
`;

export const StyledRequestActionsContainer = styled.div`
   flex: 0 0 content; 
`;

export const StyledProductsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

export const StyledTitleBlock = styled.div`
  flex: 1 1 auto; 
`;

export const StyledProductsLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3.5rem;
  font: ${({ theme }) => theme.typography.h3.font};
`;

export const StyledReadyForAnaloguesLabel = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  gap: 8px;
  font: ${({ theme }) => theme.typography.subtitle1.font};
`;

export const StyledCheck = styled(Check)`
  color: ${({ theme }) => theme.palette.green};
`;

export const StyledHelperContainer = styled.div`
  position: relative;
  & * {
    display: flex;
  }
`;
