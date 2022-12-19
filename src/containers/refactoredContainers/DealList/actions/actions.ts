import types from 'src/core/actionTypes';
import { IDefaultErrorPayload } from 'src/core/types';
import {
  IDealListSuccessPayload,
  IGetDealList,
  IGetDealListSuccess,
  IGetDealListFailure,
  IGetDealListPayload,
} from '../types';

export const getDealList = (payload: IGetDealListPayload): IGetDealList => ({
  type: types.GET_DEAL_LIST_REQUEST,
  payload,
});

export const getDealListSuccess = (
  payload: IDealListSuccessPayload,
): IGetDealListSuccess => ({
  type: types.GET_DEAL_LIST_SUCCESS,
  payload,
});

export const getDealListFailure = (
  payload: IDefaultErrorPayload,
): IGetDealListFailure => ({
  type: types.GET_DEAL_LIST_FAILURE,
  payload,
});

export const clearDealList = () => ({
  type: types.CLEAR_DEAL_LIST,
});
