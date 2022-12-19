import {
  ICurrentUserPayload,
  IDefaultAction,
} from '../types';
import types from '../actionTypes';

export const setUserLogout = () => ({
  type: 'LOGOUT_USER_REQUEST',
});

export const setCurrentUser = (
  payload: ICurrentUserPayload,
) => ({
  type: 'SET_CURRENT_USER',
  payload,
});

export const getCurrentUser = () => ({
  type: types.GET_CURRENT_USER_REQUEST,
});

export const setIsLoading = (payload: boolean): IDefaultAction<string, boolean> => ({
  type: types.SET_IS_LOADING,
  payload,
});

export const setIsComponentLoading = (payload: boolean): IDefaultAction<string, boolean> => ({
  type: types.SET_IS_COMPONENT_LOADING,
  payload,
});
