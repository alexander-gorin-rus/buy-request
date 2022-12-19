import types from '../../../../core/actionTypes/index';
import {
  IGetOffersPayload, IOffersPayload,
} from '../types';

export const getOffersRequest = (payload: IGetOffersPayload) => ({
  type: types.GET_OFFERS_REQUEST,
  payload,
});

export const getOffersSuccess = (payload: IOffersPayload) => ({
  type: types.GET_OFFERS_SUCCESS,
  payload,
});

export const getOffersFailure = (payload: any) => ({
  type: types.GET_OFFERS_FAILURE,
  payload,
});

export const clearOffers = () => ({
  type: types.CLEAR_OFFERS,
});
