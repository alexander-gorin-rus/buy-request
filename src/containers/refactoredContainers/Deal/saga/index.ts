import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import types from '../../../../core/actionTypes';
import { mutate } from '../../../../apollo';
import * as mutations from '../mutations';
import { IUpdateDealPromiseAction } from '../types';
import { setUpdateDealFailure } from '../actions/actions';

function* updateDeal(action: IUpdateDealPromiseAction) {
  const { payload, resolve, reject } = action;

  try {
    yield call(mutate, {
      mutation: mutations.updateDeal,
      variables: {
        deal: payload,
      },
    });
    if (resolve) {
      yield resolve();
    }
  } catch (error) {
    yield put(setUpdateDealFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
    if (reject) {
      yield reject();
    }
  }
}

function* updateDealSaga() {
  yield all([
    takeLatest(types.UPDATE_DEAL_REQUEST, updateDeal),
  ]);
}

export default updateDealSaga;
