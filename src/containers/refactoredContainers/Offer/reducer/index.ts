import types from '../../../../core/actionTypes';
import { CreateOfferActions, IOfferState } from '../types';

const initialState: IOfferState = {
  offer: null,
  requestData: null,
};

export default (
  state: IOfferState = initialState,
  action: CreateOfferActions,
): IOfferState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_OFFER_SUCCESS:
      return {
        ...state,
        offer: payload?.offer,
      };
    case types.CLEAR_OFFER:
      return {
        ...initialState,
      };
    case types.GET_OFFER_REQUEST_DATA_SUCCESS:
      return {
        ...state,
        requestData: payload.requestData,
      };
    default:
      return { ...state };
  }
};
