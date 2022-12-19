import React, { VFC, useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { IconCheckWrapper } from 'src/commonStyles/LoginRegisterBlock';
import { ReactComponent as Warning } from 'src/images/warning.svg';
import { useDispatch } from 'react-redux';
import dispatchPromise from 'src/utils/helpers';
import {
  ResendEmailContainer, StyledResendTitle, StyledResendText, StyledResendButton,
} from '../styles';
import { IResendEmailProps } from '../types';
import { resendVerificationEmail } from '../actions/actions';

const ResendEmail: VFC<IResendEmailProps> = ({ email, onClose }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('loginPage');
  const resendEmail = useCallback(() => {
    dispatchPromise(dispatch, resendVerificationEmail({ email })).then(() => {
      onClose();
    });
  }, [email]);
  return (
    <ResendEmailContainer>
      <IconCheckWrapper>
        <Warning />
      </IconCheckWrapper>
      <StyledResendTitle>{t('resend.title')}</StyledResendTitle>
      <StyledResendText>
        <Trans i18nKey="resend.text" t={t} values={{ email }} />
      </StyledResendText>
      <StyledResendButton onClick={resendEmail} primary>{t('resend.button.resend')}</StyledResendButton>
    </ResendEmailContainer>
  );
};

export default ResendEmail;
