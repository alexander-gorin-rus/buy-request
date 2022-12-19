import types from '../../../../core/actionTypes';
import {
  IGetCatalogSuccessPayload, IGetCatalogSuccessAction,
  IGetCatalogAction, IGetCatalogPayload,
} from '../types';

export const getCatalog = (
  payload: IGetCatalogPayload,
): IGetCatalogAction => ({
  type: types.GET_CATALOG_REQUEST,
  payload,
});

export const getCatalogSuccess = (payload: IGetCatalogSuccessPayload):
IGetCatalogSuccessAction => ({
  type: types.GET_CATALOG_SUCCESS,
  payload,
});

export const getCatalogFailure = (payload: any):
IGetCatalogSuccessAction => ({
  type: types.GET_CATALOG_FAILURE,
  payload,
});

export const clearCatalog = () => ({
  type: types.CLEAR_CATALOG,
});
