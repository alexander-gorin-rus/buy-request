import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { APP_ROUTES } from '../../core/appRoutes';
import {
  StyledBox,
  StyledBoxContainer,
  StyledInfoContainer,
  StyledSubtitleTypography,
  StyledTitleContainer,
  StyledTitleTypography,
  StyledInfoTypography,
  StyledInfoTitleTypography,
  StyledAdditionalContainer,
  StyledButtonContainer,
  StyledRegisterButton,
  StyledTypographyGetStarted,
  StyledAdditionalButtonContainer,
} from '../../core/layouts/styles';

function SellerLandingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation('sellerLandingPage');
  const handleClick = () => {
    navigate(APP_ROUTES.REGISTER);
  };
  return (
    <>
      <StyledTitleContainer>
        <StyledAdditionalContainer>
          <StyledTitleTypography variant="h2">{t('title')}</StyledTitleTypography>
          <StyledBox>
            <StyledSubtitleTypography variant="subtitle1">
              {t('desc')}
            </StyledSubtitleTypography>
          </StyledBox>
        </StyledAdditionalContainer>
        <StyledAdditionalButtonContainer>
          <StyledButtonContainer>
            <StyledTypographyGetStarted>
              {t('form.title')}
            </StyledTypographyGetStarted>
            <StyledRegisterButton onClick={handleClick}>{t('form.buttons.register')}</StyledRegisterButton>
          </StyledButtonContainer>
        </StyledAdditionalButtonContainer>
      </StyledTitleContainer>
      <StyledInfoContainer>
        <StyledInfoTitleTypography variant="h6">{t('howWorks.title')}</StyledInfoTitleTypography>
        <StyledBoxContainer>
          <StyledInfoTypography variant="h6">{t('howWorks.steps.createProfile')}</StyledInfoTypography>
          <StyledInfoTypography variant="h6">{t('howWorks.steps.lookOrdersCategory')}</StyledInfoTypography>
          <StyledInfoTypography variant="h6">{t('howWorks.steps.offerProducts')}</StyledInfoTypography>
          <StyledInfoTypography variant="h6">{t('howWorks.steps.makeDeal')}</StyledInfoTypography>
        </StyledBoxContainer>
      </StyledInfoContainer>
    </>
  );
}

export default SellerLandingPage;
