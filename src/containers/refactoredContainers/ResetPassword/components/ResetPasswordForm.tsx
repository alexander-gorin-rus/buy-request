import React, {
  memo, useEffect, useState, VFC,
} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { joiResolver } from '@hookform/resolvers/joi';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import CustomPasswordInput from 'src/components/CustomPasswordInput';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { resetPasswordSchema } from 'src/utils/schema';
import { APP_ROUTES } from 'src/core/appRoutes';
import { PinInput } from 'src/components/PinInput';
import { getComponentLoadingSelector } from 'src/core/selectors';
import { CodeErrorStatus, ErrorMessages } from 'src/utils/constants';
import { ReactComponent as RefreshIcon } from 'src/icons/svg/refresh.svg';
import Preloader from 'src/components/Preloader';
import {
  clearResetPasswordState,
  resetPasswordConfirmRequest,
  resetPasswordConfirmFailure,
  resendPasswordCode,
} from '../actions';
import { getResetPasswordStateSelector } from '../selectors';
import {
  StyledInputsWrapper, AccountLinkWrapper, StyledCodeWrapper,
  AccountLink, StyledLink, StyledDescription, ResendButton,
  ResendButtonWrapper,
} from '../styles';
import { IResetPassword } from '../types';

const ResetPasswordForm: VFC = memo(() => {
  const { t } = useTranslation(['common', 'resetPassword']);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    email, codeError, isCodeLoading, isShowResendButton,
  } = useSelector(getResetPasswordStateSelector);
  const isLoading = useSelector(getComponentLoadingSelector);
  const [resetCodeValue, setResetCodeValue] = useState(false);

  const {
    control, handleSubmit, formState: { isValid }, reset, getValues,
  } = useForm<IResetPassword>({
    mode: 'onTouched',
    resolver: joiResolver(resetPasswordSchema),
    defaultValues: {
      email,
      password: '',
      confirmPassword: '',
      code: '',
    },
  });

  const redirectToLogin = () => {
    navigate(APP_ROUTES.LOGIN);
  };

  const clearState = () => {
    dispatch(clearResetPasswordState());
  };

  const resendCode = () => {
    if (!isCodeLoading) {
      setResetCodeValue(true);
      reset({ ...getValues() });
      dispatch(resendPasswordCode({ email }));
    }
  };

  const handlePinOnChange = (e: string, fieldOnChange: (e: string) => void) => {
    if (codeError) {
      dispatch(resetPasswordConfirmFailure({ codeError: null }));
    }

    fieldOnChange(e);
  };

  const onSubmit = (data: IResetPassword) => {
    dispatch(resetPasswordConfirmRequest({
      ...data,
      redirectToLogin,
    }));
  };

  useEffect(() => clearState, []);

  return (
    <>
      <StyledDescription>
        {`${t('resetPassword:changePasswordFor')} ${email}.`}
        <br />
        {`${t('resetPassword:iHave')} `}
        <StyledLink onClick={clearState}>{t('resetPassword:anotherEmail')}</StyledLink>
      </StyledDescription>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <StyledInputsWrapper>
          <Controller
            name="password"
            control={control}
            render={({ field: { ref, ...otherField }, fieldState }) => (
              <CustomPasswordInput
                {...otherField}
                label={t('common:form.password.newPassword')}
                placeholder={t('common:form.label.password')}
                error={
                  (!isCodeLoading
                    && fieldState.error?.message
                    && i18next.t(fieldState.error?.message)
                  )
                    || (codeError === CodeErrorStatus.SAME_PASSWORD
                          && i18next.t(ErrorMessages.resetPassword[codeError])
                    )
                }
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { ref, ...otherField }, fieldState }) => (
              <CustomPasswordInput
                {...otherField}
                label={t('common:form.password.confirmPassword')}
                placeholder={t('common:form.label.password')}
                error={
                  fieldState.error?.message
                  && i18next.t(fieldState.error?.message)
                }
              />
            )}
          />
        </StyledInputsWrapper>
        <Controller
          name="code"
          control={control}
          render={({
            field: {
              ref, onChange, value, ...otherField
            }, fieldState: { error },
          }) => (
            <StyledCodeWrapper>
              <PinInput
                {...otherField}
                isUpperCase
                type="text"
                label={t('common:form.password.code')}
                initialValue={value}
                resetValue={resetCodeValue}
                setResetValue={setResetCodeValue}
                onChange={(e) => handlePinOnChange(e, onChange)}
                isError={!!error?.message || !!codeError}
                message={
                  (error?.message && i18next.t(error?.message))
                  || (codeError === CodeErrorStatus.CODE_TIMEOUT
                      && i18next.t(ErrorMessages.resetPassword[codeError])
                  )
                }
              />
            </StyledCodeWrapper>
          )}
        />
        <ResendButtonWrapper>
          {isShowResendButton && (
            <ResendButton onClick={resendCode}>
              {isCodeLoading ? <Preloader /> : <RefreshIcon />}
              {t('resetPassword:resendButton')}
            </ResendButton>
          )}
        </ResendButtonWrapper>
        <CustomStyledButton
          primary
          size="fullWidth"
          isLoading={isLoading}
          disabled={!isValid || isLoading || !!codeError || isCodeLoading}
        >
          {t('common:form.button.store')}
        </CustomStyledButton>
        <AccountLinkWrapper>
          <AccountLink
            to={APP_ROUTES.LOGIN}
          >
            {t('common:form.button.signIn')}
          </AccountLink>
        </AccountLinkWrapper>
      </form>
    </>
  );
});

export default ResetPasswordForm;
