import React, {
  memo,
  VFC,
  useState,
} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import CustomPasswordInput from 'src/components/CustomPasswordInput';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import CustomStyledInput from 'src/components/CustomStyledInput';
import dispatchPromise from 'src/utils/helpers';
import { registerSchema } from 'src/utils/schema';
import { APP_ROUTES } from 'src/core/appRoutes';
import {
  InputsContainer,
  AuthLoginTitle,
  AuthLoginTitleWrapper,
} from 'src/commonStyles/LoginRegisterBlock';
import { ReactComponent as Header } from 'src/images/auth-inputs-header.svg';
import { TypeUser } from 'src/utils/constants';
import PageContainerWithBackground from 'src/components/PageContainerWithBackground';
import {
  StyledForm,
  RegisterInputsWrapper,
  RegisterItemsWrapper,
  AccountLinkWrapper,
  AccountLink,
} from './styles';
import { IUser } from './types';
import { fetchRegisterRequest } from './actions/actions';
import { USER_TYPE_OPTIONS } from './constants';
import UserTypeSelect from './components/UserTypeSelect';
import RegisterSuccessModal from './components/RegisterSuccessModal';

const Register: VFC = memo(() => {
  const dispatch = useDispatch();
  const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean>(false);
  const { t } = useTranslation(['common', 'registerPage']);
  const {
    control,
    watch,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IUser>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: joiResolver(registerSchema),
    defaultValues: {
      name: '',
      surname: '',
      userName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      type: '',
    },
  });

  const isCompanyFieldShown = watch('type') === TypeUser.seller;

  const onSubmit = (user: IUser) => {
    const data = {
      ...user,
    };
    dispatchPromise(dispatch, fetchRegisterRequest({ user: data })).then(() => {
      setIsRegisterSuccess(true);
    });
  };

  if (isRegisterSuccess) {
    return (
      <PageContainerWithBackground>
        <RegisterSuccessModal />
      </PageContainerWithBackground>
    );
  }

  return (
    <PageContainerWithBackground>
      <AuthLoginTitleWrapper>
        <AuthLoginTitle>
          <Header />
        </AuthLoginTitle>
      </AuthLoginTitleWrapper>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputsContainer>
          <RegisterInputsWrapper>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <CustomStyledInput
                  label={t('common:form.label.name')}
                  {...field}
                  placeholder={t('common:form.label.name')}
                  type="text"
                  error={
                        fieldState.error?.message
                          && i18next.t(fieldState.error?.message)
                      }
                />
              )}
            />
            <Controller
              name="surname"
              control={control}
              render={({ field, fieldState }) => (
                <CustomStyledInput
                  label={t('common:form.label.surname')}
                  {...field}
                  type="text"
                  placeholder={t('common:form.label.surname')}
                  error={
                        fieldState.error?.message
                          && i18next.t(fieldState.error?.message)
                        }
                />
              )}
            />
          </RegisterInputsWrapper>
          <RegisterInputsWrapper>
            <RegisterItemsWrapper>
              <Controller
                name="userName"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomStyledInput
                    label={t('common:form.label.username')}
                    {...field}
                    type="text"
                    placeholder={t('common:form.label.nicknamePlaceholder')}
                    error={
                          fieldState.error?.message
                            && i18next.t(fieldState.error?.message)
                          }
                  />
                )}
              />
            </RegisterItemsWrapper>
            <RegisterItemsWrapper>
              <Controller
                name="type"
                control={control}
                render={({ field, fieldState }) => (
                  <UserTypeSelect
                    value={USER_TYPE_OPTIONS.find((item) => item.value === field.value)}
                    title={t('common:form.label.userTypeLabel')}
                    handleSelect={(selected) => field.onChange(selected?.value)}
                    itemsList={USER_TYPE_OPTIONS}
                    optionPlaceholder={t('common:form.label.userType')}
                    error={
                          fieldState.error?.message
                            && i18next.t(fieldState.error?.message)
                          }
                  />
                )}
              />
            </RegisterItemsWrapper>
          </RegisterInputsWrapper>
          {isCompanyFieldShown && (
          <Controller
            name="company"
            control={control}
            render={({ field, fieldState }) => (
              <CustomStyledInput
                label={t('common:form.label.company')}
                {...field}
                type="text"
                placeholder={t('common:form.label.company')}
                error={
                        fieldState.error?.message
                          && i18next.t(fieldState.error?.message)
                        }
              />
            )}
          />
          )}
          <RegisterInputsWrapper>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <CustomStyledInput
                  label={t('common:form.label.loginEmail')}
                  {...field}
                  type="email"
                  placeholder={t('common:form.label.loginEmail')}
                  error={
                        fieldState.error?.message
                          && i18next.t(fieldState.error?.message)
                        }
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <CustomStyledInput
                  label={t('common:form.label.phoneNumber')}
                  {...field}
                  type="phone"
                  placeholder={t('common:form.label.phonePlaceholder')}
                  error={
                        fieldState.error?.message
                          && i18next.t(fieldState.error?.message)
                        }
                />
              )}
            />
          </RegisterInputsWrapper>
          <RegisterInputsWrapper>
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <CustomPasswordInput
                  {...field}
                  label={t('common:form.label.password')}
                  placeholder={t('common:form.label.password')}
                  error={
                        fieldState.error?.message
                          && i18next.t(fieldState.error?.message)
                        }
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState }) => (
                <CustomPasswordInput
                  {...field}
                  label={t('common:form.label.confirmPassword')}
                  placeholder={t('common:form.label.password')}
                  error={
                        fieldState.error?.message
                          && i18next.t(fieldState.error?.message)
                        }
                />
              )}
            />
          </RegisterInputsWrapper>
          <CustomStyledButton
            primary
            size="fullWidth"
            disabled={!isValid || !isDirty}
          >
            {t('common:header.links.register')}
          </CustomStyledButton>
        </InputsContainer>
      </StyledForm>
      <AccountLinkWrapper>
        <AccountLink
          to={APP_ROUTES.LOGIN}
        >
          {t('registerPage:links.loginMessage')}
        </AccountLink>
      </AccountLinkWrapper>
    </PageContainerWithBackground>
  );
});

export default Register;
