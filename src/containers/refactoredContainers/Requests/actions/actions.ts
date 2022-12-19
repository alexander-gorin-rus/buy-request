import types from '../../../../core/actionTypes';
import { IGetListPayload } from '../../../../core/types';
import {
  IGetRequestsAction,
  IGetRequestsSuccessAction,
  IGetRequestsSuccessPayload,
} from '../types';

export const getRequests = (
  payload: IGetListPayload,
): IGetRequestsAction => ({
  type: types.GET_REQUESTS_REQUEST,
  payload,
});

export const getRequestsSuccess = (
  payload: IGetRequestsSuccessPayload,
): IGetRequestsSuccessAction => ({
  type: types.GET_REQUESTS_SUCCESS,
  payload,
});

export const getRequestsFailure = (
  payload: any,
): IGetRequestsSuccessAction => ({
  type: types.GET_REQUESTS_FAILURE,
  payload,
});

export const clearRequests = () => ({
  type: types.CLEAR_REQUESTS,
});
