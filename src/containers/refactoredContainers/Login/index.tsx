import React, {
  memo,
  VFC,
  useState,
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useDispatch } from 'react-redux';
import { ReactComponent as Header } from 'src/images/auth-inputs-header.svg';
import Modal from 'src/components/Modal';
import {
  InputsContainer,
  AuthLoginTitle,
  AuthLoginTitleWrapper,
} from 'src/commonStyles/LoginRegisterBlock';
import CustomStyledInput from 'src/components/CustomStyledInput';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import CustomPasswordInput from 'src/components/CustomPasswordInput';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { baseLoginSchema } from 'src/utils/schema';
import { APP_ROUTES } from 'src/core/appRoutes';
import dispatchPromise from 'src/utils/helpers';
import { LoginErrors } from 'src/utils/constants';
import PageContainerWithBackground from 'src/components/PageContainerWithBackground';
import { useSearchParams } from 'react-router-dom';
import ResendEmail from './components/ResendEmail';
import { ILogin } from './types';
import {
  StyledForm,
  CreateAccount,
  PasswordInputWrapper,
  ForgotPassword,
} from './styles';
import { fetchLoginRequest } from './actions/actions';
import CaptchaModal from './components/CaptchaModal';

const Login: VFC = memo(() => {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [queryParams, setQueryParams] = useSearchParams();
  const isEmailResendShown = queryParams.get('isEmailResendShown') === 'true';
  const dispatch = useDispatch();
  const { t } = useTranslation(['common', 'loginPage']);
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
    watch,
  } = useForm<ILogin>({
    resolver: joiResolver(baseLoginSchema),
    mode: 'onChange',
  });

  const toggleModal = () => setOpenModal((prev) => !prev);

  const email = watch('email');

  const handleisEmailResendShownChange = (value: boolean) => {
    queryParams.set('isEmailResendShown', (value).toString());
    setQueryParams(queryParams);
  };

  const onClose = () => handleisEmailResendShownChange(false);

  const onSubmit = (data: ILogin) => {
    setCount(count + 1);
    if (count > 9) {
      setOpenModal(true);
    }
    dispatchPromise(dispatch, fetchLoginRequest(data)).then((message) => {
      if (message === LoginErrors.EMAIL_IS_NOT_VERIFIED) {
        handleisEmailResendShownChange(true);
      }
    });
  };
  return (
    <PageContainerWithBackground>
      { isEmailResendShown ? (<ResendEmail email={email} onClose={onClose} />) : (
        <>
          <AuthLoginTitleWrapper>
            <AuthLoginTitle>
              <Header />
            </AuthLoginTitle>
          </AuthLoginTitleWrapper>
          <StyledForm
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputsContainer>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomStyledInput
                    label={t('common:form.label.loginEmail')}
                    {...field}
                    type="email"
                    placeholder={t('common:form.label.loginEmail')}
                    error={fieldState.error?.message && i18next.t(fieldState.error?.message)}
                  />
                )}
              />
              <PasswordInputWrapper>
                <ForgotPassword
                  to={APP_ROUTES.RESET_PASSWORD}
                >
                  {t('loginPage:links.forgotPassword')}
                </ForgotPassword>
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <CustomPasswordInput
                      label={t('common:form.label.password')}
                      placeholder={t('common:form.label.password')}
                      {...field}
                      error={
                      fieldState.error?.message
                        && i18next.t(fieldState.error?.message)
                      }
                    />
                  )}
                />
              </PasswordInputWrapper>
              <CustomStyledButton
                primary
                size="fullWidth"
                disabled={!isValid || !isDirty}
              >
                {t('common:form.button.passwordInput')}
              </CustomStyledButton>
              <CreateAccount
                to={APP_ROUTES.REGISTER}
              >
                {t('loginPage:links.registerMessage')}
              </CreateAccount>
            </InputsContainer>
          </StyledForm>
        </>
      )}

      <Modal onClose={toggleModal} open={openModal}>
        <CaptchaModal />
      </Modal>
    </PageContainerWithBackground>
  );
});

export default Login;
