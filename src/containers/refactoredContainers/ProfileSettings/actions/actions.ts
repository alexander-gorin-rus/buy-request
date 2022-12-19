import types from 'src/core/actionTypes/index';
import {
  ISetIsRemovedAvatarPayload,
  ISetNewAvatarPayload,
  ISetProfileValuesPayload,
  IUpdateProfilePayload,
} from '../types';

export const updateProfileAction = (
  payload: IUpdateProfilePayload,
) => ({
  type: types.UPDATE_PROFILE_REQUEST,
  payload,
});

export const updateProfileFailure = (payload: any) => ({
  type: types.UPDATE_PROFILE_FAILURE,
  payload,
});

export const setNewAvatar = (
  payload: ISetNewAvatarPayload,
) => ({
  type: types.SET_NEW_AVATAR,
  payload,
});

export const setIsRemovedAvatar = (
  payload: ISetIsRemovedAvatarPayload,
) => ({
  type: types.SET_IS_REMOVED_AVATAR,
  payload,
});

export const setProfileFormValues = (
  payload: ISetProfileValuesPayload,
) => ({
  type: types.SET_PROFILE_FORM_VALUES,
  payload,
});
