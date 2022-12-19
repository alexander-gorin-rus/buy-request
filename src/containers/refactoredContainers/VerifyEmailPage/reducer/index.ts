import { IVerifyEmailState, VerifyEmailActions } from '../types';
import types from '../../../../core/actionTypes';

const initialState: IVerifyEmailState = {
  isSuccess: false,
  error: null,
};

export default (
  state: IVerifyEmailState = initialState,
  action: VerifyEmailActions,
): IVerifyEmailState => {
  const { type, payload } = action;
  switch (type) {
    case types.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        isSuccess: true,
      };
    case types.VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        error: payload?.error,
      };
    case types.CLEAR_VERIFY_EMAIL:
      return initialState;

    default:
      return state;
  }
};
