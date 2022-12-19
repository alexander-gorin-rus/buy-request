import { IRequestState, IGetRequestSuccessAction } from './types';
import types from '../../../core/actionTypes';

const initialState: IRequestState = {
  request: null,
};

export default (
  state: IRequestState = initialState,
  action: IGetRequestSuccessAction,
): IRequestState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_REQUEST_FOR_EDIT_SUCCESS:
      return {
        ...state,
        request: payload?.request || null,
      };
    case types.CLEAR_REQUEST_FOR_EDIT:
      return {
        ...initialState,
      };

    default:
      return {
        ...state,
      };
  }
};
