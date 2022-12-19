import React, { memo, VFC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ContentWrapper, TitlePage,
  Content,
} from './styles';

interface IRulesProps {
  [key:string]: any
}

const Rules: VFC<IRulesProps> = memo(() => {
  const { t } = useTranslation('rules');

  return (
    <ContentWrapper>
      <TitlePage>
        {t('title')}
      </TitlePage>
      <Content dangerouslySetInnerHTML={{ __html: t('content.explanatoryContent') }} />
      <Content dangerouslySetInnerHTML={{ __html: t('content.tableOfContents') }} />
      <Content dangerouslySetInnerHTML={{ __html: t('content.mainContent') }} />
    </ContentWrapper>
  );
});

export default Rules;
