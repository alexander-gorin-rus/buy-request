import React, {
  memo, SyntheticEvent, useState, VFC,
} from 'react';
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton } from '../../../components/CustomButton';
import { getDeal } from '../../../components/DealCard/actions';
import { getComponentLoadingSelector } from '../../../core/selectors';
import dispatchPromise from '../../../utils/helpers';
import {
  StyledContainer,
  StyledFormControl,
  StyledRating,
  StyledControlsGroup, StyledTypographyFormTitle,
} from './styles';
import { setCreatingFeedback } from './actions/actions';
import { FormInputs } from './types';

interface IFeedbackData {
  entityId: string;
  entityName: string;
  toggle: () => void;
}

const FeedbackForm: VFC<IFeedbackData> = memo((
  { entityId, entityName, toggle } : IFeedbackData,
) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['deal', 'common']);
  const [isValidRating, setIsValidRating] = useState(false);
  const isLoading = useSelector(getComponentLoadingSelector);

  const { control, setValue, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      comment: undefined,
      rating: 0,
    },
  });

  const handleHideModal = () => {
    dispatch(getDeal({ dealId: entityId }));
    toggle();
  };

  const onSubmit = async (data: FormInputs) => {
    if (data.rating) {
      dispatchPromise(dispatch, setCreatingFeedback({
        entityId,
        entityName,
        comment: data.comment,
        value: data.rating,
      })).then(handleHideModal);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <StyledContainer maxWidth="lg" className="CLASS">
        <StyledTypographyFormTitle variant="h4" align="center">
          {t('deal:feedBackFormTitle')}
        </StyledTypographyFormTitle>
        <StyledRating
          name="simple-controlled"
          onChange={(event: SyntheticEvent, newValue) => {
            if (newValue) {
              setValue('rating', newValue);
              if (!isValidRating) setIsValidRating(true);
            }
          }}
          size="large"
        />
        <Controller
          name="comment"
          control={control}
          rules={{ required: false, maxLength: 400 }}
          render={({ field }) => (
            <StyledFormControl>
              <TextField
                {...field}
                rows={4}
                multiline
                fullWidth
                label={t('deal:comment')}
                id="comment"
              />
            </StyledFormControl>
          )}
        />
        <StyledControlsGroup>
          <CustomButton
            size="large"
            variant="contained"
            onClick={handleHideModal}
            title={t('common:form.button.later')}
          />
          <CustomButton
            size="large"
            variant="contained"
            type="submit"
            isLoading={isLoading}
            disabled={!isValidRating}
            title={t('common:form.button.submit')}
          />
        </StyledControlsGroup>
      </StyledContainer>
    </form>
  );
});

export default FeedbackForm;
