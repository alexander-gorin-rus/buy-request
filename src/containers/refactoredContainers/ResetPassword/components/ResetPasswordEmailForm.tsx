import React, { memo, VFC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useDispatch, useSelector } from 'react-redux';
import CustomStyledInput from 'src/components/CustomStyledInput';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { emailFormSchema } from 'src/utils/schema';
import { getComponentLoadingSelector } from 'src/core/selectors';
import { resetPasswordRequest } from '../actions';
import { getResetPasswordStateSelector } from '../selectors';
import { StyledDescription, StyledEmailForm } from '../styles';
import { IPasswordResetEmail } from '../types';

const ResetPasswordEmailForm: VFC = memo(() => {
  const { t } = useTranslation(['common', 'resetPassword']);
  const dispatch = useDispatch();
  const isLoading = useSelector(getComponentLoadingSelector);
  const { email } = useSelector(getResetPasswordStateSelector);

  const {
    control, handleSubmit, formState: { isValid },
  } = useForm<IPasswordResetEmail>({
    resolver: joiResolver(emailFormSchema),
    mode: 'onTouched',
    defaultValues: {
      email,
    },
  });

  const onSubmit = (data: IPasswordResetEmail) => {
    dispatch(resetPasswordRequest(data));
  };

  return (
    <>
      <StyledDescription>{t('resetPassword:subtitle')}</StyledDescription>
      <StyledEmailForm
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <CustomStyledInput
              {...field}
              label={t('common:form.label.loginEmail')}
              type="email"
              placeholder={t('common:form.label.loginEmail')}
              error={
                fieldState.error?.message
                && i18next.t(fieldState.error?.message)
              }
            />
          )}
        />
        <CustomStyledButton
          primary
          size="fullWidth"
          isLoading={isLoading}
          disabled={!isValid || isLoading}
        >
          {t('common:form.button.submit')}
        </CustomStyledButton>
      </StyledEmailForm>
    </>
  );
});

export default ResetPasswordEmailForm;
