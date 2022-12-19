import types from '../../../core/actionTypes';
import { IFetchPasswordChangeSuccess, IPasswordChange } from '../types';

export const changePasswordRequest = (
  payload: IPasswordChange,
) => ({
  type: types.CHANGE_PASSWORD_REQUEST,
  payload,
});
export const fetchPasswordSuccess = () : IFetchPasswordChangeSuccess => ({
  type: types.CHANGE_PASSWORD_REQUEST_SUCCESS,
  payload: {},
});

export const fetchChangePasswordFailure = (payload: any) : IFetchPasswordChangeSuccess => ({
  type: types.CHANGE_PASSWORD_FAILURE,
  payload,
});
