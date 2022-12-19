import {
  ICreatingRequest, SuccessPayload,
} from '../types';
import types from '../../../../core/actionTypes/index';

export const createQuoteRequest = (
  payload: ICreatingRequest,
  resolve?: () => {},
  reject?: () => {},
) => ({
  type: types.CREATE_QUOTE_REQUEST,
  payload,
  resolve,
  reject,
});

export const createQuoteSuccess = (
  payload: any,
) => ({
  type: types.CREATE_QUOTE_SUCCESS,
  payload,
});

export const createQuoteFailure = (
  payload: any,
) => ({
  type: types.CREATE_QUOTE_FAILURE,
  payload,
});

export const fetchTagsAndProductsRequest = () => ({
  type: types.FETCH_TAGS_AND_PRODUCTS_REQUEST,
});

export const fetchTagsAndProductsSuccess = (
  payload: SuccessPayload,
) => ({
  type: types.FETCH_TAGS_AND_PRODUCTS_SUCCESS,
  payload,
});

export const fetchTagsAndProductsFailure = (
  payload: any,
) => ({
  type: types.FETCH_TAGS_AND_PRODUCTS_FAILURE,
  payload,
});

export const clearTagsAndProducts = () => ({
  type: types.CLEAR_TAGS_AND_PRODUCTS,
});
