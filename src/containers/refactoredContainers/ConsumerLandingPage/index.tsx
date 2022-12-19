import React from 'react';
import { useNavigate } from 'react-router-dom';
import i18next from '../../../i18next';
import { APP_ROUTES } from '../../../core/appRoutes';
import {
  StyledBox,
  StyledBoxContainer,
  StyledInfoContainer,
  StyledSubtitleTypography,
  StyledTitleContainer,
  StyledTitleTypography,
  StyledInfoTypography,
  StyledInfoTitleTypography,
  StyledButtonContainer,
  StyledRegisterButton,
  StyledTypographyGetStarted,
  StyledAdditionalButtonContainer,
} from '../../../core/layouts/styles';
import { ContentContainer, CustomBoxContainer } from '../../../core/layouts/common/baseLayout/styles';

const ConsumerLandingPage = () => {
  const navigate = useNavigate();
  const { t } = i18next;
  const handleClick = () => {
    navigate(APP_ROUTES.REGISTER);
  };
  return (
    <ContentContainer>
      <StyledTitleContainer>
        <CustomBoxContainer>
          <StyledTitleTypography variant="h2">{t('consumerLandingPage:title')}</StyledTitleTypography>
          <StyledBox>
            <StyledSubtitleTypography variant="subtitle1">
              {t('consumerLandingPage:desc')}
            </StyledSubtitleTypography>
          </StyledBox>
        </CustomBoxContainer>
        <StyledAdditionalButtonContainer>
          <StyledButtonContainer>
            <StyledTypographyGetStarted>
              {t('consumerLandingPage:form.title')}
            </StyledTypographyGetStarted>
            <StyledRegisterButton onClick={handleClick}>{t('consumerLandingPage:form.buttons.register')}</StyledRegisterButton>
          </StyledButtonContainer>
        </StyledAdditionalButtonContainer>
      </StyledTitleContainer>
      <StyledInfoContainer>
        <StyledInfoTitleTypography variant="h6">{t('consumerLandingPage:howWorks.title')}</StyledInfoTitleTypography>
        <StyledBoxContainer>
          <StyledInfoTypography variant="h6">{t('consumerLandingPage:howWorks.steps.createProfile')}</StyledInfoTypography>
          <StyledInfoTypography variant="h6">{t('consumerLandingPage:howWorks.steps.placeOrder')}</StyledInfoTypography>
          <StyledInfoTypography variant="h6">{t('consumerLandingPage:howWorks.steps.getOffers')}</StyledInfoTypography>
          <StyledInfoTypography variant="h6">{t('consumerLandingPage:howWorks.steps.buyProduct')}</StyledInfoTypography>
        </StyledBoxContainer>
      </StyledInfoContainer>
    </ContentContainer>
  );
};

export default ConsumerLandingPage;
