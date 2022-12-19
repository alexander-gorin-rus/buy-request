import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { setIsComponentLoading } from '../../../../core/actions/actions';
import {
  getRequestsFailure,
  getRequestsSuccess,
} from '../actions/actions';
import * as queries from '../queries';
import types from '../../../../core/actionTypes';
import { query } from '../../../../apollo';
import { IGetRequestsAction } from '../types';

function* fetchRequests(action: IGetRequestsAction) {
  const { payload } = action;
  try {
    yield put(setIsComponentLoading(true));
    const { data: { user: { requests } } } = yield call(query, {
      query: queries.getClientRequests,
      variables: {
        requestFilterInput: payload,
      },
    });
    yield put(getRequestsSuccess({ requests }));
  } catch (error) {
    yield put(getRequestsFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* requestsSaga() {
  yield all([
    takeLatest(types.GET_REQUESTS_REQUEST, fetchRequests),
  ]);
}

export default requestsSaga;
