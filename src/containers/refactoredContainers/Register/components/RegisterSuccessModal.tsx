import React, { memo, VFC } from 'react';
import { ReactComponent as IconCheck } from 'src/images/register-check.svg';
import { useTranslation } from 'react-i18next';
import { IconCheckWrapper } from 'src/commonStyles/LoginRegisterBlock';
import {
  CompleteRegistrationNotification,
  CompleteRegistrationText,
  ModalWrapper,
  SendEmailNotification,
} from '../styles';

const RegisterSuccessModal: VFC = memo(() => {
  const { t } = useTranslation('common');
  return (
    <ModalWrapper>
      <IconCheckWrapper>
        <IconCheck />
      </IconCheckWrapper>
      <SendEmailNotification>
        {t('sentEmail')}
      </SendEmailNotification>
      <CompleteRegistrationText>
        <CompleteRegistrationNotification>
          {t('completeRegistration')}
        </CompleteRegistrationNotification>
      </CompleteRegistrationText>
    </ModalWrapper>
  );
});

export default RegisterSuccessModal;
