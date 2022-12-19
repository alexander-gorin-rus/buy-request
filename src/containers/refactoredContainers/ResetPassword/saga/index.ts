import {
  all, put, takeLatest,
} from 'redux-saga/effects';
import { setIsComponentLoading } from 'src/core/actions/actions';
import { getEncryptPassword } from 'src/utils/helpers';
import { post } from 'src/core/axios';
import types from 'src/core/actionTypes';
import { MessageTypes, CodeErrorStatus } from 'src/utils/constants';
import i18next from 'src/i18next';
import { toast } from 'react-toastify';
import { IResponse } from 'src/core/types';
import { CodeError, IFetchResetPasswordAction, IPasswordResetConfirmAction } from '../types';
import {
  resendPasswordCodeFailure, resetPasswordConfirmFailure, resetPasswordConfirmSuccess,
  resetPasswordFailure, resetPasswordSuccess, setIsCodeLoading, setIsShowResendButtonForm,
} from '../actions';

function* resetPassword(action: IFetchResetPasswordAction) {
  const { payload } = action;

  try {
    yield put(setIsComponentLoading(true));

    const response: IResponse = yield post(
      { path: 'user/reset-password', data: payload },
      'application/json',
    );

    if (!response.isSuccess) {
      throw new Error('Reset password confirm email failed');
    }

    yield put(resetPasswordSuccess(payload));
  } catch (error: any) {
    if (error === CodeErrorStatus.CODE_ALREADY_GENERATED) {
      yield put(resetPasswordSuccess(payload));
    } else {
      yield put(resetPasswordFailure({
        error,
        message: {
          text: 'errors:error',
        },
      }));
    }
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* resetPasswordConfirm(action: IPasswordResetConfirmAction) {
  const { payload } = action;

  const data = {
    email: payload.email,
    newPassword: getEncryptPassword(payload.password),
    code: payload.code,
  };

  try {
    yield put(setIsComponentLoading(true));

    const response: IResponse = yield post(
      { path: 'user/reset-password-confirm', data },
      'application/json',
    );

    if (!response.isSuccess) {
      throw new Error('Reset password failed');
    }

    yield put(
      resetPasswordConfirmSuccess({
        message: {
          type: MessageTypes.SUCCESS,
          text: 'resetPassword:passwordChanged',
        },
      }),
    );

    payload.redirectToLogin();
  } catch (error: any) {
    if (Object.values(CodeErrorStatus).includes(error)) {
      if (error === CodeErrorStatus.CODE_TIMEOUT) yield put(setIsShowResendButtonForm());

      yield put(resetPasswordConfirmFailure({ codeError: error as CodeError }));
    } else {
      yield put(resetPasswordConfirmFailure({
        error,
        message: {
          text: 'errors:error',
        },
      }));
    }
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* resendPasswordCode(action: IFetchResetPasswordAction) {
  const { payload } = action;

  try {
    yield put(setIsCodeLoading());

    const response: IResponse = yield post(
      { path: 'user/reset-password', data: payload },
      'application/json',
    );

    if (!response.isSuccess) {
      throw new Error('Resent code failed');
    }

    yield put(setIsShowResendButtonForm());

    toast.success(`${i18next.t('resetPassword:resendCodeSuccess')} ${payload.email}`);
  } catch (error: any) {
    yield put(resendPasswordCodeFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsCodeLoading());
  }
}

function* resetPasswordSaga() {
  yield all([takeLatest(types.RESET_PASSWORD_REQUEST, resetPassword)]);
  yield all([takeLatest(types.RESET_PASSWORD_CONFIRM_REQUEST, resetPasswordConfirm)]);
  yield all([takeLatest(types.RESEND_PASSWORD_CODE_REQUEST, resendPasswordCode)]);
}

export default resetPasswordSaga;
