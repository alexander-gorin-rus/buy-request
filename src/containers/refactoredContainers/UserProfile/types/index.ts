import { IDefaultAction, IUserRating } from '../../../../core/types';

export interface IConsumerProfileState {
  profile: IConsumerProfile | null,
  ratings: IUserRating | null,
  avatarUrl: string | null,
}

export interface IConsumerProfile {
  name: string;
  surname: string;
  userName: string;
  phone: string;
  avatar: string;
}

export interface IMediaValidator {
  file: File,
  width: number,
  height: number,
}

export interface IFetchConsumerProfilePayload {
  userId: string;
  file?: File | undefined;
}

export interface ISaveConsumerProfilePayload {
  profile: IConsumerProfile,
  media: IMediaValidator | undefined;
  removeAvatar: boolean;
  setFileCallback?: (callback: File | undefined) => void;
}

export interface IProfileFormProps {
  profileUser: IConsumerProfile,
  setShowChangePasswordModal: Function,
  showChangePasswordModal: boolean,
  setFile: (value: IMediaValidator | undefined) => void;
  setRemoveAvatar: (value: boolean) => void;
  media: IMediaValidator | undefined;
  toggleEditForm: () => void,
  isEdit: boolean,
  removeAvatar: boolean,
}
export interface IDispatchPayload {}

export interface ConsumerProfilePayload extends IDispatchPayload {
  profile: IConsumerProfile | null,
  ratings?: IUserRating | null,
  avatarUrl?: string | null,
}

export interface IFetchConsumerSuccessPayload extends ConsumerProfilePayload {
  ratings: IUserRating | null,
}

export interface IFetchConsumerProfileAction
  extends IDefaultAction<string, IFetchConsumerProfilePayload> {}

export interface IFetchConsumerProfileSuccessAction
  extends IDefaultAction<string, IFetchConsumerSuccessPayload> {}

export interface ISaveConsumerProfileAction
  extends IDefaultAction<string, ISaveConsumerProfilePayload> {}

export interface ISaveConsumerProfileSuccessAction
  extends IDefaultAction<string, ConsumerProfilePayload> {}

export type ConsumerProfileActions =
  IFetchConsumerProfileSuccessAction |
  ISaveConsumerProfileSuccessAction;
