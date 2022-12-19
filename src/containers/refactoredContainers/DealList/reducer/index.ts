import types from '../../../../core/actionTypes';
import { IDealsState, IGetDealListSuccess } from '../types';

const initialState: IDealsState = {
  request: null,
};

export default (
  state: IDealsState = initialState,
  action: IGetDealListSuccess,
): IDealsState => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DEAL_LIST_SUCCESS:
      return {
        ...state,
        request: payload?.request || null,
      };
    case types.CLEAR_DEAL_LIST:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
