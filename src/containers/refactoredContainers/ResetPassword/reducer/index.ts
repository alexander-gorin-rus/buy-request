import types from 'src/core/actionTypes';
import { IPasswordResetState, ResetPasswordActions } from '../types';

const initialState: IPasswordResetState = {
  email: '',
  isShowPasswordForm: false,
  codeError: null,
  isCodeLoading: false,
  isShowResendButton: false,
};

export default (
  state: IPasswordResetState = initialState,
  action: ResetPasswordActions,
) : IPasswordResetState => {
  const { type, payload } = action;

  switch (type) {
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        email: payload?.email || '',
        isShowPasswordForm: true,
      };
    case types.RESEND_PASSWORD_CODE_REQUEST:
      return {
        ...state,
        codeError: null,
      };
    case types.SET_IS_SHOW_RESEND_BUTTON:
      return {
        ...state,
        isShowResendButton: !state.isShowResendButton,
      };
    case types.RESET_PASSWORD_CONFIRM_FAILURE:
      return {
        ...state,
        codeError: payload?.codeError || null,
      };
    case types.SET_IS_CODE_LOADING:
      return {
        ...state,
        isCodeLoading: !state.isCodeLoading,
      };
    case types.RESET_PASSWORD_CONFIRM_SUCCESS:
    case types.CLEAR_RESET_PASSWORD_STATE:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
