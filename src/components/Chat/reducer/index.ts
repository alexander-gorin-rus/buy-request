import { ICompanionUserState } from '../types';
import types from '../../../core/actionTypes';

const initialState: ICompanionUserState = {
  user: null,
};

export default (
  state: ICompanionUserState = initialState,
  action: any,
): ICompanionUserState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_COMPANION_USER_SUCCESS: {
      return {
        ...state,
        user: payload.user,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
