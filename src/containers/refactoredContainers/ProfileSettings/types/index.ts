import { TypeUser } from 'src/utils/constants';
import { IDefaultAction, IMediaValidator } from 'src/core/types';

export interface IProfileFormValues {
  surname: string;
  name: string;
  company?: string;
  avatar: string;
}

export interface IUpdateProfilePayload {
  data: IProfileFormValues,
  userType: TypeUser,
  file: IMediaValidator | null,
  removeAvatar: boolean;
  handleResetForm: () => void;
}

export interface ISetNewAvatarPayload {
  newAvatar: IMediaValidator | null,
}

export interface ISetIsRemovedAvatarPayload {
  isRemovedAvatar: boolean,
}

export interface ISetProfileValuesPayload {
  formValues: IProfileFormValues | null,
}

export interface IProfileSettingsState {
  formValues: IProfileFormValues | null,
  newAvatar: IMediaValidator | null,
  isRemovedAvatar: boolean,
}

export interface IProfileSettingsPayload {
  formValues?: IProfileFormValues | null,
  newAvatar?: IMediaValidator | null,
  isRemovedAvatar?: boolean,
}

export interface IUpdateProfileAction
  extends IDefaultAction<string, IUpdateProfilePayload> {}

export type ProfileSettingsActions =
  IDefaultAction<string, IProfileSettingsPayload>;
