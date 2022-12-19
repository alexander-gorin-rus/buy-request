import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { query } from '../../../apollo';
import { getDealFailure, getDealSuccess } from '../actions';
import * as queries from '../queries';
import types from '../../../core/actionTypes';
import { IGetDealAction } from '../types';

function* fetchDeal(action: IGetDealAction) {
  const { payload: { dealId } } = action;

  try {
    const { data: { user: { deals: { data } } } } = yield call(query, {
      query: queries.deal,
      variables: {
        dealFilterInput: {
          dealId,
        },
      },
    });

    if (data?.length) {
      yield put(getDealSuccess({ deal: data[0] }));
    } else {
      yield put(getDealFailure({ error: 'Error getting deal!' }));
    }
  } catch (e) {
    yield put(getDealFailure({ error: 'Error getting deal!' }));
  }
}

function* fetchSingleRequestSaga() {
  yield all([takeLatest(types.GET_DEAL_REQUEST, fetchDeal)]);
}

export default fetchSingleRequestSaga;
