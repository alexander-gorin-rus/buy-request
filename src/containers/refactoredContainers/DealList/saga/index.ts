import {
  all, put, takeLatest, call,
} from 'redux-saga/effects';
import { query } from '../../../../apollo';
import { setIsComponentLoading } from '../../../../core/actions/actions';
import * as queries from '../queries';
import types from '../../../../core/actionTypes';
import { getDealListFailure, getDealListSuccess } from '../actions/actions';
import { IGetDealList } from '../types';

function* fetchDealList(action: IGetDealList) {
  const { payload } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data: { user: { deals } } } = yield call(query, {
      query: queries.getDeals,
      variables: {
        dealFilterInput: payload,
      },
    });
    yield put(getDealListSuccess({ request: deals }));
  } catch (error: any) {
    yield put(getDealListFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* fetchClientRequestsSaga() {
  yield all([takeLatest(types.GET_DEAL_LIST_REQUEST, fetchDealList)]);
}

export default fetchClientRequestsSaga;
