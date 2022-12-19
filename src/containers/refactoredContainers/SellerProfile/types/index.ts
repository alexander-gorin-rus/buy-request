import { IDefaultAction, ITag, IUserRating } from '../../../../core/types';
import { IDispatchPayload, IMediaValidator } from '../../UserProfile/types';

export interface ISellerProfileState {
  profile: ISellerProfile | null,
  tags: ITag[] | null,
  ratings: IUserRating | null,
  avatarUrl: string | null,
}

export interface ISellerProfile {
  name: string;
  surname: string;
  userName: string;
  phone: string;
  company: string;
  setting: ISettingSeller;
  avatar: string;
  reset?: () => void;
}

export interface IProfileFormProps {
  profileSeller: ISellerProfile,
  setShowChangePasswordModal: Function,
  showChangePasswordModal: boolean,
  setFile: (value: IMediaValidator | undefined) => void;
  setRemoveAvatar: (value: boolean) => void;
  media: IMediaValidator | undefined;
  toggleEditForm: () => void,
  isEdit: boolean,
  removeAvatar: boolean,
}

export interface ISettingSeller {
  tags: string[];
  emails: boolean;
}

export interface ISettingSellerSavePayload {
  updatedData: ISettingSeller;
  userId: string;
}

export interface IChangePasswordSeller {
  password: string;
}

export interface SellerProfilePayload extends IDispatchPayload {
  profile: ISellerProfile | null,
  removeAvatar?: boolean;
  ratings?: IUserRating | null,
  tags?: ITag[] | null,
  media?: IMediaValidator,
  setFileCallback?: (callback: File | undefined) => void;
}

export type IFetchSellerProfileSuccessPayload = {
  profile: ISellerProfile | null,
  ratings: IUserRating | null,
  tags: ITag[] | null,
  avatarUrl?: string | null,
};

export type SellerProfileTagsPayload = {
  tags: ITag[] | null,
};

export interface IFetchSellerProfilePayload {
  userId: string;
}

export interface ISettingsFormProps {
  settingData: ISettingSeller,
  tags: ITag[] | null,
}

export interface IFetchSellerProfileAction
  extends IDefaultAction<string, IFetchSellerProfilePayload> {}

export interface ISettingSellerSaveAction
  extends IDefaultAction<string, ISettingSellerSavePayload> {}

export type SellerProfileActions =
  IDefaultAction<string, SellerProfilePayload> |
  IDefaultAction<string, SellerProfilePayload>;
