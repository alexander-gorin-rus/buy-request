import types from '../../../../core/actionTypes';
import { IDefaultErrorPayload } from '../../../../core/types';
import {
  IGetRequestAction,
  IGetRequestPayload,
  IGetRequestSuccessAction,
  IGetRequestSuccessPayload,
  IDeleteRequestPayload,
  IDeleteRequestAction,
  IDeleteRequestFailureAction,
  IGetRequestFailureAction,
  IChangeRequestActivePayload,
  IChangeRequestActiveAction,
  IChangeRequestActiveFailureAction,
} from '../types';

export const getRequest = (
  payload: IGetRequestPayload,
): IGetRequestAction => ({
  type: types.GET_REQUEST_REQUEST,
  payload,
});

export const getRequestSuccess = (
  payload: IGetRequestSuccessPayload,
): IGetRequestSuccessAction => ({
  type: types.GET_REQUEST_SUCCESS,
  payload,
});

export const getRequestFailure = (
  payload: IDefaultErrorPayload,
): IGetRequestFailureAction => ({
  type: types.GET_REQUEST_FAILURE,
  payload,
});

export const deleteRequest = (payload: IDeleteRequestPayload): IDeleteRequestAction => ({
  type: types.DELETE_REQUEST_REQUEST,
  payload,
});

export const deleteRequestSuccess = () => ({
  type: types.DELETE_REQUEST_SUCCESS,
});

export const deleteRequestFailure = (
  payload: IDefaultErrorPayload,
): IDeleteRequestFailureAction => ({
  type: types.DELETE_REQUEST_FAILURE,
  payload,
});

export const changeRequestActive = (
  payload: IChangeRequestActivePayload,
): IChangeRequestActiveAction => ({
  type: types.CHANGE_REQUEST_ACTIVE_REQUEST,
  payload,
});

export const changeRequestActiveFailure = (
  payload: IDefaultErrorPayload,
): IChangeRequestActiveFailureAction => ({
  type: types.CHANGE_REQUEST_ACTIVE_FAILURE,
  payload,
});

export const changeRequestActiveSuccess = () => ({
  type: types.CHANGE_REQUEST_ACTIVE_SUCCESS,
});

export const clearRequest = () => ({
  type: types.CLEAR_REQUEST,
});
