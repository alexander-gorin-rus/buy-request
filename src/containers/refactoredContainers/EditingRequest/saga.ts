import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { setIsComponentLoading } from 'src/core/actions/actions';
import { mutate, query } from '../../../apollo';
import types from '../../../core/actionTypes';
import * as queries from './queries';
import {
  getRequestFailure,
  getRequestSuccess,
  updateRequestFailure,
  updateRequestSuccess,
} from './actions/actions';
import { uploadMediaIfNeeded } from '../../../core/sagas/fragments/file';
import { IGetRequestAction, IUpdateRequestAction } from './types';
import { REQUEST_BUCKET_NAME } from '../../../utils/constants';
import { IDefaultMedia } from '../../../core/types';
import * as mutations from './mutations';

function* fetchRequest(action: IGetRequestAction) {
  const { payload: { id } } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data: { user: { requests: { data } } } } = yield call(query, {
      query: queries.getRequestById,
      variables: {
        requestFilterInput: {
          requestId: id,
          statuses: [],
        },
      },
    });

    if (!data.length) throw new Error();

    yield put(getRequestSuccess({ request: data[0] }));
  } catch (error) {
    yield put(getRequestFailure({
      error: error as Error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* updateRequest(action: IUpdateRequestAction) {
  const { payload, resolve, reject } = action;

  const { request: { media } } = payload;

  try {
    yield put(setIsComponentLoading(true));

    const resultMedia: IDefaultMedia[] = yield uploadMediaIfNeeded(media, REQUEST_BUCKET_NAME);

    const { data: { updateRequest: { isSuccess } } } = yield call(mutate, {
      mutation: mutations.updateRequest,
      variables: {
        updateRequestData: {
          ...payload.request,
          media: resultMedia,
          cover: resultMedia[0]?.fileNameMinio,
        },
      },
    });
    if (!isSuccess) { throw new Error('error'); }

    yield put(updateRequestSuccess());

    if (resolve) resolve();
  } catch (error) {
    yield put(updateRequestFailure({
      error: error as Error,
      message: {
        text: 'errors:error',
      },
    }));
    if (reject) reject();
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* fetchRequestForEditSaga() {
  yield all([
    takeLatest(types.GET_REQUEST_FOR_EDIT_REQUEST, fetchRequest),
    takeLatest(types.UPDATE_REQUEST_REQUEST, updateRequest),
  ]);
}

export default fetchRequestForEditSaga;
