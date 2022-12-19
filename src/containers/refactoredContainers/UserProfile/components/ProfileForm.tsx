import React, {
  memo, VFC,
} from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { joiResolver } from '@hookform/resolvers/joi';
import {
  ButtonStyled, TextFieldStyled,
  RowButton, StyledFormControl,
  StyledForm,
} from '../styles';
import { IConsumerProfile, IProfileFormProps } from '../types';
import { consumerProfileSchema } from '../../../../utils/schema';
import i18next from '../../../../i18next';
import PhoneInput from '../../../../components/PhoneInput';
import { saveConsumerProfileRequest } from '../actions/actions';

const ProfileForm: VFC<IProfileFormProps> = memo((props) => {
  const {
    setShowChangePasswordModal, showChangePasswordModal, profileUser,
    toggleEditForm, isEdit, media, removeAvatar, setFile, setRemoveAvatar,
  } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation(['common', 'userProfile']);

  const {
    register, handleSubmit, getValues, reset, setValue, formState: { errors },
  } = useForm<IConsumerProfile>({
    defaultValues:
      { ...profileUser },
    mode: 'onBlur',
    resolver: joiResolver(consumerProfileSchema),
  });

  const togglePasswordModal = (): void => {
    setShowChangePasswordModal(!showChangePasswordModal);
  };

  const onSubmit = (profile: IConsumerProfile): void => {
    toggleEditForm();
    dispatch(saveConsumerProfileRequest({
      profile, media, removeAvatar, setFileCallback: setFile,
    }));
  };

  const onClose = (): void => {
    reset();
    setFile(undefined);
    setRemoveAvatar(false);
    toggleEditForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormControl>
        <TextFieldStyled
          {...register('name')}
          id="name"
          defaultValue="name"
          disabled={!isEdit}
          label={t('common:form.label.name')}
          error={!!errors.name}
          helperText={errors?.name?.message && i18next.t(errors.name.message)}
        />
        <TextFieldStyled
          {...register('surname')}
          id="surname"
          defaultValue="surname"
          variant="outlined"
          disabled={!isEdit}
          label={t('common:form.label.surname')}
          error={!!errors.surname}
          helperText={errors?.surname?.message && i18next.t(errors.surname.message)}
        />
        <PhoneInput
          disabled={!isEdit}
          id="phone"
          initialValue={getValues('phone')}
          name="phone"
          error={errors.phone}
          label="common:form.label.phoneNumber"
          onChange={(val: string) => {
            setValue('phone', val);
          }}
          onBlur={register('phone').onBlur}
        />
        <TextFieldStyled
          {...register('userName')}
          id="userName"
          defaultValue="userName"
          variant="outlined"
          disabled={!isEdit}
          label={t('common:form.label.username')}
          error={!!errors.userName}
          helperText={errors?.userName?.message && i18next.t(errors.userName.message)}
        />
        <RowButton>
          <ButtonStyled variant="outlined" onClick={isEdit ? onClose : togglePasswordModal}>

            {isEdit ? t('userProfile:buttons.cancel') : t('userProfile:buttons.changePassword')}
          </ButtonStyled>
          <ButtonStyled variant="outlined" onClick={isEdit ? handleSubmit(onSubmit) : toggleEditForm}>
            {isEdit ? t('userProfile:buttons.save') : t('userProfile:buttons.editProfile')}
          </ButtonStyled>
        </RowButton>
      </StyledFormControl>
    </StyledForm>
  );
});
export default ProfileForm;
