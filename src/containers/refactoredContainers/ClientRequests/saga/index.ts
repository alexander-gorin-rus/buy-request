import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';

import types from '../../../../core/actionTypes';
import { query } from '../../../../apollo';
import { OrderBy, OrderName } from '../../../../utils/constants';
import * as queries from '../queries';
import { getClientRequestsSuccess, getClientRequestsFailure } from '../actions/actions';
import { IGetRequests } from '../types';

function* fetchCurrentClientRequests(action: IGetRequests) {
  const { payload: { page, perPage } } = action;

  try {
    const { data } = yield call(query, {
      query: queries.getCurrentClientRequests,
      variables: {
        requestFilterInput: {
          page,
          perPage,
          sort: [
            {
              orderBy: OrderBy.DESC,
              orderName: OrderName.CREATED_AT,
            },
          ],
        },
      },
    });
    yield put(
      getClientRequestsSuccess({ requests: data.user.requests }),
    );
  } catch (e: any) {
    yield put(getClientRequestsFailure({ error: e.message }));
  }
}

function* fetchClientRequestsSaga() {
  yield all([
    takeLatest(
      types.GET_CURRENT_CLIENT_REQUESTS_REQUEST,
      fetchCurrentClientRequests,
    ),
  ]);
}

export default fetchClientRequestsSaga;
