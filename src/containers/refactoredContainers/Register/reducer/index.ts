import types from '../../../../core/actionTypes';
import { IRegisterState, RegisterActions } from '../types';

const initialState: IRegisterState = {};

export default (state: IRegisterState = initialState, action: RegisterActions): IRegisterState => {
  const { type } = action;
  switch (type) {
    case types.FETCH_REGISTER_USER_SUCCESS:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
