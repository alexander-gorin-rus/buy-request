import types from '../../../../core/actionTypes';
import { ICreatingProductAction, ICreatingProductPayload } from '../types';

export const setCreatingProduct = (
  payload: ICreatingProductPayload,
): ICreatingProductAction => ({
  type: types.CREATE_PRODUCT_REQUEST,
  payload,
});

export const setCreatingProductFailure = (
  payload: any,
): ICreatingProductAction => ({
  type: types.CREATE_PRODUCT_FAILURE,
  payload,
});
