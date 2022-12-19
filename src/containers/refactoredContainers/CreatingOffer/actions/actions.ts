import types from '../../../../core/actionTypes';
import {
  ICreateOfferAction,
  ICreateOfferPayload,
  ICatalogRequestSuccessPayload,
  IGetCatalogRequestSuccess,
  IGetRequestDataPayload,
  IGetRequestDataAction,
  IRequestDataRequestSuccessPayload,
} from '../types';

export const getProductCatalog = () => ({
  type: types.GET_OFFER_CATALOG_REQUEST,
});

export const getCatalogSuccess = (
  payload: ICatalogRequestSuccessPayload,
): IGetCatalogRequestSuccess => ({
  type: types.GET_OFFER_CATALOG_SUCCESS,
  payload,
});

export const getCatalogFailure = (
  payload: any,
): IGetCatalogRequestSuccess => ({
  type: types.GET_OFFER_CATALOG_FAILURE,
  payload,
});

export const createOffer = (
  payload: ICreateOfferPayload,
): ICreateOfferAction => ({
  type: types.CREATE_OFFER_REQUEST,
  payload,
});

export const createOfferFailure = (
  payload: any,
): ICreateOfferAction => ({
  type: types.CREATE_OFFER_FAILURE,
  payload,
});

export const clearCreatingOffer = () => ({
  type: types.CLEAR_CREATING_OFFER,
});

export const getRequestData = (
  payload: IGetRequestDataPayload,
): IGetRequestDataAction => ({
  type: types.GET_OFFER_REQUEST_DATA_REQUEST,
  payload,
});

export const getRequestDataSuccess = (payload: IRequestDataRequestSuccessPayload) => ({
  type: types.GET_OFFER_REQUEST_DATA_SUCCESS,
  payload,
});

export const getRequestDataFailure = (payload: any) => ({
  type: types.GET_OFFER_REQUEST_DATA_FAILURE,
  payload,
});
