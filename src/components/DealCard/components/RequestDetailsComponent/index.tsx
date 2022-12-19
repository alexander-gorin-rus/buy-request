import React, {
  memo, useState, VFC,
} from 'react';
import { useTranslation } from 'react-i18next';
import IconRuble from '../../../../icons/IconRuble';
import {
  RequestBudgetWrapper,
  IconRubleWrapper,
  TitleAndPriceWrapper,
  RequestBudget,
  DescriptionWrapper,
} from './styles';
import { IRequestInfoProps } from './types';
import { RequestTitle } from '../../../RequestDataComponent/styles';
import SummaryComponent from './Summary';

const RequestDataDetails: VFC<IRequestInfoProps> = memo(({ deal }) => {
  const { t } = useTranslation('creatingOffer');
  const [summaryOpen, setSummaryOpen] = useState(false);
  const handleClick = () => {
    setSummaryOpen(!summaryOpen);
  };

  return (
    <DescriptionWrapper>
      <TitleAndPriceWrapper>
        <RequestTitle>
          {deal?.request.title}
        </RequestTitle>
        <RequestBudgetWrapper>
          <RequestBudget>
            {t('requestInfo.budgetTo')}
          </RequestBudget>
          {deal?.request.budget}
          <IconRubleWrapper>
            <IconRuble />
          </IconRubleWrapper>
        </RequestBudgetWrapper>
      </TitleAndPriceWrapper>
      <SummaryComponent
        tags={deal?.request.tagsData}
        deal={deal}
        open={summaryOpen}
        setSummaryOpen={handleClick}
      />
    </DescriptionWrapper>
  );
});

export default RequestDataDetails;
