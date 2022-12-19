import types from 'src/core/actionTypes/index';
import { IDefaultErrorPayload } from '../../../../core/types';
import {
  IFetchRatingsPayload, IFetchUserPayload, ISaveTagsPayload,
  IFetchRatingsSuccessPayload, IFetchUserSuccessPayload, ISetSellerSuccessPayload,
} from '../types';

export const getUserProfileAction = (
  payload: IFetchUserPayload,
) => ({
  type: types.FETCH_USER_PROFILE_REQUEST,
  payload,
});

export const getRatingsAction = (
  payload: IFetchRatingsPayload,
) => ({
  type: types.FETCH_RATINGS_REQUEST,
  payload,
});

export const saveTagsAction = (
  payload: ISaveTagsPayload,
) => ({
  type: types.SAVE_TAGS_REQUEST,
  payload,
});

export const getUserProfileSuccess = (
  payload: IFetchUserSuccessPayload,
) => ({
  type: types.FETCH_USER_PROFILE_SUCCESS,
  payload,
});

export const getRatingsSuccess = (
  payload: IFetchRatingsSuccessPayload,
) => ({
  type: types.FETCH_RATINGS_SUCCESS,
  payload,
});

export const getSellerTagsSuccess = (
  payload: ISetSellerSuccessPayload,
) => ({
  type: types.FETCH_SELLER_PROFILE_SUCCESS,
  payload,
});

export const getUserProfileFailure = (
  payload: IDefaultErrorPayload,
) => ({
  type: types.FETCH_USER_PROFILE_FAILURE,
  payload,
});

export const getRatingsFailure = (
  payload: IDefaultErrorPayload,
) => ({
  type: types.FETCH_RATINGS_FAILURE,
  payload,
});

export const getSellerTagsFailure = (
  payload: IDefaultErrorPayload,
) => ({
  type: types.FETCH_SELLER_PROFILE_FAILURE,
  payload,
});

export const saveTagsFailure = (
  payload: IDefaultErrorPayload,
) => ({
  type: types.SAVE_TAGS_FAILURE,
  payload,
});
