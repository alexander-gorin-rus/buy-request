import React, {
  VFC, useState, useCallback, useEffect,
} from 'react';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import i18next, { TFunctionKeys } from 'i18next';
import { useTranslation } from 'react-i18next';
import { creatingRequestSchema } from 'src/utils/schema';
import { IMedia, ITag, IProduct } from 'src/core/types';
import { LANGUAGES, REQUEST_BUCKET_NAME, PRODUCT_BUCKET_NAME } from 'src/utils/constants';
import CustomStyledInput from 'src/components/CustomStyledInput';
import { CustomAutocomplete } from 'src/components/CustomAutocomplete';
import { IAutocompleteItem } from 'src/components/CustomAutocomplete/types';
import DropzoneArea from 'src/components/DropzoneArea';
import CustomStyledTextarea from 'src/components/CustomStyledTextarea';
import RubleIcon from 'src/icons/IconRuble';
import IconHand from 'src/icons/IconHand';
import {
  getProductsSelector,
  getTagsSelector,
} from './selectors';
import { IRequestForm, IRequestFormProps } from './types';
import {
  StyledForm,
  StyledFormControl,
  StyledButtonBox,
  CustomStyledBox, InformationBox, NoteBox, MediaWrapper,
} from './styles';
import { clearTagsAndProducts, fetchTagsAndProductsRequest } from './actions/actions';

const RequestForm: VFC<IRequestFormProps> = ({
  onSubmit, initialValues, children, isSubmitted,
}) => {
  const dispatch = useDispatch();
  const { t, i18n: { language } } = useTranslation(['creatingRequest', 'products', 'common', 'catalog']);
  const tags = useSelector(getTagsSelector);
  const products = useSelector(getProductsSelector);
  const [currentProducts, setCurrentPoducts] = useState<IProduct[]>([]);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset,
  } = useForm<IRequestForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: joiResolver(creatingRequestSchema),
    defaultValues: initialValues || {
      title: '',
      tags: [],
      products: [],
      budget: 50000,
      description: '',
      media: [],
    },
  });
  const media = watch('media');
  const selectedProductsIds = watch('products');

  useEffect(() => {
    reset(initialValues);
  }, [initialValues]);

  useEffect(() => {
    dispatch(fetchTagsAndProductsRequest());

    return () => {
      dispatch(clearTagsAndProducts());
    };
  }, []);

  useEffect(() => {
    const selectedTags = initialValues?.tags || [];
    const newCurrentProducts:IProduct[] | undefined = products?.filter(
      (prd: IProduct) => prd.tags.filter(
        (tag:string) => selectedTags.includes(tag),
      )?.length > 0,
    );
    setCurrentPoducts(newCurrentProducts);
  }, [initialValues?.tags]);

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

  const onTagsChange = useCallback(
    (onChange) => (e: IAutocompleteItem[]) => {
      const selectedTags = e.map((item) => item.id);
      setValue('products', []);
      const newCurrentProducts:IProduct[] | undefined = products?.filter(
        (prd: IProduct) => prd.tags.filter(
          (tag:string) => selectedTags.includes(tag),
        )?.length > 0,
      );
      setCurrentPoducts(newCurrentProducts);
      onChange(selectedTags);
    },
    [products],
  );

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <StyledFormControl>
            <CustomStyledInput
              label={t('creatingRequest:form.label.requestName')}
              placeholder={t('creatingRequest:form.placeholder.requestName')}
              {...field}
              allowableAmount={255}
              type="text"
              disabled={isSubmitted}
              error={error
                  && i18next.t(error.message as TFunctionKeys)}
            />
          </StyledFormControl>
        )}
      />
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <StyledFormControl>
            <CustomAutocomplete
              label={t('creatingRequest:form.label.tag')}
              itemsList={tags}
              emptyValueText={t('catalog:noProducts')}
              onChange={onTagsChange(field.onChange)}
              tagsLocalization={(item: IAutocompleteItem) => {
                const tag = item as ITag;
                return (language === LANGUAGES.en)
                  ? tag.titleEn : tag.titleRu;
              }}
              error={
                    (errors?.tags as unknown as FieldError)?.message
                    && i18next.t((errors?.tags as unknown as FieldError).message || '')
                  }
              placeholder={t('creatingRequest:form.placeholder.tag')}
              value={field.value}
            />
          </StyledFormControl>
        )}
      />
      <Controller
        name="products"
        control={control}
        render={({ field }) => (
          <StyledFormControl>
            <CustomAutocomplete
              placeholder={t('creatingRequest:form.placeholder.products')}
              label={t('creatingRequest:form.label.products')}
              emptyValueText={t('catalog:noProducts')}
              itemsList={currentProducts}
              onChange={(e: IAutocompleteItem[]) => {
                const result = e.map((product) => product.id);
                field.onChange(result);
                selectMediaFromProduct(e as IProduct[]);
              }}
              value={field.value}
              error={
                    (errors?.products as unknown as FieldError)?.message
                    && i18next.t((errors?.products as unknown as FieldError).message || '')
                  }
            />
          </StyledFormControl>
        )}
      />

      <MediaWrapper>
        <Controller
          name="media"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <StyledFormControl>
              <DropzoneArea
                onChange={onChange}
                files={value}
                error={error}
                title={t('common:form.label.media')}
                bucketName={REQUEST_BUCKET_NAME}
              />
            </StyledFormControl>
          )}
        />
      </MediaWrapper>

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <StyledFormControl>
            <CustomStyledTextarea
              {...field}
              label={t('creatingRequest:form.label.description')}
              placeholder={t('creatingRequest:form.placeholder.description')}
              disabled={isSubmitted}
              allowableAmount={255}
              error={
                  errors?.description?.message
                  && i18next.t(errors.description.message)
                }
            />
          </StyledFormControl>
        )}
      />

      <CustomStyledBox>
        <Controller
          name="budget"
          control={control}
          render={({ field, fieldState }) => (
            <StyledFormControl>
              <CustomStyledInput
                {...field}
                label={t('creatingRequest:form.label.budgetFrom')}
                placeholder={t('creatingRequest:form.placeholder.budgetFrom')}
                type="number"
                disabled={isSubmitted}
                error={
                  fieldState.error?.message
                    && i18next.t(fieldState.error?.message)
                  }
                icon={<RubleIcon />}
              />
            </StyledFormControl>
          )}
        />
        <InformationBox>
          <div>
            <IconHand />
          </div>
          <NoteBox>
            {t('creatingRequest:form.requestInfo.note')}
          </NoteBox>
        </InformationBox>
      </CustomStyledBox>

      <StyledButtonBox>
        {children}
      </StyledButtonBox>
    </StyledForm>
  );
};

export default RequestForm;
