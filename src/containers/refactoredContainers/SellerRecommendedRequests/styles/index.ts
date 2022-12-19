import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { StyledOutlineButton } from '../../../../core/layouts/styles';

export const StyledMainContainer = styled(Container)`
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  @media (max-width: 900px) {
    padding-left: 3rem;
    padding-right: 0;
  }
`;

export const StyledRecommendedMessage = styled(Typography)`
  font-size: 1.2rem;
  text-align: center;
  color: #FF8149;
  max-width: 500px;
  margin-top: 20px;
`;

export const StyledSettingsButton = styled(StyledOutlineButton)`
  margin-top: 20px;
`;
