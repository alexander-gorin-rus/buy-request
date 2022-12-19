import types from '../../../../core/actionTypes/index';
import {
  SellerProfilePayload, IFetchSellerProfilePayload,
  IFetchSellerProfileSuccessPayload, ISellerProfile,
  ISettingSellerSavePayload,
} from '../types';
import { IDispatchPayload, IMediaValidator } from '../../UserProfile/types';

export const saveSellerProfileRequest = (
  payload: { removeAvatar: boolean; media: IMediaValidator | undefined;
    setFileCallback: (file: IMediaValidator) => void; profile: ISellerProfile },
) => ({
  type: types.SAVE_SELLER_PROFILE_REQUEST,
  payload,
});

export const saveSellerProfileSuccess = (payload: IDispatchPayload) => ({
  type: types.SAVE_SELLER_PROFILE_SUCCESS,
  payload,
});

export const saveSellerProfileFailure = (payload: any) => ({
  type: types.SAVE_SELLER_PROFILE_FAILURE,
  payload,
});

export const saveSellerSettingsRequest = (
  payload: ISettingSellerSavePayload,
) => ({
  type: types.SAVE_SELLER_SETTINGS_REQUEST,
  payload,
});

export const saveSellerSettingsSuccess = (payload: SellerProfilePayload) => ({
  type: types.SAVE_SELLER_SETTINGS_SUCCESS,
  payload,
});

export const saveSellerSettingsFailure = (payload: any) => ({
  type: types.SAVE_SELLER_SETTINGS_FAILURE,
  payload,
});

export const clearSellerProfile = () => ({
  type: types.CLEAR_SELLER_PROFILE,
});

export const fetchSellerProfileRequest = (
  payload: IFetchSellerProfilePayload,
) => ({
  type: types.FETCH_SELLER_PROFILE_REQUEST,
  payload,
});

export const fetchSellerProfileSuccess = (
  payload: IFetchSellerProfileSuccessPayload,
) => ({
  type: types.FETCH_SELLER_PROFILE_SUCCESS,
  payload,
});

export const fetchSellerProfileFailure = (payload: any) => ({
  type: types.FETCH_SELLER_PROFILE_FAILURE,
  payload,
});
