import { IDefaultAction } from 'src/core/types';
import { UserErrorStatus } from 'src/utils/constants';

export interface IVerifyEmailState {
  isSuccess: boolean;
  error: UserErrorStatus | null;
}

export interface IVerifyEmailPayload {
  id: string;
}

export interface IVerifyEmailAction extends IDefaultAction<string, IVerifyEmailPayload> {}

export type VerifyEmailActions = IDefaultAction<string, IVerifyEmailState>;
