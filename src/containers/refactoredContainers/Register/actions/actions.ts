import types from 'src/core/actionTypes/index';
import {
  IFetchRegisterRequest,
  IFetchRegisterSuccess,
  RegisterPayload,
} from '../types';

export const fetchRegisterRequest = (
  payload: RegisterPayload,
  resolve?: () => void,
  reject?: () => void,
): IFetchRegisterRequest => ({
  type: types.FETCH_REGISTER_USER_REQUEST,
  payload,
  resolve,
  reject,
});

export const fetchRegisterSuccess = (): IFetchRegisterSuccess => ({
  type: types.FETCH_REGISTER_USER_SUCCESS,
  payload: {},
});

export const fetchRegisterFailure = (payload: any): IFetchRegisterSuccess => ({
  type: types.FETCH_REGISTER_USER_FAILURE,
  payload,
});
