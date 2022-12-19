import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import types from 'src/core/actionTypes';
import { post } from 'src/core/axios';
import { getEncryptPassword } from 'src/utils/helpers';
import { query } from 'src/apollo';
import { setCurrentUser, setIsComponentLoading } from 'src/core/actions/actions';
import { ErrorMessages, LoginErrors } from 'src/utils/constants';
import * as queries from '../queries';
import { IFetchLoginRequest, IResendEmailRequest, IVerifyCaptchaAction } from '../types';
import {
  fetchLoginFailure,
  fetchLoginSuccess,
  resendVerificationEmailFailure,
  resendVerificationEmailSuccess,
} from '../actions/actions';

function* loginUser(action: IFetchLoginRequest) {
  const {
    payload,
    resolve,
    reject,
  } = action;
  try {
    yield put(setIsComponentLoading(true));
    yield post({
      path: 'user/sign-in',
      data: {
        email: payload?.email,
        password: getEncryptPassword(payload.password),
      },
    }, 'application/json');

    const { data: { user } } = yield call(query, {
      query: queries.getCurrentUser,
      variables: {},
    });
    yield put(setCurrentUser({
      currentUser: user,
    }));
    yield put(
      fetchLoginSuccess(),
    );
  } catch (error: any) {
    if (error === LoginErrors.EMAIL_IS_NOT_VERIFIED) {
      if (resolve) resolve(error);
    } else {
      yield put(fetchLoginFailure({
        error,
        message: {
          text: ErrorMessages.login[error] || 'errors:error',
        },
      }));
    }

    if (reject) {
      reject();
    }
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* verifyCaptcha(action: IVerifyCaptchaAction): Generator<any> {
  const {
    payload: {
      token,
    },
    resolve, reject,
  } = action;
  try {
    const response: any = yield post({
      path: 'user/captcha',
      data: {
        token,
      },
    }, 'application/json');
    if (!response) {
      throw new Error('Error in CAPTCHA verifying');
    }
    yield put({ type: types.VERIFY_CAPTCHA_SUCCESS });
    if (resolve) {
      yield resolve();
    }
  } catch (e) {
    yield put(
      {
        type: types.VERIFY_CAPTCHA_FAILURE,
        payload: {
          error: 'errors:error',
        },
      },
    );
    if (reject) {
      yield reject();
    }
  }
}

function* resendVerificationEmail(action: IResendEmailRequest) {
  const { payload: { email }, resolve, reject } = action;
  try {
    yield post({
      path: 'user/resend-email-auth',
      data: {
        email,
      },
    }, 'application/json');
    yield put(resendVerificationEmailSuccess());
    if (resolve) {
      resolve();
    }
  } catch (error) {
    yield put(resendVerificationEmailFailure({
      error: error as Error,
      message: {
        text: 'errors:error',
      },
    }));
    if (reject) {
      yield reject();
    }
  }
}

function* loginUserSaga() {
  yield all([
    takeLatest(types.LOGIN_USER_REQUEST, loginUser),
    takeLatest(types.VERIFY_CAPTCHA_REQUEST, verifyCaptcha),
    takeLatest(types.RESEND_VERIFICATION_EMAIL_REQUEST, resendVerificationEmail),
  ]);
}

export default loginUserSaga;
