import styled from 'styled-components';
import {
  Button, Typography, Box, Card, CardContent,
} from '@mui/material';

export const StyledTags = styled(Typography)`
  background-color: #d7e5e2;
  color: black;
  padding: 7px;
  border-radius: 12px;
`;
export const StyledTagsMap = styled.div`
  background-color: #d7e5e2;
  color: black;
  border-radius: 14px;
  padding: 0 7px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
  color: #FF8149;
  :hover{
    background-color: #fce2d7;
  }
`;

const FlexContainer = `
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledCard = styled(Card)`
  ${FlexContainer}
`;

export const StyledCardContent = styled(CardContent)`
  ${FlexContainer}
`;
