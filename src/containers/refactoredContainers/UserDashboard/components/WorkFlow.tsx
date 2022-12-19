import React, { VFC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import BigGlass from 'src/icons/svg/bigGlass.svg';
import Speaker from 'src/icons/svg/speaker.svg';
import MoneyInHand from 'src/icons/svg/moneyInHand.svg';
import NoteBook from 'src/icons/svg/notebook.svg';
import { IWorkFlowProps } from '../types';
import {
  ContentWrapper,
  WorkFlowSubtitle,
  WorkFlowText,
  WorkFlowImage,
  ImageMoneyInHand,
  TextContent,
} from '../styles/workFlow';
import {
  SectionWrapper, SectionTitle, SectionContentWrapper,
} from '../styles';

const WorkFlow: VFC<IWorkFlowProps> = memo(({ currentUserConsumer }) => {
  const { t } = useTranslation('mainPageUser');

  return (
    <SectionWrapper>
      <SectionTitle>
        {t('howWorking.title')}
      </SectionTitle>

      <SectionContentWrapper>
        <ContentWrapper>
          <TextContent>
            <WorkFlowSubtitle currentUserConsumer={currentUserConsumer}>
              {currentUserConsumer ? `${t('howWorking.createRequest')}` : `${t('howWorking.findRequest')}`}
            </WorkFlowSubtitle>
            <WorkFlowText>
              {currentUserConsumer ? `${t('howWorking.textCreateRequest')}` : `${t('howWorking.textFindRequest')}`}
            </WorkFlowText>
          </TextContent>
          <WorkFlowImage src={currentUserConsumer ? NoteBook : BigGlass} />
        </ContentWrapper>

        <ContentWrapper>
          <TextContent>
            <WorkFlowSubtitle currentUserConsumer={currentUserConsumer}>
              {currentUserConsumer ? `${t('howWorking.considerOffers')}` : `${t('howWorking.offerYourProduct')}`}
            </WorkFlowSubtitle>
            <WorkFlowText>
              {currentUserConsumer ? `${t('howWorking.textConsiderOffers')}` : `${t('howWorking.textOfferYourProduct')}`}
            </WorkFlowText>
          </TextContent>
          <WorkFlowImage src={currentUserConsumer ? BigGlass : Speaker} />
        </ContentWrapper>

        <ContentWrapper>
          <TextContent>
            <WorkFlowSubtitle currentUserConsumer={currentUserConsumer}>
              {currentUserConsumer ? `${t('howWorking.buyProduct')}` : `${t('howWorking.discussDeal')}`}
            </WorkFlowSubtitle>
            <WorkFlowText>
              {currentUserConsumer ? `${t('howWorking.textBuyProduct')}` : `${t('howWorking.textDiscussDeal')}`}
            </WorkFlowText>
          </TextContent>
          <ImageMoneyInHand src={MoneyInHand} />

        </ContentWrapper>
      </SectionContentWrapper>

    </SectionWrapper>
  );
});

export default WorkFlow;
