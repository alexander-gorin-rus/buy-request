import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { query } from '../../../../apollo';
import { setIsComponentLoading } from '../../../../core/actions/actions';
import { getCatalogFailure, getCatalogSuccess } from '../actions/actions';
import * as queries from '../queries';
import types from '../../../../core/actionTypes';
import { IGetCatalogAction } from '../types';

function* getCatalog(action: IGetCatalogAction) {
  const { payload } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data: { user: { products } } } = yield call(query, {
      query: queries.getCatalog,
      variables: {
        productFilterInput: payload,
      },
    });
    yield put(getCatalogSuccess({ request: products }));
  } catch (error: any) {
    yield put(getCatalogFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* catalogSaga() {
  yield all([
    takeLatest(types.GET_CATALOG_REQUEST, getCatalog),
  ]);
}

export default catalogSaga;
