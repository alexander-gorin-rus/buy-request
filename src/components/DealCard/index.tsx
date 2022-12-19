import {
  Alert,
} from '@mui/material';
import React, {
  EffectCallback,
  memo, useCallback, useEffect, VFC,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import types from '../../core/actionTypes';
import { getDealSelector, getErrorSelector } from './selectors';
import { getDeal } from './actions';
import {
  IconWrapper,
  PageContent,
  StyledDealCard,
  OfferBrief,
  StyledMediaContainer,
  OfferDescription,
  OfferTitle,
  OfferPrice,
  OfferPriceWrapper,
  StyledInfoText,
  InfoTextParagraph,
  StyledImgWrapper,
  BlockWrapper,
  BlockTitle, UserAuthorBox, UserAuthorText, UserAuthorBlock, UserAuthorData, ButtonWrapper,
} from './styles';
import { IDealCardProps } from './types';
import { LANGUAGES } from '../../utils/constants';
import config from '../../config';
import RequestDataDetails from './components/RequestDetailsComponent';
import { BadgeWrapper, PageTitle } from '../../commonStyles';
import { ReactComponent as RubleIcon } from '../../icons/svg/ruble.svg';
import MediaPreview from '../MediaPreview';
import Badge from '../Badge';
import HandIcon from '../../icons/dealCard/hand.png';
import Dollar from '../../icons/dealCard/dollar.png';
import Chat from '../../icons/dealCard/chat.png';
import { AvatarComponent } from '../AvatarComponent';
import { isCurrentUserConsumerSelector } from '../../core/selectors';
import { CustomStyledButton } from '../CustomStyledButton';

const DealCard: VFC<IDealCardProps> = memo(({ dealId, toggleChatView }) => {
  const { t, i18n: { language } } = useTranslation('dealCard');
  const dispatch = useDispatch();
  const error = useSelector(getErrorSelector);
  const deal = useSelector(getDealSelector);
  const isCurrentUserConsumer = useSelector(isCurrentUserConsumerSelector);

  const dispatchGetDeal = useCallback((id) => {
    dispatch(getDeal({ dealId: id }));
  }, [dealId, dispatch]);

  useEffect(() => {
    if (dealId) dispatchGetDeal(dealId);
  }, [dealId, dispatch, dispatchGetDeal]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch({ type: types.CLEAR_DEAL_STATE });
  }, []);

  return (
    <StyledDealCard>
      {error && <Alert severity="error">{error}</Alert>}
      {deal && (
      <PageContent>
        <PageTitle>{deal.request.title}</PageTitle>
        <RequestDataDetails deal={deal} />
        <OfferBrief>
          <OfferTitle>{deal.offer.title}</OfferTitle>
          <OfferPriceWrapper>
            <OfferPrice>{deal.offer.price}</OfferPrice>
            <IconWrapper>
              <RubleIcon />
            </IconWrapper>
          </OfferPriceWrapper>
        </OfferBrief>
        <OfferDescription>{deal.offer.description}</OfferDescription>
        <BlockWrapper>
          <BlockTitle>
            {t('tags')}
          </BlockTitle>
        </BlockWrapper>
        <BadgeWrapper>
          {deal.offer.product.tagsData?.map((tag) => (
            <Badge key={tag?.id}>
              {language === LANGUAGES.en ? tag?.titleEn : tag?.titleRu}
            </Badge>
          ))}
        </BadgeWrapper>
        <BlockWrapper>
          <BlockTitle>
            {t('media')}
          </BlockTitle>
          <StyledMediaContainer>
            {deal.offer?.media && deal.offer.media.map(
              (mediaItem) => <MediaPreview url={`${config.mediaServiceUrl}/${mediaItem.bucket}/${mediaItem.fileNameMinio}`} />,
            )}
          </StyledMediaContainer>
        </BlockWrapper>
      </PageContent>
      )}
      <UserAuthorBlock>
        <UserAuthorBox>
          <UserAuthorData>
            <AvatarComponent
              size={{ width: 59, height: 59 }}
              isEdit={false}
              src={isCurrentUserConsumer ? deal?.offer.offerAuthor.avatar
                : deal?.request.requestAuthor.avatar}
            />
            <UserAuthorText>
              {isCurrentUserConsumer ? `${deal?.offer.offerAuthor.name} ${deal?.offer.offerAuthor.surname}`
                : `${deal?.request.requestAuthor.name} ${deal?.request.requestAuthor.surname}`}
            </UserAuthorText>
          </UserAuthorData>
          <ButtonWrapper>
            <CustomStyledButton
              onClick={toggleChatView}
              primary
            >
              {t('button')}
            </CustomStyledButton>
          </ButtonWrapper>
        </UserAuthorBox>
      </UserAuthorBlock>
      <StyledInfoText>
        <InfoTextParagraph>
          <StyledImgWrapper src={Dollar} />
          {t('information.paymentConditions')}
        </InfoTextParagraph>
        <InfoTextParagraph>
          <StyledImgWrapper src={Chat} />
          {t('information.chatDiscussions')}
        </InfoTextParagraph>
        <InfoTextParagraph>
          <StyledImgWrapper src={HandIcon} />
          {t('information.dealConditions')}
        </InfoTextParagraph>
      </StyledInfoText>
    </StyledDealCard>
  );
});

export default DealCard;
