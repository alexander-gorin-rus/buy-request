import types from '../../../../core/actionTypes';
import { IDefaultErrorPayload } from '../../../../core/types';

import {
  IGetRequestPayload,
  IGetRequestAction,
  IGetRequestSuccessPayload,
  IGetRequestSuccessAction,
  IGetRequestFailureAction,
  IUpdateRequestPayload,
  IUpdateRequestAction,
  IUpdateRequestFailureAction,
} from '../types';

export const getRequest = (
  payload: IGetRequestPayload,
): IGetRequestAction => ({
  type: types.GET_REQUEST_FOR_EDIT_REQUEST,
  payload,
});

export const getRequestSuccess = (
  payload: IGetRequestSuccessPayload,
): IGetRequestSuccessAction => ({
  type: types.GET_REQUEST_FOR_EDIT_SUCCESS,
  payload,
});

export const getRequestFailure = (
  payload: IDefaultErrorPayload,
): IGetRequestFailureAction => ({
  type: types.GET_REQUEST_FOR_EDIT_FAILURE,
  payload,
});

export const updateRequest = (payload: IUpdateRequestPayload): IUpdateRequestAction => ({
  type: types.UPDATE_REQUEST_REQUEST,
  payload,
});

export const updateRequestSuccess = () => ({
  type: types.UPDATE_REQUEST_SUCCESS,
});

export const updateRequestFailure = (
  payload: IDefaultErrorPayload,
): IUpdateRequestFailureAction => ({
  type: types.UPDATE_REQUEST_FAILURE,
  payload,
});

export const clearRequest = () => ({
  type: types.CLEAR_REQUEST_FOR_EDIT,
});
