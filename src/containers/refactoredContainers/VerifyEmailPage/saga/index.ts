import {
  all, takeLatest, put,
} from 'redux-saga/effects';

import { setIsComponentLoading } from 'src/core/actions/actions';
import types from 'src/core/actionTypes';
import { post } from 'src/core/axios';

import { IVerifyEmailAction } from '../types';

function* verifyEmail(action: IVerifyEmailAction): Generator<any> {
  const { payload } = action;

  try {
    yield put(setIsComponentLoading(true));

    const response: any = yield post({
      path: 'user/verify-email',
      data: payload,
    }, 'application/json');

    if (!response.isSuccess) {
      throw new Error('Unauthorization');
    }

    yield put({ type: types.VERIFY_EMAIL_SUCCESS });
  } catch (error: any) {
    yield put({
      type: types.VERIFY_EMAIL_FAILURE,
      payload: {
        error,
      },
    });
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* verifyEmailSaga() {
  yield all([
    takeLatest(types.VERIFY_EMAIL_REQUEST, verifyEmail),
  ]);
}

export default verifyEmailSaga;
