import {
  CompanionUserPayload,
  IGetCompanionUserSuccess,
  IGetCompanionUserFailure,
  IGetCompanionUserRequestParams,
  IChatMediaPayload,
  ICreatingChatMediaAction,
} from '../types';
import types from '../../../core/actionTypes';

export const getCompanionUser = (payload: IGetCompanionUserRequestParams): any => ({
  type: types.GET_COMPANION_USER_REQUEST,
  payload,
});

export const getCompanionUserSuccess = (
  payload: CompanionUserPayload,
) : IGetCompanionUserSuccess => ({
  type: types.GET_COMPANION_USER_SUCCESS,
  payload,
});

export const getCompanionUserFailure = (
  payload: CompanionUserPayload,
): IGetCompanionUserFailure => ({
  type: types.GET_COMPANION_USER_FAILURE,
  payload,
});

export const setCreatingChatMedia = (
  payload: IChatMediaPayload,
) : ICreatingChatMediaAction => ({
  type: types.CREATE_CHAT_MEDIA_REQUEST,
  payload,
});

export const setCreatingChatMediaSuccess = () => ({
  type: types.CREATE_CHAT_MEDIA_SUCCESS,
});

export const setCreatingChatMediaFailure = () => ({
  type: types.CREATE_CHAT_MEDIA_FAILURE,
});
