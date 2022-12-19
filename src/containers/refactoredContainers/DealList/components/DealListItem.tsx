import React, {
  VFC, memo, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Tooltip from 'src/components/Tooltip';
import { ReactComponent as StarIcon } from '../../../../images/star.svg';
import { AVATAR_BUCKET_NAME, dealStatusLabels, TypeUser } from '../../../../utils/constants';
import { APP_ROUTES } from '../../../../core/appRoutes';
import { dateFormatWithTime, truncateString } from '../../../../utils/helpers';
import {
  StatusAndDate,
  OfferContent,
  CardMedia,
  DealListItemWrapper,
  Status,
  Date,
  Description,
  Price,
  DealLinkWrapper,
  DealLink,
  IconWrapper,
  Counterparties,
  CounterpartyAvatar,
  CounterpartyName,
  CounterpartyInfo,
  RatingWrapper,
  StarWrapper,
  Rating,
} from '../styles';
import { DealListItemProps } from '../types';
import config from '../../../../config';
import IconRightArrow from '../../../../icons/IconRightArrow';
import { getCurrentUserSelector } from '../../../../core/selectors';

const DealListItem: VFC<DealListItemProps> = memo(({ deal }) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const mockMedia = 'https://assets.maccarianagency.com/backgrounds/img11.jpg';
  const { t } = useTranslation(['common', 'deal']);
  const {
    id, status, offer, request, createdAt,
  } = deal;

  const cover = useMemo(() => {
    const coverMedia = (offer.media || []).find(
      (mediaItem) => mediaItem.fileNameMinio === offer.cover,
    );
    if (coverMedia) {
      return `${config.mediaServiceUrl}/${coverMedia.bucket}/${coverMedia.fileNameMinio}`;
    }
    return '';
  }, [offer]);

  return (
    <DealListItemWrapper>
      <CardMedia src={cover || mockMedia} alt={offer?.product?.name} />
      <OfferContent>
        <StatusAndDate>
          <Status>
            {
              // @ts-ignore
              t(dealStatusLabels[status])
            }
          </Status>
          <Date>{dateFormatWithTime(createdAt).slice(0, 10)}</Date>
        </StatusAndDate>
        <Description
          to={`${APP_ROUTES.DEAL_CONFIRMATION}/${id}`}
        >
          <Tooltip text={offer?.description} showOnOverflow>
            {offer?.description}
          </Tooltip>
        </Description>
        <Price>
          {offer?.price && `${offer.price.toLocaleString()}${' '}${t('common:currencySign')}`}
        </Price>
        <DealLinkWrapper>
          <DealLink
            to={`${APP_ROUTES.DEAL_CONFIRMATION}/${id}`}
          >
            {t('deal:dealListItem.dealLink')}
          </DealLink>
          <IconWrapper>
            <IconRightArrow />
          </IconWrapper>
        </DealLinkWrapper>
      </OfferContent>
      <Counterparties>
        {offer?.offerAuthor.avatar && currentUser?.type === TypeUser.consumer ? (
          <>
            <CounterpartyInfo>
              <CounterpartyAvatar
                alt={offer?.offerAuthor.name.slice(0, 4)}
                src={`${config.mediaServiceUrl}/${AVATAR_BUCKET_NAME}/${offer.offerAuthor.avatar}`}
              />
              <CounterpartyName>
                {truncateString(offer?.offerAuthor.name, 10)}
              </CounterpartyName>
            </CounterpartyInfo>
            <RatingWrapper>
              <StarWrapper>
                <StarIcon />
              </StarWrapper>
              <Rating>
                {offer?.ratingUser.userRating}
              </Rating>
            </RatingWrapper>
          </>
        ) : (
          <>
            <CounterpartyInfo>
              <CounterpartyAvatar
                alt={request?.requestAuthor.name.slice(0, 4)}
                src={`${config.mediaServiceUrl}/${AVATAR_BUCKET_NAME}/${request?.requestAuthor.avatar}`}
              />
              <CounterpartyName>
                {truncateString(request?.requestAuthor.name, 10)}
              </CounterpartyName>
            </CounterpartyInfo>
            <RatingWrapper>
              <StarWrapper>
                <StarIcon />
              </StarWrapper>
              <Rating>
                {request?.ratingUser.userRating}
              </Rating>
            </RatingWrapper>
          </>
        ) }
      </Counterparties>
    </DealListItemWrapper>
  );
});

export default DealListItem;
