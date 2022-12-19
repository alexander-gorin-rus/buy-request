import React, {
  memo, useEffect, VFC, SyntheticEvent, useState, useMemo, ChangeEvent,
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import CustomStyledInput from 'src/components/CustomStyledInput';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { sellerProfileFormSchema, profileFormSchema } from 'src/utils/schema';
import { IProfileData } from 'src/containers/refactoredContainers/Profile/types';
import { BREAKPOINTS, TypeUser } from 'src/utils/constants';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { APP_ROUTES } from 'src/core/appRoutes';
import { IMediaValidator } from 'src/core/types';
import { getComponentLoadingSelector } from 'src/core/selectors';
import types from 'src/core/actionTypes';
import useWindowSize from 'src/utils/hooks/useWindowSize';
import { Avatar } from 'src/components/Avatar';
import { getSellerProfileSelector } from '../../Profile/selectors';
import {
  setIsRemovedAvatar, setNewAvatar, setProfileFormValues, updateProfileAction,
} from '../actions/actions';
import { avatarValidationMessage } from '../helpers';
import { getProfileSettingsSelector } from '../selectors';
import { IProfileFormValues } from '../types';
import {
  StyledForm, StyledFormWrapper,
  StyledButtonWrapper, StyledInputWrapper, ProfileSettingsContent,
  AvatarValidateMessage, ProfileAvatarContainer,
} from '../styles';

const ProfileForm: VFC<IProfileData> = memo(({
  profile: {
    type, name, surname, avatar,
  },
}) => {
  const { t } = useTranslation(['common', 'profile']);
  const sellerProfile = useSelector(getSellerProfileSelector);
  const { newAvatar, isRemovedAvatar, formValues } = useSelector(getProfileSettingsSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [screenWidth = BREAKPOINTS.mobileTablet] = useWindowSize();
  const isLoading = useSelector(getComponentLoadingSelector);
  const [avatarErrorMessage, setAvatarErrorMessage] = useState<string | undefined>();

  const schema = type === TypeUser.seller ? sellerProfileFormSchema : profileFormSchema;
  const defaultValues: IProfileFormValues = { name, surname, avatar };

  if (type === TypeUser.seller) defaultValues.company = sellerProfile?.company || '';

  const {
    control, handleSubmit, reset, watch, getValues, setValue, formState: { isValid, isDirty },
  } = useForm<IProfileFormValues>({
    defaultValues,
    resolver: joiResolver(schema),
    mode: 'onTouched',
  });

  const redirectToProfile = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(APP_ROUTES.PROFILE);

    dispatch({
      type: types.CLEAR_SETTINGS_STATE,
    });
  };

  const handleOnBlur = (
    event: ChangeEvent<HTMLInputElement>,
    onBlur: () => void,
  ) => {
    onBlur();
    setValue(
      event.target.name as keyof IProfileFormValues,
      event.target.value.replace(/\s+/g, ' '),
    );
  };

  const setRemoveAvatar = (data: boolean) => {
    dispatch(setIsRemovedAvatar({ isRemovedAvatar: data }));
  };

  const setFile = (file: IMediaValidator | null) => {
    dispatch(setNewAvatar({ newAvatar: file }));
  };

  const handleOnClickAvatar = () => {
    if (screenWidth <= BREAKPOINTS.mobile) {
      navigate(APP_ROUTES.PROFILE_AVATAR_SETTINGS);
    }
  };

  const onSubmit = (data: IProfileFormValues) => {
    if (!avatarErrorMessage) {
      dispatch(updateProfileAction({
        data,
        file: newAvatar,
        removeAvatar: isRemovedAvatar,
        userType: type,
        handleResetForm: () => reset(data),
      }));
    }
  };

  const isSubmitButtonDisabled = useMemo(() => {
    if (!isValid || isLoading || !!avatarErrorMessage) return true;
    if (!isDirty && !(!!newAvatar || isRemovedAvatar)) return true;

    return false;
  }, [isValid, isLoading, avatarErrorMessage, isDirty, newAvatar, isRemovedAvatar]);

  useEffect(() => {
    reset(defaultValues);
  }, [sellerProfile]);

  useEffect(() => {
    if (formValues) reset(formValues);
  }, []);

  useEffect(() => {
    if (newAvatar) {
      setAvatarErrorMessage(avatarValidationMessage(newAvatar));
    } else if (isRemovedAvatar) {
      setAvatarErrorMessage(undefined);
    }
  }, [newAvatar, isRemovedAvatar]);

  useEffect(() => {
    const subscription = watch(() => dispatch(setProfileFormValues({ formValues: getValues() })));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <ProfileSettingsContent>
      <ProfileAvatarContainer>
        <Avatar
          isEdit={screenWidth > BREAKPOINTS.mobile && !isLoading}
          avatar={avatar}
          isRemovedAvatar={isRemovedAvatar}
          setRemoveAvatar={setRemoveAvatar}
          file={newAvatar}
          setFile={setFile}
          onClick={handleOnClickAvatar}
        />
        {avatarErrorMessage && <AvatarValidateMessage>{avatarErrorMessage}</AvatarValidateMessage>}
      </ProfileAvatarContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormWrapper>
          <Controller
            name="surname"
            control={control}
            render={({ field: { ref, onBlur, ...field }, fieldState }) => (
              <StyledInputWrapper>
                <CustomStyledInput
                  label={t('common:form.label.surname')}
                  {...field}
                  disabled={isLoading}
                  onBlur={(e) => handleOnBlur(e, onBlur)}
                  placeholder={t('common:form.label.surname')}
                  error={
                    fieldState.error?.message
                    && i18next.t(fieldState.error?.message)
                  }
                />
              </StyledInputWrapper>
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field: { ref, onBlur, ...field }, fieldState }) => (
              <StyledInputWrapper>
                <CustomStyledInput
                  label={t('common:form.label.name')}
                  {...field}
                  disabled={isLoading}
                  onBlur={(e) => handleOnBlur(e, onBlur)}
                  placeholder={t('common:form.label.name')}
                  error={
                    fieldState.error?.message
                    && i18next.t(fieldState.error?.message)
                  }
                />
              </StyledInputWrapper>
            )}
          />
          {type === TypeUser.seller && (
            <Controller
              name="company"
              control={control}
              render={({ field: { ref, onBlur, ...field }, fieldState }) => (
                <StyledInputWrapper>
                  <CustomStyledInput
                    label={t('common:form.label.company')}
                    {...field}
                    disabled={isLoading}
                    onBlur={(e) => handleOnBlur(e, onBlur)}
                    placeholder={t('common:form.label.company')}
                    error={
                      fieldState.error?.message
                      && i18next.t(fieldState.error?.message)
                    }
                  />
                </StyledInputWrapper>
              )}
            />
          )}
        </StyledFormWrapper>
        <StyledButtonWrapper>
          <CustomStyledButton
            size="large"
            onClick={redirectToProfile}
          >
            {t('profile:cancel')}
          </CustomStyledButton>
          <CustomStyledButton
            primary
            size="large"
            isLoading={isLoading}
            disabled={isSubmitButtonDisabled}
          >
            {t('profile:save')}
          </CustomStyledButton>
        </StyledButtonWrapper>
      </StyledForm>
    </ProfileSettingsContent>
  );
});

export default ProfileForm;
