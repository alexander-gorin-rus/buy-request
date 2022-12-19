import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TypeUser } from 'src/utils/constants';
import {
  StatisticsGrid, StatisticsItem, StatisticsValue, StatisticsDescription,
} from '../styles';
import { IProfileData } from '../types';

const ProfileStatistics: FC<IProfileData> = memo(({
  profile: {
    deals, offers, requests, type,
  },
}) => {
  const { t } = useTranslation('profile');
  const isConsumer = type === TypeUser.consumer;

  return (
    <StatisticsGrid>
      <StatisticsItem>
        <StatisticsValue>{deals.pageInfo.totalCount}</StatisticsValue>
        <StatisticsDescription>
          {t('totalTransactions')}
        </StatisticsDescription>
      </StatisticsItem>
      {isConsumer && (
        <StatisticsItem>
          <StatisticsValue>{requests.pageInfo.totalCount}</StatisticsValue>
          <StatisticsDescription>
            {t('totalRequests')}
          </StatisticsDescription>
        </StatisticsItem>
      )}
      {!isConsumer && (
        <StatisticsItem>
          <StatisticsValue>{offers.pageInfo.totalCount}</StatisticsValue>
          <StatisticsDescription>
            {t('totalOffers')}
          </StatisticsDescription>
        </StatisticsItem>
      )}
    </StatisticsGrid>
  );
});

export default ProfileStatistics;
