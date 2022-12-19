import React, { VFC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import HandIcon from 'src/icons/dealCard/hand.png';
import Dollar from 'src/icons/dealCard/dollar.png';
import Chat from 'src/icons/dealCard/chat.png';
import {
  BannerWrapper,
  BannerContent,
  BannerIcon,
  BannerText,
} from './styles';

interface IBenefitsBannerProps {
  marginTop: string;
  consumer?: boolean
}

const BenefitsBanner: VFC<IBenefitsBannerProps> = memo(({ marginTop, consumer }) => {
  const { t } = useTranslation('benefitsBanner');

  return (
    <BannerWrapper marginTop={marginTop}>
      <BannerContent>
        <BannerIcon src={Dollar} />
        <BannerText>{t('paymentConditions')}</BannerText>
      </BannerContent>

      <BannerContent>
        <BannerIcon src={Chat} />
        <BannerText>
          {consumer
            ? `${t('chatDiscussionsConsumer')}`
            : `${t('chatDiscussions')}`}
        </BannerText>
      </BannerContent>

      <BannerContent>
        <BannerIcon src={HandIcon} />
        <BannerText>{t('dealConditions')}</BannerText>
      </BannerContent>
    </BannerWrapper>
  );
});

export default BenefitsBanner;
