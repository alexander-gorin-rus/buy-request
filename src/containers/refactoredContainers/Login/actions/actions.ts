import types from 'src/core/actionTypes/index';
import { IDefaultErrorPayload } from 'src/core/types';
import {
  IFetchLoginRequest,
  IFetchLoginSuccess,
  ILogin,
  IVerifyCaptchaAction,
  IVerifyCaptchaState,
  IFetchLoginFailure,
  IResendEmailPayload,
  IResendEmailRequest,
} from '../types';

export const fetchLoginRequest = (
  payload: ILogin,
): IFetchLoginRequest => ({
  type: types.LOGIN_USER_REQUEST,
  payload,
});

export const fetchLoginSuccess = (): IFetchLoginSuccess => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: {},
});

export const fetchLoginFailure = (payload: IDefaultErrorPayload): IFetchLoginFailure => ({
  type: types.LOGIN_USER_FAILURE,
  payload,
});

export const fetchCaptchaRequest = (
  payload: IVerifyCaptchaState,
): IVerifyCaptchaAction => ({
  type: types.VERIFY_CAPTCHA_REQUEST,
  payload,
});

export const resendVerificationEmail = (
  payload: IResendEmailPayload,
): IResendEmailRequest => ({
  type: types.RESEND_VERIFICATION_EMAIL_REQUEST,
  payload,
});

export const resendVerificationEmailSuccess = () => ({
  type: types.RESEND_VERIFICATION_EMAIL_SUCCESS,
});

export const resendVerificationEmailFailure = (payload: IDefaultErrorPayload) => ({
  type: types.RESEND_VERIFICATION_EMAIL_FAILURE,
  payload,

});
