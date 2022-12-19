import React, { memo, VFC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ContainerWrapper, TitlePage, Content, SectionTitle,
} from './styles';

interface ILicenseProps {
  [key:string]: any
}

const License: VFC<ILicenseProps> = memo(() => {
  const { t } = useTranslation('license');
  return (
    <ContainerWrapper>
      <TitlePage>
        {t('title')}
      </TitlePage>
      <SectionTitle>{t('content.interpretation.title')}</SectionTitle>
      <Content dangerouslySetInnerHTML={{ __html: t('content.interpretation.content') }} />
      <SectionTitle>{t('content.agreement.title')}</SectionTitle>
      <Content dangerouslySetInnerHTML={{ __html: t('content.agreement.content') }} />
    </ContainerWrapper>
  );
});

export default License;
