import React, { VFC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Card from 'src/components/Card';
import config from 'src/config';
import { APP_ROUTES } from 'src/core/appRoutes';
import { getCurrentUserSelector } from 'src/core/selectors';
import { PRODUCT_BUCKET_NAME } from 'src/utils/constants';

import { IProductCardData, IProductCardProps } from '../types';

const ProductCard: VFC<IProductCardProps> = ({ product }) => {
  const {
    media, cover, ...restData
  } = product;
  const { t } = useTranslation('catalog');
  const currentUser = useSelector(getCurrentUserSelector);

  const isMyProduct = currentUser?.id === product.userId;

  const coverUrl = useMemo(() => {
    const coverMedia = (media || []).find(
      (mediaItem) => mediaItem.fileNameMinio === cover,
    );
    if (coverMedia) {
      return `${config.mediaServiceUrl}/${PRODUCT_BUCKET_NAME}/${coverMedia.fileNameMinio}`;
    }

    return '';
  }, [media, cover]);
  return (
    <Card<IProductCardData>
      url={`${APP_ROUTES.CATALOG}/${product.id}`}
      data={{
        ...restData,
        title: restData.name,
        mark: isMyProduct ? t('myProductMark') : '',
      }}
      cover={coverUrl}
    />
  );
};

export default ProductCard;
