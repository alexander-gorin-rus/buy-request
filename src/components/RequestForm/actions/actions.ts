import {
  IFetchTagsAndProductsSuccessPayload,
} from '../types';
import types from '../../../core/actionTypes/index';

export const fetchTagsAndProductsRequest = () => ({
  type: types.FETCH_TAGS_AND_PRODUCTS_REQUEST,
});

export const fetchTagsAndProductsSuccess = (
  payload: IFetchTagsAndProductsSuccessPayload,
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
