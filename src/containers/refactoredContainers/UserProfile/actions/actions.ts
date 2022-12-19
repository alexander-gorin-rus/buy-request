import types from '../../../../core/actionTypes/index';
import {
  IFetchConsumerProfilePayload,
  IFetchConsumerSuccessPayload,
  IDispatchPayload,
  IConsumerProfile,
  IMediaValidator,
} from '../types';

export const clearConsumerProfile = () => ({
  type: types.CLEAR_CONSUMER_PROFILE,
});

export const fetchConsumerProfileRequest = (
  payload: IFetchConsumerProfilePayload,
) => ({
  type: types.FETCH_CONSUMER_PROFILE_REQUEST,
  payload,
});

export const fetchConsumerProfileSuccess = (
  payload: IFetchConsumerSuccessPayload,
) => ({
  type: types.FETCH_CONSUMER_PROFILE_SUCCESS,
  payload,
});

export const fetchConsumerProfileFailure = (payload: any) => ({
  type: types.FETCH_CONSUMER_PROFILE_FAILURE,
  payload,
});

export const saveConsumerProfileRequest = (
  payload: { removeAvatar: boolean; media: IMediaValidator | undefined;
    setFileCallback: (file: IMediaValidator) => void; profile: IConsumerProfile },
) => ({
  type: types.SAVE_CONSUMER_PROFILE_REQUEST,
  payload,
});

export const saveConsumerProfileSuccess = (payload: IDispatchPayload) => ({
  type: types.SAVE_CONSUMER_PROFILE_SUCCESS,
  payload,
});

export const saveConsumerProfileFailure = (payload: any) => ({
  type: types.SAVE_CONSUMER_PROFILE_FAILURE,
  payload,
});
