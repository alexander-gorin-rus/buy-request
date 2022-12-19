import React, { VFC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import ReportForm from './components/ReportForm';
import { StyledContainer, StyledTitle } from './styles';
import { IReportProps } from './types';

const Report: VFC<IReportProps> = memo((props) => {
  const { entityId, toggle } = props;

  const { t } = useTranslation('report');

  return (
    <StyledContainer>
      <StyledTitle>{t('title')}</StyledTitle>
      <ReportForm entityId={entityId} toggle={toggle} />
    </StyledContainer>
  );
});

export default Report;
