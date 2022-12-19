import React, { memo, VFC } from 'react';
import { useTranslation } from 'react-i18next';
import { APP_ROUTES } from '../../core/appRoutes';
import { DescriptionWrapper } from '../../commonStyles';
import IconRightArrow from '../../icons/IconRightArrow';
import IconRuble from '../../icons/IconRuble';
import {
  BuyerName,
  RequestBudgetWrapper,
  RequestDescription,
  RequestTitle,
  IconRightArrowWrapper,
  IconRubleWrapper,
  TitleAndPriceWrapper,
  RequestBudget,
  BuyerNameAndArrowWrapper,
  BuyerNameWrapper,
} from './styles';
import { IRequestInfoProps } from './types';

const RequestData: VFC<IRequestInfoProps> = memo(({ request }) => {
  const { t } = useTranslation('creatingOffer');
  return (
    <DescriptionWrapper>
      <TitleAndPriceWrapper>
        <RequestTitle>
          {request?.title}
        </RequestTitle>
        <RequestBudgetWrapper>
          <RequestBudget>
            {t('requestInfo.budgetTo')}
          </RequestBudget>
          {request?.budget}
          <IconRubleWrapper>
            <IconRuble />
          </IconRubleWrapper>
        </RequestBudgetWrapper>
      </TitleAndPriceWrapper>
      <RequestDescription>{request?.description}</RequestDescription>
      <BuyerNameAndArrowWrapper>
        <BuyerNameWrapper>
          <BuyerName
            to={`${APP_ROUTES.REQUEST_MARKETPLACE}/${request?.id}`}
          >
            {t('requestInfo.nameOfBuyer')}
            {request?.requestAuthor.name}
          </BuyerName>
        </BuyerNameWrapper>
        <IconRightArrowWrapper>
          <IconRightArrow />
        </IconRightArrowWrapper>
      </BuyerNameAndArrowWrapper>
    </DescriptionWrapper>
  );
});

export default RequestData;
