import types from '../../../../core/actionTypes';
import { GetOffersActions, IOffersState } from '../types';

const initialState: IOffersState = {
  offers: null,
  pageInfo: null,
};

export default (
  state: IOffersState = initialState,
  action: GetOffersActions,
): IOffersState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_OFFERS_SUCCESS:
      return {
        ...state,
        offers: payload?.offers,
        pageInfo: payload?.pageInfo,
      };
    case types.CLEAR_OFFERS:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
