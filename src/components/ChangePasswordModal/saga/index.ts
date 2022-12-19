import { all, put, takeLatest } from 'redux-saga/effects';
import types from '../../../core/actionTypes';
import { post } from '../../../core/axios';
import { getEncryptPassword } from '../../../utils/helpers';
import { ErrorMessages, MessageTypes, passwordChangeNotifications } from '../../../utils/constants';
import { IFetchPasswordChangeAction, IPasswordChange } from '../types';
import { fetchChangePasswordFailure } from '../actions/actions';
import { createQuoteSuccess } from '../../../containers/refactoredContainers/CreatingRequest/actions/actions';

function* changePassword(action: IFetchPasswordChangeAction): Generator {
  const { payload } = action;
  const data: IPasswordChange = {
    oldPassword: getEncryptPassword(payload.oldPassword),
    newPassword: getEncryptPassword(payload.newPassword),
  };

  try {
    const path = 'user/change-password';
    const response: any = yield post(
      {
        path,
        data,
      },
      'application/json',
    );
    if (!response.isSuccess) {
      throw new Error(passwordChangeNotifications.ERROR);
    }
    if (
      payload.setShowChangePasswordModal
      && payload.reset
    ) {
      payload.setShowChangePasswordModal(false);
      payload.reset();
    }
    yield put(
      createQuoteSuccess({
        message: {
          type: MessageTypes.SUCCESS,
          text: passwordChangeNotifications.SUCCESS,
        },
      }),
    );
  } catch (error: any) {
    yield put(
      fetchChangePasswordFailure({
        error,
        message: {
          text: ErrorMessages.incorrectPassword.INCORRECT_PASSWORD || 'errors:error',
        },
      }),
    );
  }
}

function* changePasswordSaga() {
  yield all([takeLatest(types.CHANGE_PASSWORD_REQUEST, changePassword)]);
}

export default changePasswordSaga;
