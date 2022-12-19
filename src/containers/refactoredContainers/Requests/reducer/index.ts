import { IRequestsPageState, IGetRequestsSuccessAction } from '../types';
import types from '../../../../core/actionTypes';

const initialState = {
  requests: null,
};

export default (
  state: IRequestsPageState = initialState,
  action: IGetRequestsSuccessAction,
):IRequestsPageState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: payload?.requests || null,
      };
    case types.CLEAR_REQUESTS:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
