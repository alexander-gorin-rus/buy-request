import { IDefaultAction } from 'src/core/types';
import { CodeErrorStatus } from 'src/utils/constants';

export interface IPasswordResetEmail {
  email: string;
}

export interface IPasswordResetState {
  email: string;
  codeError: string | null;
  isCodeLoading: boolean
  isShowPasswordForm: boolean;
  isShowResendButton: boolean;
}

export interface IResetPasswordPayload extends IResetPassword {
  redirectToLogin: () => void;
}

export interface ISetCodeErrorMessagePayload {
  codeErrorMessage: string | null;
}

export interface IResetPassword {
  email: string;
  password: string;
  confirmPassword: string;
  code: string;
}

export type CodeError = keyof typeof CodeErrorStatus;

export interface IResetPasswordFailurePayload {
  codeError?: CodeError | null,
  error?: Error,
  message?: {
    text: string;
  }
}

export interface IFetchResetPasswordAction
  extends IDefaultAction<string, IPasswordResetEmail> {}

export interface IPasswordResetConfirmAction
  extends IDefaultAction<string, IResetPasswordPayload> {}

export interface ResetPasswordActions
  extends IDefaultAction<string, Partial<IPasswordResetState>> {}
