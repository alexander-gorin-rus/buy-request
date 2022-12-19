import types from 'src/core/actionTypes';
import { IDefaultErrorPayload, IDefaultResponsePayload } from 'src/core/types';
import {
  IPasswordResetEmail, IResetPasswordFailurePayload,
  IResetPasswordPayload,
} from '../types';

export const resetPasswordConfirmRequest = (
  payload: IResetPasswordPayload,
) => ({
  type: types.RESET_PASSWORD_CONFIRM_REQUEST,
  payload,
});

export const resetPasswordConfirmSuccess = (
  payload: IDefaultResponsePayload,
) => ({
  type: types.RESET_PASSWORD_CONFIRM_SUCCESS,
  payload,
});

export const resetPasswordConfirmFailure = (
  payload: IResetPasswordFailurePayload,
) => ({
  type: types.RESET_PASSWORD_CONFIRM_FAILURE,
  payload,
});

export const resetPasswordRequest = (
  payload: IPasswordResetEmail,
) => ({
  type: types.RESET_PASSWORD_REQUEST,
  payload,
});

export const resetPasswordFailure = (
  payload: IDefaultErrorPayload,
) => ({
  type: types.RESET_PASSWORD_FAILURE,
  payload,
});

export const resendPasswordCode = (
  payload: IPasswordResetEmail,
) => ({
  type: types.RESEND_PASSWORD_CODE_REQUEST,
  payload,
});

export const resendPasswordCodeFailure = (
  payload: IDefaultErrorPayload,
) => ({
  type: types.RESEND_PASSWORD_CODE_FAILURE,
  payload,
});

export const resetPasswordSuccess = (
  payload: IPasswordResetEmail,
) => ({
  type: types.RESET_PASSWORD_SUCCESS,
  payload,
});

export const setIsShowResendButtonForm = () => ({
  type: types.SET_IS_SHOW_RESEND_BUTTON,
});

export const clearResetPasswordState = () => ({
  type: types.CLEAR_RESET_PASSWORD_STATE,
});

export const setIsCodeLoading = () => ({
  type: types.SET_IS_CODE_LOADING,
});
