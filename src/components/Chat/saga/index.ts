import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import types from '../../../core/actionTypes';
import { query } from '../../../apollo';
import * as queries from '../queries';
import {
  getCompanionUserSuccess,
  getCompanionUserFailure,
  setCreatingChatMediaSuccess,
  setCreatingChatMediaFailure,
} from '../actions/actions';
import {
  ChatMediaActions,
  IGetCompanionUser,
} from '../types';
import { MESSAGE_BUCKET_NAME } from '../../../utils/constants';
import { uploadFiles } from '../../../core/sagas/fragments/file';
import { IFileResponse } from '../../../core/types';

function* fetchCompanionUser(action: IGetCompanionUser) {
  const { payload: { userId } } = action;
  try {
    const { data } = yield call(query, {
      query: queries.getUserById,
      variables: {
        userId,
      },
    });
    yield put(
      getCompanionUserSuccess({ user: data.client }),
    );
  } catch (e: any) {
    yield put(getCompanionUserFailure({ error: e.message }));
  }
}

function* fetchCreatingChatMedia(action: ChatMediaActions) {
  const { payload: { files }, resolve, reject } = action;
  try {
    if (files) {
      const result: IFileResponse[] = yield uploadFiles(
        files,
        MESSAGE_BUCKET_NAME,
      );
      if (result.length) {
        if (resolve) {
          yield resolve(result);
        }
        yield put(setCreatingChatMediaSuccess());
      }
    }
  } catch (error) {
    yield put(setCreatingChatMediaFailure());
    if (reject) {
      yield reject();
    }
  }
}

function* fetchClientRequestsSaga() {
  yield all([
    takeLatest(types.GET_COMPANION_USER_REQUEST, fetchCompanionUser),
    takeLatest(types.CREATE_CHAT_MEDIA_REQUEST, fetchCreatingChatMedia),
  ]);
}

export default fetchClientRequestsSaga;
