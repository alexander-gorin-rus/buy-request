import {
  all, put, call, takeLatest,
} from 'redux-saga/effects';
import { setIsComponentLoading } from '../../../../core/actions/actions';
import types from '../../../../core/actionTypes';
import {
  getOffersFailure,
  getOffersSuccess,
} from '../actions/actions';
import { IGetOffers } from '../types';
import { query } from '../../../../apollo';
import * as queries from '../queries';

function* fetchOffers(action : IGetOffers) {
  const { payload } = action;
  try {
    yield put(setIsComponentLoading(true));
    const { data: { user: { offers } } } = yield call(query, {
      query: queries.getOffers,
      variables: {
        offerFilterInput: payload,
      },
    });
    yield put(getOffersSuccess({ offers: offers.data, pageInfo: offers.pageInfo }));
  } catch (e) {
    yield put(
      getOffersFailure(e),
    );
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* fetchOffersSaga() {
  yield all([
    takeLatest(types.GET_OFFERS_REQUEST, fetchOffers),
  ]);
}

export default fetchOffersSaga;
