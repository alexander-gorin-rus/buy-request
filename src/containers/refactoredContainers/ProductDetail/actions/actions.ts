import types from '../../../../core/actionTypes';
import {
  IGetProductPayload, IGetProductAction, IGetProductSuccessAction,
  IGetProductSuccessPayload,
  IRemoveProductPayload, IRemoveProductAction, IUpdateProductPayload,
  IUpdateProductAction,
} from '../types';

export const getProduct = (
  payload: IGetProductPayload,
): IGetProductAction => ({
  type: types.GET_PRODUCT_REQUEST,
  payload,
});

export const getProductSuccess = (
  payload: IGetProductSuccessPayload,
): IGetProductSuccessAction => ({
  type: types.GET_PRODUCT_SUCCESS,
  payload,
});

export const getProductFailure = (
  payload: any,
): IGetProductSuccessAction => ({
  type: types.GET_PRODUCT_FAILURE,
  payload,
});

export const removeProduct = (
  payload: IRemoveProductPayload,
): IRemoveProductAction => ({
  type: types.REMOVE_PRODUCT_REQUEST,
  payload,
});

export const removeProductFailure = (
  payload: any,
): IRemoveProductAction => ({
  type: types.REMOVE_PRODUCT_FAILURE,
  payload,
});

export const updateProduct = (
  payload: IUpdateProductPayload,

): IUpdateProductAction => ({
  type: types.UPDATE_PRODUCT_REQUEST,
  payload,
});

export const updateProductFailure = (
  payload: any,

): IUpdateProductAction => ({
  type: types.UPDATE_PRODUCT_FAILURE,
  payload,
});

export const updateProductInfo = (
  payload: any,

): IUpdateProductAction => ({
  type: types.UPDATE_PRODUCT_INFO,
  payload,
});

export const clearProduct = () => ({
  type: types.CLEAR_PRODUCT,
});
