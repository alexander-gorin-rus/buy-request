import { Box, LinearProgress } from '@mui/material';
import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3000;
  display: flex;
`;

export const LoaderComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBox = styled(Box)`
  width: 100%;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  height: 5px;
`;
