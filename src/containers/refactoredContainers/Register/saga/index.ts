import {
  all, takeLatest, put,
} from 'redux-saga/effects';
import types from '../../../../core/actionTypes';
import { fetchRegisterFailure, fetchRegisterSuccess } from '../actions/actions';
import { post } from '../../../../core/axios';
import { IFetchRegisterRequest } from '../types';
import { setIsComponentLoading } from '../../../../core/actions/actions';
import { getEncryptPassword } from '../../../../utils/helpers';
import { ErrorMessages } from '../../../../utils/constants';

function* registerUser(action: IFetchRegisterRequest): Generator<any> {
  const {
    payload, resolve, reject,
  } = action;
  try {
    if (!payload?.user) {
      throw new Error('Empty user');
    }
    yield put(setIsComponentLoading(true));
    const response: any = yield post({
      path: 'user/sign-up',
      data: {
        name: payload?.user.name,
        surname: payload?.user.surname,
        userName: payload?.user.userName,
        email: payload?.user.email,
        password: getEncryptPassword(payload.user.password),
        phone: payload?.user.phone,
        company: payload?.user.company,
        type: payload?.user.type,
      },
    }, 'application/json');
    if (!response.isSuccess) {
      throw new Error('Unauthorization');
    }
    yield put(
      fetchRegisterSuccess(),
    );
    if (resolve) {
      yield resolve();
    }
  } catch (error: any) {
    yield put(
      fetchRegisterFailure({
        error,
        message: {
          text: ErrorMessages.register[error] || 'errors:error',
        },
      }),
    );
    if (reject) {
      yield reject();
    }
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* registerUserSaga() {
  yield all([
    takeLatest(types.FETCH_REGISTER_USER_REQUEST, registerUser),
  ]);
}

export default registerUserSaga;
