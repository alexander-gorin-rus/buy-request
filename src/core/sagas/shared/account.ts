import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { query } from '../../../apollo';
import { setCurrentUser, setIsLoading } from '../../actions/actions';
import types from '../../actionTypes';
import { post } from '../../axios';
import * as queries from '../queries';

function* logout() {
  yield post({
    path: 'user/logout',
    data: {},
  }, 'application/json');
  yield put(setCurrentUser({
    currentUser: null,
  }));
}

function* getUser(): Generator<any> {
  try {
    yield put(setIsLoading(true));
    const { data }: any = yield call(query, {
      query: queries.getCurrentUser,
      variables: {},
    });

    yield put(setCurrentUser({
      currentUser: data.user,
    }));
  } catch (e: any) {
    yield put(setCurrentUser({
      currentUser: null,
    }));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* accountSaga() {
  yield all([
    takeLatest(types.LOGOUT_USER_REQUEST, logout),
    takeLatest(types.GET_CURRENT_USER_REQUEST, getUser),
  ]);
}

export default accountSaga;
