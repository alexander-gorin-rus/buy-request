import {
  IGetRequests,
  IGetRequestsSuccess,
  IGetClientRequests,
  IGetRequestsFailure,
  Payload,
  ErrorPayload,
} from '../types';
import types from '../../../../core/actionTypes/index';

export const getClientRequests = (
  payload: IGetClientRequests,
): IGetRequests => ({
  type: types.GET_CURRENT_CLIENT_REQUESTS_REQUEST,
  payload,
});

export const getClientRequestsSuccess = (payload: Payload): IGetRequestsSuccess => ({
  type: types.GET_CURRENT_CLIENT_REQUESTS_SUCCESS,
  payload,
});

export const getClientRequestsFailure = (
  payload: ErrorPayload,
): IGetRequestsFailure => ({
  type: types.GET_CURRENT_CLIENT_REQUESTS_FAILURE,
  payload,
});
