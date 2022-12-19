import React, { memo, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useTranslation } from 'react-i18next';
import {
  ButtonStyled, RowButton, StyledForm, StyledFormControl, TextFieldStyled,
} from '../styles';
import { IProfileFormProps, ISellerProfile } from '../types';
import { saveSellerProfileRequest } from '../actions/actions';
import { sellerProfileSchema } from '../../../../utils/schema';
import i18next from '../../../../i18next';
import PhoneInput from '../../../../components/PhoneInput';

const ProfileForm: VFC<IProfileFormProps> = memo((props: IProfileFormProps) => {
  const {
    setShowChangePasswordModal, showChangePasswordModal, setRemoveAvatar,
    toggleEditForm, isEdit, media, removeAvatar, setFile, profileSeller: {
      name, surname, phone, userName, company, avatar,
    },
  } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation(['common', 'sellerProfile']);

  const {
    register, handleSubmit, getValues, reset, formState: { errors }, setValue,
  } = useForm<Omit<ISellerProfile, 'reset'>>({
    defaultValues:
      {
        name,
        surname,
        phone,
        userName,
        company,
        avatar,
      },
    mode: 'onBlur',
    resolver: joiResolver(sellerProfileSchema),
  });

  const onSubmit = (profile: ISellerProfile): void => {
    toggleEditForm();
    dispatch(saveSellerProfileRequest({
      profile, media, removeAvatar, setFileCallback: setFile,
    }));
  };

  const togglePasswordModal = (): void => {
    setShowChangePasswordModal(!showChangePasswordModal);
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
          label={t('common:form.label.name')}
          disabled={!isEdit}
          error={!!errors.name}
          helperText={errors?.name?.message && i18next.t(errors.name.message)}
        />
        <TextFieldStyled
          {...register('surname')}
          id="surname"
          defaultValue="surname"
          label={t('common:form.label.surname')}
          variant="outlined"
          disabled={!isEdit}
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
          label={t('common:form.label.username')}
          variant="outlined"
          disabled={!isEdit}
          error={!!errors.userName}
          helperText={errors?.userName?.message && i18next.t(errors.userName.message)}
        />
        <TextFieldStyled
          {...register('company')}
          id="company"
          defaultValue="company"
          label={t('common:form.label.company')}
          variant="outlined"
          disabled={!isEdit}
          error={!!errors.company}
          helperText={errors?.company?.message && i18next.t(errors.company.message)}
        />

        <RowButton>
          <ButtonStyled variant="outlined" onClick={isEdit ? onClose : togglePasswordModal}>
            {isEdit ? t('sellerProfile:buttons.cancel') : t('sellerProfile:buttons.changePassword')}
          </ButtonStyled>
          <ButtonStyled variant="outlined" onClick={isEdit ? handleSubmit(onSubmit) : toggleEditForm}>
            {isEdit ? t('sellerProfile:buttons.save') : t('sellerProfile:buttons.editProfile')}
          </ButtonStyled>
        </RowButton>
      </StyledFormControl>
    </StyledForm>
  );
});
export default ProfileForm;
