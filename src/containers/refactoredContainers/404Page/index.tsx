import React, { memo, VFC } from 'react';
import { useTranslation } from 'react-i18next';
import PageContainerWithBackground from 'src/components/PageContainerWithBackground';
import {
  StyledSubtitle, StyledTitle, StyledContentContainer,
} from './styles';

const NotFoundPage: VFC = memo(() => {
  const { t } = useTranslation('notFoundPage');
  return (
    <PageContainerWithBackground>
      <StyledContentContainer>
        <StyledTitle>
          {t('title')}
        </StyledTitle>
        <StyledSubtitle>{t('subtitle')}</StyledSubtitle>
      </StyledContentContainer>
    </PageContainerWithBackground>
  );
});

export default NotFoundPage;
