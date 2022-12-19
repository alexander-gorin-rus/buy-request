import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import types from '../../../../core/actionTypes';
import { query } from '../../../../apollo';
import { OrderBy, OrderName } from '../../../../utils/constants';
import * as queries from '../queries';
import { fetchSellerRequestsFailure, fetchSellerRequestsSuccess } from '../actions/actions';
import { IFetchRequests } from '../types';

function* fetchRequests(action: IFetchRequests) {
  const { payload: { page, perPage } } = action;

  try {
    const {
      data: {
        user: { requests },
        seller: { setting: { tags } },
      },
    } = yield call(query, {
      query: queries.getClientRequests,
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
      fetchSellerRequestsSuccess({
        requests: requests.data,
        pageInfo: requests.pageInfo,
        tags,
      }),
    );
  } catch (e) {
    yield put(
      fetchSellerRequestsFailure(e),
    );
  }
}

function* sellerRecommendedRequestsSaga() {
  yield all([
    takeLatest(
      types.FETCH_RECOMMENDED_SELLER_REQUESTS_REQUEST,
      fetchRequests,
    ),
  ]);
}

export default sellerRecommendedRequestsSaga;
