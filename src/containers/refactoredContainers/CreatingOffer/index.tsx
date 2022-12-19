import { joiResolver } from '@hookform/resolvers/joi/dist/joi';
import React, {
  memo, useCallback, useEffect, useState, VFC,
} from 'react';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import RubleIcon from 'src/icons/IconRuble';
import DropzoneArea from 'src/components/DropzoneArea';
import { APP_ROUTES } from 'src/core/appRoutes';
import { getComponentLoadingSelector } from 'src/core/selectors';
import i18next from 'src/i18next';
import { OFFER_BUCKET_NAME, PRODUCT_BUCKET_NAME } from 'src/utils/constants';
import dispatchPromise from 'src/utils/helpers';
import { creatingOfferSchema } from 'src/utils/schema';
import { PageTitle } from 'src/commonStyles';
import RequestData from 'src/components/RequestDataComponent';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import CustomStyledInput from 'src/components/CustomStyledInput';
import IconQuestionMark from 'src/icons/IconQuestionMark';
import CustomStyledTextarea from 'src/components/CustomStyledTextarea';
import IconHand from 'src/icons/IconHand';
import { CustomAutocomplete } from 'src/components/CustomAutocomplete';
import { IAutocompleteItem } from 'src/components/CustomAutocomplete/types';
import { IMedia } from 'src/core/types';
import Popup from 'src/components/Popup';
import { ICreateOfferFormData, IProduct } from './types';
import {
  clearCreatingOffer, createOffer, getProductCatalog, getRequestData,
} from './actions/actions';
import {
  getOfferCatalogSelector, getOfferRequestDataSelector,
} from './selectors';
import {
  StyledButtonContainer, StyledForm, StyledFormControl, StyledPriceFormControl,
  BargainSuggestion, DropZoneLabel, IconQuestionMarkWrapper, DropZoneLabelWrapper,
  InputPriceWrapper, IconHandAndBargainWrapper, CustomStyledButtonWrapper,
} from './styles';

