import React, { VFC } from 'react';

import { ModalBackground } from 'src/commonStyles/Modal';
import { IPopupProps } from './types';
import {
  StyledPopupContent, StyledTitle, StyledDescription,
  StyledButtonsContainer, StyledPopupHeader,
} from './styles';
import { CustomStyledButton } from '../CustomStyledButton';

const Popup: VFC<IPopupProps> = ({
  title, description, accept, cancel,
  acceptButtonTitle, cancelButtonTitle,
  acceptButtonIsLoading,
}) => (
  <ModalBackground>
    <StyledPopupContent>
      <StyledPopupHeader>
        {title && <StyledTitle>{title}</StyledTitle>}
        {description && <StyledDescription>{description}</StyledDescription>}
      </StyledPopupHeader>
      <StyledButtonsContainer>
        <CustomStyledButton
          onClick={cancel}
          disabled={acceptButtonIsLoading}
        >
          {cancelButtonTitle}
        </CustomStyledButton>
        <CustomStyledButton
          primary
          onClick={accept}
          isLoading={acceptButtonIsLoading}
          disabled={acceptButtonIsLoading}
        >
          {acceptButtonTitle}
        </CustomStyledButton>
      </StyledButtonsContainer>
    </StyledPopupContent>
  </ModalBackground>
);

export default Popup;
