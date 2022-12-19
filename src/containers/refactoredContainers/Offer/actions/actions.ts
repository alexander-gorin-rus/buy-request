import types from '../../../../core/actionTypes/index';
import { IGetRequestDataAction, IGetRequestDataPayload } from '../../CreatingOffer/types';
import {
  CreateDealPayload,
  IGetOfferPayload,
  IOfferPayload,
  IRejectOfferByConsumerAction,
  IRejectOfferByConsumerPayload,
  IRejectOfferBySellerAction,
  IRejectOfferBySellerPayload,
  IRequestDataRequestSuccessPayload,

} from '../types';

export const getOfferRequest = (payload: IGetOfferPayload) => ({
  type: types.GET_OFFER_REQUEST,
  payload,
});

export const getOfferSuccess = (payload: IOfferPayload) => ({
  type: types.GET_OFFER_SUCCESS,
  payload,
});

export const getOfferFailure = (payload: any) => ({
  type: types.GET_OFFER_FAILURE,
  payload,
});

export const createDealRequest = (payload: CreateDealPayload) => ({
  type: types.CREATE_DEAL_REQUEST,
  payload,
});

export const createDealFailure = (payload: any) => ({
  type: types.CREATE_DEAL_FAILURE,
  payload,
});

export const clearOffer = () => ({
  type: types.CLEAR_OFFER,
});

export const cancelOfferByConsumer = (
  payload: IRejectOfferByConsumerPayload,
): IRejectOfferByConsumerAction => ({
  type: types.CANCEL_OFFER_BY_CONSUMER_REQUEST,
  payload,
});

export const cancelOfferByConsumerSuccess = () => ({
  type: types.CANCEL_OFFER_BY_CONSUMER_SUCCESS,
});

export const cancelOfferBySeller = (
  payload: IRejectOfferBySellerPayload,
): IRejectOfferBySellerAction => ({
  type: types.CANCEL_OFFER_BY_SELLER_REQUEST,
  payload,
});

export const cancelOfferBySellerSuccess = () => ({
  type: types.CANCEL_OFFER_BY_SELLER_SUCCESS,
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
