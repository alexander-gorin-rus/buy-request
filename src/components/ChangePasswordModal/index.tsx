import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import React, {
  memo,
  VFC,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi/dist/joi';
import Joi from 'joi';
import {
  ButtonModalStyled,
  StyledForm,
  StyledFormControl,
  TextFieldStyled,
} from './style';
import {
  joiConfirmPassword,
  joiPassword,
} from '../../utils/schema';
import i18next from '../../i18next';
import { IComponentProps, IPasswordChange } from './types';

const ChangePasswordModal: VFC<IComponentProps> = memo(
  ({
    show,
    toggle,
    onSubmit,
  }: IComponentProps) => {
    const { t } = useTranslation(['common']);

    const confirmChangePasswordSchema = Joi.object({
      oldPassword: joiPassword(),
      newPassword: joiPassword(),
      confirmPassword: joiConfirmPassword('newPassword'),
    });

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<Omit<IPasswordChange, 'callback' | 'setShowChangePasswordModal' | 'reset'>>({
      mode: 'onBlur',
      resolver: joiResolver(confirmChangePasswordSchema),
    });
    const onSave = (passwordData: IPasswordChange) => {
      onSubmit(passwordData, reset);
    };

    const onClose = (): void => {
      reset();
      toggle();
    };

    return (
      <Dialog open={show} maxWidth="sm" fullWidth>
        <DialogTitle>{t('common:form.label.changePassword')}</DialogTitle>
        <StyledForm onSubmit={handleSubmit(onSave)}>
          <StyledFormControl>
            <TextFieldStyled
              {...register('oldPassword')}
              id="oldPassword"
              label={t('common:form.password.oldPassword')}
              variant="outlined"
              name="oldPassword"
              type="password"
              error={!!errors.oldPassword}
              helperText={errors?.oldPassword?.message && i18next.t(errors.oldPassword.message)}
            />
            <TextFieldStyled
              {...register('newPassword')}
              id="newPassword"
              label={t('common:form.password.newPassword')}
              type="password"
              variant="outlined"
              error={!!errors.newPassword}
              helperText={errors?.newPassword?.message && i18next.t(errors.newPassword.message)}
            />
            <TextFieldStyled
              {...register('confirmPassword')}
              id="confirmPassword"
              label={t('common:form.password.confirmPassword')}
              type="password"
              variant="outlined"
              name="confirmPassword"
              error={!!errors.confirmPassword}
              helperText={
                errors?.confirmPassword?.message && i18next.t(errors.confirmPassword.message)
              }
            />
            <DialogActions>
              <ButtonModalStyled onClick={onClose}>
                {t('common:form.button.cancel')}
              </ButtonModalStyled>
              <ButtonModalStyled type="button" onClick={handleSubmit(onSave)}>
                {t('common:form.button.submit')}
              </ButtonModalStyled>
            </DialogActions>
          </StyledFormControl>
        </StyledForm>
      </Dialog>
    );
  },
);

export default ChangePasswordModal;
