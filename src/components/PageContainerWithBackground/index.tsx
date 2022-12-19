import React, { FC } from 'react';
import {
  AuthWrapper, InputsWrapper, ManFigure, ManFigureWrapper, WomanFigure, WomanFigureWrapper,
} from 'src/commonStyles/LoginRegisterBlock';

import { ReactComponent as Man } from 'src/images/man-figure.svg';
import { ReactComponent as Woman } from 'src/images/woman-figure.svg';

const PageContainerWithBackground: FC = ({ children }) => (
  <AuthWrapper>
    <ManFigureWrapper>
      <ManFigure>
        <Man />
      </ManFigure>
    </ManFigureWrapper>
    <InputsWrapper>
      {children}
    </InputsWrapper>
    <WomanFigureWrapper>
      <WomanFigure>
        <Woman />
      </WomanFigure>
    </WomanFigureWrapper>
  </AuthWrapper>
);

export default PageContainerWithBackground;
