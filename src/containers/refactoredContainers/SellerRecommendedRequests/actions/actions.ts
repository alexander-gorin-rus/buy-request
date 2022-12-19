import { IRequestPayload, ISuccessPayload } from '../types';
import types from '../../../../core/actionTypes/index';

export const fetchSellerRequests = (
  payload: IRequestPayload,
) => ({
  type: types.FETCH_RECOMMENDED_SELLER_REQUESTS_REQUEST,
  payload,
});

export const fetchSellerRequestsSuccess = (payload: ISuccessPayload) => ({
  type: types.FETCH_RECOMMENDED_SELLER_REQUESTS_SUCCESS,
  payload,
});

export const fetchSellerRequestsFailure = (payload: any) => ({
  type: types.FETCH_RECOMMENDED_SELLER_REQUESTS_FAILURE,
  payload,
});

export const clearSellerRequests = () => ({
  type: types.CLEAR_RECOMMENDED_SELLER_REQUESTS,
});
