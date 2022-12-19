import { IClientRequestsState, CreateRequestActions } from '../types';
import types from '../../../../core/actionTypes';

const initialState: IClientRequestsState = {
  requests: null,
  pending: false,
};

export default (
  state: IClientRequestsState = initialState,
  action: CreateRequestActions,
): IClientRequestsState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CURRENT_CLIENT_REQUESTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case types.GET_CURRENT_CLIENT_REQUESTS_SUCCESS:
      return {
        ...state,
        pending: false,
        requests: payload?.requests ? payload.requests : null,
      };
    default:
      return {
        ...state,
      };
  }
};
