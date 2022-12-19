import types from 'src/core/actionTypes';
import { ILoginState, LoginActions } from '../types';

const initialState: ILoginState = {};

export default (state: ILoginState = initialState, action: LoginActions): ILoginState => {
  const { type } = action;
  switch (type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
