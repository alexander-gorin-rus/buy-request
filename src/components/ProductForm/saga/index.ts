import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import types from '../../../core/actionTypes';
import { query } from '../../../apollo';
import * as queries from '../queries';
import { fetchTagsFailure, fetchTagsSuccess } from '../actions/actions';

function* fetchTags() {
  try {
    const { data: { tags: { data } } } = yield call(query, {
      query: queries.getTags,
      variables: {},
    });
    yield put(fetchTagsSuccess({ tags: data }));
  } catch (e) {
    yield put(fetchTagsFailure({ error: 'Error get tags' }));
  }
}

function* productFormSaga() {
  yield all([takeLatest(types.PRODUCT_FORM_TAGS_REQUEST, fetchTags)]);
}

export default productFormSaga;
