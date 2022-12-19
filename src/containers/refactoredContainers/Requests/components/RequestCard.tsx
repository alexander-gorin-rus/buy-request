import React, {
  useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { APP_ROUTES } from '../../../../core/appRoutes';
import config from '../../../../config';
import Card from '../../../../components/Card';
import { IRequestCardData, IRequestCardProps } from '../types';
import { requestStatusLabels } from '../../../../utils/constants';

export default function RequestCard({ data }: IRequestCardProps) {
  const {
    media, cover, ...restData
  } = data;

  const { t } = useTranslation('requestCard');

  const coverUrl = useMemo(() => {
    const coverMedia = (media || []).find(
      (mediaItem) => mediaItem.fileNameMinio === cover,
    );
    if (coverMedia) {
      return `${config.mediaServiceUrl}/${coverMedia.bucket}/${coverMedia.fileNameMinio}`;
    }
    return '';
  }, [media, cover]);

  return (
    <Card<IRequestCardData>
      key={data.id}
      data={{
        ...restData,
        price: `${t('budget.label')} ${restData.budget}`,
      }}
      url={`${APP_ROUTES.REQUEST_MARKETPLACE}/${data.id}`}
      cover={coverUrl}
      statusLabels={requestStatusLabels}
    />
  );
}
