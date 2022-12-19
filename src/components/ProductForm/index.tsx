import React, {
  VFC, memo, useCallback, useEffect,
} from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGES, PRODUCT_BUCKET_NAME } from 'src/utils/constants';
import i18next from 'src/i18next';
import { IProductFormProps, ProductFormValues } from 'src/components/ProductForm/types';
import { ITag } from 'src/core/types';
import CustomStyledInput from 'src/components/CustomStyledInput';
import { CustomAutocomplete } from 'src/components/CustomAutocomplete';
import { IAutocompleteItem } from 'src/components/CustomAutocomplete/types';
import CustomStyledTextarea from 'src/components/CustomStyledTextarea';
import { productFormSchema } from 'src/utils/schema';
import { getTagsSelector } from 'src/components/ProductForm/selectors';
import { fetchTagsRequest } from 'src/components/ProductForm/actions/actions';
import DropzoneArea from 'src/components/DropzoneArea';
import {
  StyledForm, StyledContainer, StyledFormControl, ButtonGroup, DescriptionWrapper,
} from './styles';

const ProductForm: VFC<IProductFormProps> = memo(({
  onSubmit, id, productData, children, isEdit,
}) => {
  const { t, i18n: { language } } = useTranslation(['common', 'productForm']);
  const dispatch = useDispatch();
  const tags = useSelector(getTagsSelector);

  const {
    control, handleSubmit, formState: { errors }, reset,
  } = useForm<ProductFormValues>({
    mode: 'all',
    resolver: joiResolver(productFormSchema),
    defaultValues: {
      production: '',
      name: '',
      model: '',
      tags: [],
      productionGuarantee: '',
      description: '',
      media: [],
    },
  });

  const dispatchTags = useCallback(() => {
    dispatch(fetchTagsRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatchTags();
  }, [dispatch]);

  useEffect(() => {
    if (productData) {
      reset(productData);
    }
  }, [productData]);

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      id={id}
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { ref, ...field } }) => (
          <CustomStyledInput
            {...field}
            label={t('productForm:form.label.name')}
            placeholder={t('productForm:form.placeholder.name')}
            disabled={!isEdit}
            error={errors?.name?.message && i18next.t(errors.name.message)}
            allowableAmount={255}
          />
        )}
      />
      <StyledContainer>
        <Controller
          name="model"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <CustomStyledInput
              {...field}
              label={t('productForm:form.label.model')}
              placeholder={t('productForm:form.placeholder.model')}
              disabled={!isEdit}
              error={errors?.model?.message && i18next.t(errors.model.message)}
            />
          )}
        />
        <Controller
          name="production"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <CustomStyledInput
              {...field}
              label={t('productForm:form.label.production')}
              placeholder={t('productForm:form.placeholder.production')}
              disabled={!isEdit}
              error={errors?.production?.message && i18next.t(errors.production.message)}
            />
          )}
        />
      </StyledContainer>

      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <StyledFormControl>
            <CustomAutocomplete
              label={t('productForm:form.label.tag')}
              placeholder={t('productForm:form.placeholder.tag')}
              itemsList={tags}
              emptyValueText={t('productForm:form.label.noProducts')}
              onChange={(e: IAutocompleteItem[]) => {
                const result = e.map((tag) => tag.id);
                field.onChange(result);
              }}
              value={field.value}
              tagsLocalization={(item: IAutocompleteItem) => {
                const tag = item as ITag;
                return (language === LANGUAGES.en)
                  ? tag.titleEn : tag.titleRu;
              }}
              error={
                (errors?.tags as unknown as FieldError)?.message
                && i18next.t((errors?.tags as unknown as FieldError).message || '')
              }
            />
          </StyledFormControl>
        )}
      />

      <Controller
        name="productionGuarantee"
        control={control}
        render={({ field: { ref, ...field } }) => (
          <CustomStyledInput
            {...field}
            label={t('productForm:form.label.productionGuarantee')}
            placeholder={t('productForm:form.placeholder.productionGuarantee')}
            disabled={!isEdit}
            error={
                errors?.productionGuarantee?.message
                && i18next.t(errors.productionGuarantee.message)
              }
          />
        )}
      />
      <DescriptionWrapper>
        <Controller
          name="description"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <CustomStyledTextarea
              {...field}
              label={t('productForm:form.label.description')}
              placeholder={t('productForm:form.placeholder.description')}
              disabled={!isEdit}
              allowableAmount={255}
              error={errors?.description?.message && i18next.t(errors.description.message)}
            />
          )}
        />
      </DescriptionWrapper>
      <Controller
        name="media"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <DropzoneArea
            onChange={onChange}
            files={value}
            error={error}
            title={t('productForm:form.label.media')}
            disabled={!isEdit}
            bucketName={PRODUCT_BUCKET_NAME}
          />
        )}
      />
      <ButtonGroup>
        {children}
      </ButtonGroup>
    </StyledForm>
  );
});

export default ProductForm;
