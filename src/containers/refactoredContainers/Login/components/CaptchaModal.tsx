import React, { memo, VFC, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import dispatchPromise from 'src/utils/helpers';
import config from 'src/config';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { fetchCaptchaRequest } from '../actions/actions';

const CaptchaModal: VFC = memo(() => {
  const dispatch = useDispatch();
  const captchaRef = useRef<ReCAPTCHA>(null);
  const { t } = useTranslation(['common']);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = captchaRef.current?.getValue();
    captchaRef.current?.reset();
    dispatchPromise(dispatch, fetchCaptchaRequest({
      token,
    })).then(() => {
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReCAPTCHA
        ref={captchaRef}
        sitekey={config.googleCaptchaSiteKey}
      />
      <CustomStyledButton primary>{t('common:form.button.submit')}</CustomStyledButton>
    </form>
  );
});

export default CaptchaModal;
