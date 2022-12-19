import React, {
  memo,
  useEffect,
  useState,
  VFC,
} from 'react';
import { LANGUAGES } from 'src/utils/constants';
import Badge from 'src/components/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import RequestData from 'src/components/RequestDataComponent';
import { ReactComponent as ArrowBack } from 'src/arrow-back.svg';
import IconRuble from 'src/icons/IconRuble';
import MediaPreview from 'src/components/MediaPreview';
import config from 'src/config';
import Dialog from 'src/components/Dialog';
import { APP_ROUTES } from 'src/core/appRoutes';
import { ArrowLinkContainer, BadgeWrapper, PageTitle } from 'src/commonStyles';
import Tooltip from 'src/components/Tooltip';
import dispatchPromise from 'src/utils/helpers';
import Popup from 'src/components/Popup';
import { ReactComponent as IconDelete } from '../../../delete.svg';
import { getCurrentUserSelector, isCurrentUserConsumerSelector, isCurrentUserSellerSelector } from '../../../core/selectors';
import {
  cancelOfferBySeller,
  clearOffer, getOfferRequest, getRequestData,
} from './actions/actions';
import { getOfferRequestDataSelector, getOfferSelector } from './selectors';
import {
  BargainNotice,
  ComplainButtonWrapper,
  ComplainContainer,
  DealAndComplainWrapper,
  IconRubleWrapper,
  IconsWrapper,
  MediaTitle,
  MediaWrapper,
  OfferBudgetWrapper,
  OfferInfo,
  OfferInfoWrapper,
  OfferPageWrapper,
  OfferTitle,
  TagsTitle,
  TagsWrapper,
  TitleAndPriceWrapper,
  TitleWrapper,
} from './styles';
import { StyledLightning, StyledMediaContainer } from '../Request/styles';
import Report from '../Report';
import ConsumerButtons from './components/ConsumerButtons';

const SingleOffer: VFC = memo(() => {
  const dispatch = useDispatch();
  const params = useParams();
  const offer = useSelector(getOfferSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const isCurrentUserSeller = useSelector(isCurrentUserSellerSelector);
  const isCurrentUserConsumer = useSelector(isCurrentUserConsumerSelector);
  const request = useSelector(getOfferRequestDataSelector);
  const { t, i18n: { language } } = useTranslation(['offer', 'singleRequest']);
  const [openReport, setOpenReport] = useState(false);
  const [isCancelWarningShowen, setShowCancelWarning] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (offer?.requestId) { dispatch(getRequestData({ requestId: offer?.requestId })); }
  }, [offer?.requestId]);

  useEffect(() => {
    if (currentUser) {
      dispatch(getOfferRequest({ offerId: params.offerId, type: currentUser?.type }));
    }
    return () => {
      dispatch(clearOffer());
    };
  }, [params.offerId]);

  const toggleComplain = () => setOpenReport(!openReport);

  const showCancelWarning = () => setShowCancelWarning(true);
  const hideCancelWarning = () => setShowCancelWarning(false);

  const backToRequestsList = () => {
    navigate(`${APP_ROUTES.OFFERS}`);
  };

  const handleRejectOffer = () => {
    if (offer) {
      dispatchPromise<string>(dispatch, cancelOfferBySeller({
        id: offer.id,
        description: offer.description,
      })).then(() => {
        navigate(APP_ROUTES.OFFERS);
      });
    }
  };

  return (
    <>
      <ArrowLinkContainer onClick={backToRequestsList}>
        <ArrowBack />
        {t('offer:offersList')}
      </ArrowLinkContainer>
      <OfferPageWrapper>
        <TitleWrapper>
          <PageTitle>{request?.title}</PageTitle>
          {isCurrentUserSeller && (
            <>
              <IconsWrapper>
                <Tooltip text={t('offer:tooltip.cancel')}><IconDelete onClick={showCancelWarning} /></Tooltip>
              </IconsWrapper>
              {isCancelWarningShowen && (
                <Popup
                  title={t('offer:cancelWarning.title')}
                  accept={handleRejectOffer}
                  cancel={hideCancelWarning}
                  acceptButtonTitle={t('offer:cancelWarning.buttons.accept')}
                  cancelButtonTitle={t('offer:cancelWarning.buttons.cancel')}
                />
              )}
            </>
          )}
        </TitleWrapper>
        <RequestData request={request} />
        <OfferInfoWrapper>
          <TitleAndPriceWrapper>
            <OfferTitle>
              {offer?.title}
            </OfferTitle>
            <OfferBudgetWrapper>
              {offer?.price}
              <IconRubleWrapper>
                <IconRuble />
              </IconRubleWrapper>
            </OfferBudgetWrapper>
          </TitleAndPriceWrapper>
          <OfferInfo>
            {offer?.description}
          </OfferInfo>
          <TagsWrapper>
            <TagsTitle>
              {t('offer:tags')}
            </TagsTitle>
            <BadgeWrapper>
              {offer?.product?.tagsData.map((tag) => (
                <Badge key={tag.id}>
                  {language === LANGUAGES.en ? tag?.titleEn : tag?.titleRu}
                </Badge>
              ))}
            </BadgeWrapper>
          </TagsWrapper>
          <MediaWrapper>
            <MediaTitle>
              {t('offer:media')}
            </MediaTitle>
            <StyledMediaContainer>
              {offer?.media && offer.media.map(
                (mediaItem) => <MediaPreview url={`${config.mediaServiceUrl}/${mediaItem.bucket}/${mediaItem.fileNameMinio}`} />,
              )}
            </StyledMediaContainer>
          </MediaWrapper>
        </OfferInfoWrapper>
        {
          offer?.requestId && (
            <Dialog open={openReport}>
              <Report entityId={offer?.id} toggle={toggleComplain} />
            </Dialog>
          )
        }
        {isCurrentUserConsumer && offer && (
          <DealAndComplainWrapper>
            <ConsumerButtons data={offer} />
            <BargainNotice>{t('offer:bargainNotice')}</BargainNotice>
            <ComplainButtonWrapper>
              {
                offer.userId !== currentUser?.id && (
                  <ComplainContainer onClick={toggleComplain}>
                    <StyledLightning />
                    {t('singleRequest:report')}
                  </ComplainContainer>
                )
              }
            </ComplainButtonWrapper>
          </DealAndComplainWrapper>
        )}
      </OfferPageWrapper>
    </>
  );
});

export default SingleOffer;
