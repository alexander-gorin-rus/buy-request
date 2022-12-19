import {
  IClientRequestsState, RecommendedRequestsAction,
} from '../types';
import types from '../../../../core/actionTypes';

const initialState: IClientRequestsState = {
  requests: null,
  pageInfo: null,
  tags: null,
};

export default (
  state: IClientRequestsState = initialState,
  action: RecommendedRequestsAction,
): IClientRequestsState => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_RECOMMENDED_SELLER_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: payload?.requests,
        pageInfo: payload?.pageInfo,
        tags: payload?.tags,
      };
    case types.CLEAR_RECOMMENDED_SELLER_REQUESTS:
      return {
        ...initialState,
      };

    default:
      return {
        ...state,
      };
  }
};