const CreatingOffer: VFC = memo(() => {
  const { t } = useTranslation(['creatingOffer', 'common']);
  const { requestId } = useParams<{ requestId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const catalog = useSelector(getOfferCatalogSelector);
  const isLoading = useSelector(getComponentLoadingSelector);
  const request = useSelector(getOfferRequestDataSelector);
  const [isPriceInfoModalOpened, setIsPriceInfoModalOpened] = useState(false);

  const togglePriceInfoModalOpen = () => setIsPriceInfoModalOpened((prev) => !prev);

  const {
    control, handleSubmit, formState: { errors }, setValue, watch, getValues,
  } = useForm<ICreateOfferFormData>({
    resolver: joiResolver(creatingOfferSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      product: [],
      media: [],
      additionalConditions: '',
    },
  });

  const handleFormSubmit = (formData: ICreateOfferFormData) => {
    if (requestId) {
      dispatchPromise(dispatch, createOffer({
        ...formData,
        requestId,
      })).then(() => {
        navigate(APP_ROUTES.OFFERS);
      });
    }
  };

  const onSubmit = (formData: ICreateOfferFormData): void => {
    if (request?.budget && (formData.price > request.budget)) {
      togglePriceInfoModalOpen();
    } else {
      handleFormSubmit(formData);
    }
  };

  const handleRedirect = () => {
    navigate(APP_ROUTES.OFFERS);
  };

  const continueCreatingOffer = () => {
    const formData = getValues();
    formData.price = Number(formData.price);

    handleFormSubmit(formData);
  };

  useEffect(() => {
    if (requestId) { dispatch(getRequestData({ requestId })); }

    return () => {
      dispatch(clearCreatingOffer());
    };
  }, [requestId]);

  useEffect(() => {
    dispatch(getProductCatalog());

    return () => {
      dispatch(clearCreatingOffer());
    };
  }, []);

  const media = watch('media');
  const selectedProductsIds = watch('product');

  const selectMediaFromProduct = useCallback((selected: IProduct[]) => {
    const selectedMedia = (selected || []).reduce(
      (acc: IMedia[], product) => ([
        ...acc,
        ...(product?.media || []).map(
          (mediaItem) => ({ ...mediaItem, bucket: PRODUCT_BUCKET_NAME }),
        ),
      ]),
      [],
    );
    setValue('media', [
      ...selectedMedia,
    ], { shouldValidate: true });
  }, [media, selectedProductsIds]);

  return (
    <>
      <PageTitle>{t('creatingOffer:title')}</PageTitle>
      <RequestData request={request} />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="product"
          control={control}
          render={({ field }) => (
            <StyledFormControl>
              <CustomAutocomplete
                placeholder={t('creatingOffer:offerInfo.offerTitle')}
                label={t('creatingOffer:form.label.offerName')}
                emptyValueText={t('creatingOffer:productInfo.noProducts')}
                itemsList={catalog || []}
                onChange={(e: IAutocompleteItem[]) => {
                  const result = e.map((product) => product.id);
                  field.onChange(result);
                  selectMediaFromProduct(e as IProduct[]);
                }}
                value={field.value}
                error={
                  (errors?.product as unknown as FieldError)?.message
                  && i18next.t((errors?.product as unknown as FieldError).message || '')
                }
              />
            </StyledFormControl>
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <StyledFormControl>
              <CustomStyledTextarea
                label={t('common:form.label.description')}
                {...field}
                placeholder={t('creatingOffer:offerInfo.offerDescription')}
                disabled={isLoading}
                allowableAmount={255}
                error={
                  errors?.description?.message
                  && i18next.t(errors.description.message)
                }
              />
            </StyledFormControl>
          )}
        />
        <Controller
          name="media"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <DropZoneLabelWrapper>
                <DropZoneLabel>
                  {t('common:form.label.media')}
                </DropZoneLabel>
                <IconQuestionMarkWrapper>
                  <IconQuestionMark />
                </IconQuestionMarkWrapper>
              </DropZoneLabelWrapper>
              <StyledFormControl>
                <DropzoneArea
                  onChange={onChange}
                  files={value}
                  error={error}
                  bucketName={OFFER_BUCKET_NAME}
                />
              </StyledFormControl>
            </>
          )}
        />
        <InputPriceWrapper>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <StyledFormControl>
                <StyledPriceFormControl>
                  <CustomStyledInput
                    label={t('creatingOffer:offerInfo.offerPrice')}
                    {...field}
                    type="number"
                    placeholder={t('common:form.label.price')}
                    disabled={isLoading}
                    error={
                      errors?.price?.message && i18next.t(errors.price.message)
                    }
                    icon={<RubleIcon />}
                  />
                </StyledPriceFormControl>
                <IconHandAndBargainWrapper>
                  <IconHand />
                  <BargainSuggestion>{t('creatingOffer:offerInfo.bargainNotice')}</BargainSuggestion>
                </IconHandAndBargainWrapper>
              </StyledFormControl>
            )}
          />
        </InputPriceWrapper>
        <StyledButtonContainer>
          <CustomStyledButtonWrapper>
            <CustomStyledButton
              size="large"
              onClick={handleRedirect}
            >
              {t('common:form.button.cancel')}
            </CustomStyledButton>
          </CustomStyledButtonWrapper>
          <CustomStyledButtonWrapper>
            <CustomStyledButton
              size="large"
              isLoading={isLoading && !isPriceInfoModalOpened}
              primary
            >
              {t('creatingOffer:form.buttons.create')}
            </CustomStyledButton>
          </CustomStyledButtonWrapper>
        </StyledButtonContainer>
      </StyledForm>
      {isPriceInfoModalOpened && (
        <Popup
          title={t('creatingOffer:priceInfoModal.title')}
          description={t('creatingOffer:priceInfoModal.description')}
          accept={continueCreatingOffer}
          cancel={togglePriceInfoModalOpen}
          acceptButtonTitle={t('common:form.button.proceed')}
          cancelButtonTitle={t('common:form.button.revoke')}
          acceptButtonIsLoading={isLoading}
        />
      )}
    </>
  );
});

export default CreatingOffer;
