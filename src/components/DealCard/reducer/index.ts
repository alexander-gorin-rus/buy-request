import types from '../../../core/actionTypes';
import { GetDealActions, IDealState } from '../types';

const initialState: IDealState = {
  error: null,
  isLoading: false,
  deal: null,
};

export default (
  state: IDealState = initialState,
  action: GetDealActions,
): IDealState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DEAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DEAL_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        deal: payload?.deal || null,
      };
    case types.GET_DEAL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload?.error || null,
      };
    case types.CLEAR_DEAL_STATE:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
