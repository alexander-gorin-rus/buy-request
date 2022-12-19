import React, { VFC } from 'react';

import Card from '../../../../components/Card';
import { APP_ROUTES } from '../../../../core/appRoutes';
import { IMedia } from '../../../../core/types';
import config from '../../../../config';
import { IOfferCardProps, IOfferCardData } from '../types';
import { offerStatusLabels } from '../../../../utils/constants';

const OfferCard: VFC<IOfferCardProps> = ({ offer }) => {
  const { cover, media, ...restData } = offer;
  const coverMedia = (media || []).find(
    (item: IMedia) => item.fileNameMinio === cover,
  );
  const coverUrl = (coverMedia && coverMedia.bucket && coverMedia.fileNameMinio)
    ? `${config.mediaServiceUrl}/${coverMedia.bucket}/${coverMedia.fileNameMinio}` : '';
  return (
    <Card<IOfferCardData> key={offer.id} data={restData} url={`${APP_ROUTES.OFFERS}/${offer.id}`} cover={coverUrl} statusLabels={offerStatusLabels} />
  );
};

export default OfferCard;
