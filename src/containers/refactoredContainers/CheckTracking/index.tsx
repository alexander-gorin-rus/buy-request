import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';

import { useTranslation } from 'react-i18next';
import Counties from './components/Countries';
import Tracker from './components/Tracker';

import {
  StyledRoot,
  StyledTypography,
  StyledWrapper,
  StyledButtonBack,
  StyledArrowBack,
  StyledForm,
  StyledDescription,
  StyledDescriptionSend,
  StyledContainer,
} from './styles';
import { APP_ROUTES } from '../../../core/appRoutes';

function CheckTracking() {
  const { t } = useTranslation('checkTracking');
  const navigate = useNavigate();
  const params = useParams<{ dealId: string }>();

  const onBack = () => navigate(`${APP_ROUTES.DEAL_CONFIRMATION}/${params.dealId}`);

  return (
    <StyledRoot>
      <StyledTypography variant="h2">{t('title')}</StyledTypography>
      <StyledWrapper>
        <StyledButtonBack variant="outlined" onClick={onBack}>
          <StyledArrowBack fontSize="large" />
          Back
        </StyledButtonBack>
        <StyledForm marginTop="2rem">
          <StyledDescription>
            {t('description')}
            :
            <StyledDescriptionSend>
              The flight arrived in the country of destation
            </StyledDescriptionSend>
          </StyledDescription>
          <Divider />
          <StyledContainer>
            <Counties />
            <Tracker />
          </StyledContainer>
        </StyledForm>
      </StyledWrapper>
    </StyledRoot>
  );
}

export default CheckTracking;
