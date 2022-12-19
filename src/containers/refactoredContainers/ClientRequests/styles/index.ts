import { Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledTitleTypography = styled(Typography)`
  margin-bottom: 1rem;
  border-bottom: 3px solid #FF8149;
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
