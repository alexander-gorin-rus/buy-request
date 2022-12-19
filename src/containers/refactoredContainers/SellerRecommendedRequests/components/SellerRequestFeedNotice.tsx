import React, { VFC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { APP_ROUTES } from '../../../../core/appRoutes';
import { StyledRecommendedMessage, StyledSettingsButton } from '../styles';
import { ISellerRequestFeedNotice } from '../types';

const SellerRequestFeedNotice: VFC<ISellerRequestFeedNotice> = memo(({
  isRequests, isSubscribedTags,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation(['common', 'sellerDashboard']);

  const redirectToSettings = () => navigate(APP_ROUTES.PROFILE_SELLER);

  if (!isSubscribedTags) {
    return (
      <>
        <StyledRecommendedMessage>{t('sellerDashboard:subscribeMessage')}</StyledRecommendedMessage>
        <StyledSettingsButton variant="outlined" onClick={redirectToSettings}>
          {t('common:form.button.goToSettings')}
        </StyledSettingsButton>
      </>
    );
  }
  if (!isRequests && isSubscribedTags) {
    return (
      <>
        <StyledRecommendedMessage>{t('sellerDashboard:noRequests')}</StyledRecommendedMessage>
        <StyledSettingsButton variant="outlined" onClick={redirectToSettings}>
          {t('common:form.button.goToSettings')}
        </StyledSettingsButton>
      </>
    );
  }
  return null;
});

export default SellerRequestFeedNotice;
