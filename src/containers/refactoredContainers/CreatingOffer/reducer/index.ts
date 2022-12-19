import { ICreatingOfferState, IGetCatalogRequestSuccess } from '../types';
import types from '../../../../core/actionTypes';

const initialState: ICreatingOfferState = {
  catalog: null,
  requestData: null,
};

export default (
  state: ICreatingOfferState = initialState,
  action: IGetCatalogRequestSuccess,
): ICreatingOfferState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_OFFER_CATALOG_SUCCESS:
      return {
        ...state,
        catalog: payload.catalog,
      };
    case types.CLEAR_CREATING_OFFER:
      return {
        ...initialState,
      };
    case types.GET_OFFER_REQUEST_DATA_SUCCESS:
      return {
        ...state,
        requestData: payload.requestData,
      };
    default:
      return {
        ...state,
      };
  }
};
