import { IDefaultAction } from '../../../core/types';

export interface IPasswordChange {
  oldPassword: string;
  newPassword: string;
  reset?: () => void;
  confirmPassword?: string;
  callback?: (callback: boolean) => any;
  setShowChangePasswordModal?: Function;
}

export interface IComponentProps {
  show: boolean;
  toggle: Function;
  onSubmit: (passwordData: IPasswordChange, reset: () => void) => void;
}

export interface IFetchPasswordChangeAction
  extends IDefaultAction<string, IPasswordChange> {}

export interface IFetchPasswordChangeSuccess
  extends IDefaultAction<string, {}> {}

export type ChangePasswordActions = IFetchPasswordChangeAction | IFetchPasswordChangeSuccess;
