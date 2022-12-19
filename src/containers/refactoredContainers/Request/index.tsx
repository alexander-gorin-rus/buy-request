import React, {
  VFC, memo, useEffect, EffectCallback, useState,
} from 'react';
import { BadgeWrapper } from 'src/commonStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Loader from 'src/components/Loader';
import { LoaderBox } from 'src/core/layouts/styles';
import { getComponentLoadingSelector, getCurrentUserSelector } from 'src/core/selectors';
import { fetchTagsRequest } from 'src/components/ProductForm/actions/actions';
import Dialog from 'src/components/Dialog';
import { ReactComponent as ArrowBack } from 'src/arrow-back.svg';
import { ReactComponent as Helper } from 'src/images/helper.svg';
import Badge from 'src/components/Badge';
import MediaPreview from 'src/components/MediaPreview';
import config from 'src/config';
import { APP_ROUTES } from 'src/core/appRoutes';
import Tooltip from 'src/components/Tooltip';
import { LANGUAGES } from 'src/utils/constants';
import RequestActions from './components/RequestActions';
import {
  StyledTitle,
  StyledTitleContainer,
  StyledBudgetContainer,
  StyledDescriptionContainer,
  StyledMediaLabel,
  StyledMediaContainer,
  StyledReportContainer,
  StyledLightning,
  StyledTitleBlock,
  StyledTagsLabel,
  StyledBackToListContainer,
  StyledProductsContainer,
  StyledProductsLabel,
  StyledReadyForAnaloguesLabel,
  StyledCheck,
  StyledHelperContainer,
} from './styles';
import Report from '../Report';
import { getRequestSelector } from './selectors';
import { clearRequest, getRequest } from './actions/actions';

const Request: VFC = memo(() => {
  const dispatch = useDispatch();
  const { requestId } = useParams<{ requestId: string }>();
  const request = useSelector(getRequestSelector);
  const isLoading = useSelector(getComponentLoadingSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const { t, i18n: { language } } = useTranslation('singleRequest');
  const navigate = useNavigate();
  const [openReport, setOpenReport] = useState(false);

  const toggleComplain = () => setOpenReport(!openReport);

  useEffect(() => {
    if (requestId) dispatch(getRequest({ requestId }));
  }, [requestId]);

  useEffect(() => {
    dispatch(fetchTagsRequest());
  }, [dispatch]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearRequest());
  }, []);

  const backToRequestsList = () => {
    navigate(`${APP_ROUTES.REQUEST_MARKETPLACE}`);
  };

  return (
    <>
      <LoaderBox>
        {isLoading && (<Loader isComponent isLinear />)}
      </LoaderBox>
      {request && (
      <>
        <StyledBackToListContainer onClick={backToRequestsList}>
          <ArrowBack />
          {t('backToList')}
        </StyledBackToListContainer>
        <StyledTitleContainer>
          <StyledTitleBlock>
            <StyledTitle>{request.title}</StyledTitle>
            <StyledBudgetContainer>
              {`${t('budget')} ${request.budget} ₽`}
            </StyledBudgetContainer>
          </StyledTitleBlock>

          <RequestActions request={request} />
        </StyledTitleContainer>

        <StyledDescriptionContainer>
          {request.description}
        </StyledDescriptionContainer>

        <StyledTagsLabel>
          {t('tags')}
        </StyledTagsLabel>

        <BadgeWrapper>
          {request.tagsData?.map((tag) => (
            <Badge key={tag?.id}>
              {language === LANGUAGES.en ? tag?.titleEn : tag?.titleRu}
            </Badge>
          ))}
        </BadgeWrapper>

        <StyledMediaLabel>
          {t('media')}
        </StyledMediaLabel>

        <StyledMediaContainer>
          {request.media.map(
            (mediaItem) => (
              <MediaPreview
                key={mediaItem.fileNameMinio}
                url={`${config.mediaServiceUrl}/${mediaItem.bucket}/${mediaItem.fileNameMinio}`}
              />
            ),
          )}

        </StyledMediaContainer>

        <StyledProductsLabel>
          {t('products.label')}
          <StyledHelperContainer>
            <Tooltip text={t('products.tooltip')}>
              <Helper />
            </Tooltip>
          </StyledHelperContainer>
        </StyledProductsLabel>

        {request.readyForAnalogues && (
          <StyledReadyForAnaloguesLabel>
            <StyledCheck />
            {t('readyForAnalogues.label')}
            <Tooltip text={t('readyForAnalogues.tooltip')}>
              <Helper />
            </Tooltip>
          </StyledReadyForAnaloguesLabel>
        )}

        <StyledProductsContainer>
          {request.products.map((product) => (
            <Badge alternative key={product?.id}>
              {product.name}
            </Badge>
          ))}
        </StyledProductsContainer>

        { currentUser?.id !== request.userId && (
          <StyledReportContainer onClick={toggleComplain}>
            <StyledLightning />
            {t('report')}
          </StyledReportContainer>
        )}

        {
            request.id && (
              <Dialog open={openReport}>
                <Report entityId={request.id} toggle={toggleComplain} />
              </Dialog>
            )
          }

      </>
      )}
    </>
  );
});

export default Request;
