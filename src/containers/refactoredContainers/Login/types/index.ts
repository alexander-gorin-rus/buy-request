import { IDefaultAction, IDefaultErrorPayload, IDefaultPromiseAction } from 'src/core/types';

export interface ILogin {
  email: string;
  password: string;
  error?: null;
}

export interface IResendEmailProps {
  email: string;
  onClose: () => void;
}

export interface ILoginState {}

export type FetchLoginActionType = {
  payload: {
    clientAccountId: string;
  }
};

export type LoginPayload = {};

export type ErrorPayload = {
  error: string | string[],
};

export type RequestPayload = {
  [key: string]: any
};

export interface IResendEmailPayload {
  email: string;
}

export interface IVerifyCaptchaState {
  token: string | null | undefined;
}

export interface IVerifyCaptchaAction extends IDefaultPromiseAction<string, IVerifyCaptchaState> {}

export type VerifyCaptchaActions = IVerifyCaptchaAction;

export interface IFetchLoginRequest extends IDefaultPromiseAction<string, ILogin> {}
export interface IFetchLoginSuccess extends IDefaultAction<string, {}> {}
export interface IFetchLoginFailure extends IDefaultAction<string, IDefaultErrorPayload> {}

export interface IResendEmailRequest extends IDefaultPromiseAction<string, IResendEmailPayload> {}

export type LoginActions = IFetchLoginRequest | IFetchLoginSuccess;
