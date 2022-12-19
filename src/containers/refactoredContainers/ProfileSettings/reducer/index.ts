import types from 'src/core/actionTypes';
import { IProfileSettingsState, ProfileSettingsActions } from '../types';

const initialState: IProfileSettingsState = {
  newAvatar: null,
  isRemovedAvatar: false,
  formValues: null,
};

export default (
  state: IProfileSettingsState = initialState,
  action: ProfileSettingsActions,
): IProfileSettingsState => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_NEW_AVATAR:
      return {
        ...state,
        newAvatar: payload?.newAvatar || null,
      };
    case types.SET_IS_REMOVED_AVATAR:
      return {
        ...state,
        isRemovedAvatar: payload?.isRemovedAvatar || false,
      };
    case types.SET_PROFILE_FORM_VALUES:
      return {
        ...state,
        formValues: payload?.formValues || null,
      };
    case types.CLEAR_AVATAR_SETTINGS:
      return {
        ...state,
        newAvatar: null,
        isRemovedAvatar: false,
      };
    case types.CLEAR_SETTINGS_STATE:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
