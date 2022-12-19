import React from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';
import {
  LoaderComponentContainer, LoaderContainer, StyledBox, StyledLinearProgress,
} from './styledComponents';

interface ILoader {
  isComponent?: boolean;
  isLinear?: boolean;
}

function Loader(props: ILoader) {
  const { isComponent, isLinear } = props;

  if (isComponent) {
    return (
      <LoaderComponentContainer>
        {isLinear
          ? (
            <StyledBox>
              <LinearProgress />
            </StyledBox>
          )
          : (<CircularProgress />)}
      </LoaderComponentContainer>
    );
  }

  return (
    <LoaderContainer>
      <StyledBox>
        <StyledLinearProgress />
      </StyledBox>
    </LoaderContainer>
  );
}

Loader.defaultProps = {
  isComponent: false,
  isLinear: false,
};

export default Loader;
