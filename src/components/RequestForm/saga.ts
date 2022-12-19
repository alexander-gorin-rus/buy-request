import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import types from '../../core/actionTypes';
import { query } from '../../apollo';
import * as queries from './queries';
import { fetchTagsAndProductsFailure, fetchTagsAndProductsSuccess } from './actions/actions';

function* fetchTagsAndProducts() {
  try {
    const {
      data: {
        tags, products,
      },
    } = yield call(query, {
      query: queries.getTags,
      variables: {
        productFilterInput: {},
      },
    });
    yield put(
      fetchTagsAndProductsSuccess({ tags: tags.data, products: products.data }),
    );
  } catch (e: any) {
    yield put(
      fetchTagsAndProductsFailure(e),
    );
  }
}

function* requestFormSaga() {
  yield all([
    takeLatest(
      types.FETCH_TAGS_AND_PRODUCTS_REQUEST,
      fetchTagsAndProducts,
    ),
  ]);
}

export default requestFormSaga;
