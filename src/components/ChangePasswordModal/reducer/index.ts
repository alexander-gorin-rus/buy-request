import types from '../../../core/actionTypes';
import { ChangePasswordActions, IPasswordChange } from '../types';

const initialState: IPasswordChange = {
  oldPassword: '',
  newPassword: '',
};

export default (
  state: IPasswordChange = initialState,
  action: ChangePasswordActions,
) : IPasswordChange => {
  const { type } = action;
  switch (type) {
    case types.CHANGE_PASSWORD_REQUEST_SUCCESS:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
