import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { setIsComponentLoading } from 'src/core/actions/actions';
import types from '../../../../core/actionTypes';
import { mutate } from '../../../../apollo';
import * as mutations from '../mutations';
import { ICreatingFeedbackPromiseAction } from '../types';

function* createFeedback(action: ICreatingFeedbackPromiseAction) {
  const { payload, resolve, reject } = action;
  try {
    yield put(setIsComponentLoading(true));
    yield call(mutate, {
      mutation: mutations.createFeedback,
      variables: {
        newRating: {
          ...payload,
        },
      },
    });
    yield put(
      {
        type: types.CREATE_FEEDBACK_SUCCESS,
      },
    );
    if (resolve) {
      yield resolve();
    }
  } catch (e) {
    yield put(
      {
        type: types.CREATE_FEEDBACK_FAILURE,
        payload: {
          error: 'errors:error',
        },
      },
    );
    if (reject) {
      yield reject();
    }
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* createFeedbackSaga() {
  yield all([
    takeLatest(
      types.CREATE_FEEDBACK_REQUEST,
      createFeedback,
    ),
  ]);
}

export default createFeedbackSaga;
