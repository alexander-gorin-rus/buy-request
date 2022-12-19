import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import types from 'src/core/actionTypes';
import { mutate } from 'src/apollo';
import { setIsComponentLoading } from 'src/core/actions/actions';
import * as mutation from '../mutation';
import { IReportRequest } from '../types';

function* createReport(action: IReportRequest) {
  const { payload, resolve, reject } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data } = yield call(mutate, {
      mutation: mutation.createReport,
      variables: {
        createReportData: payload,
      },
    });

    if (data.createReport.isSuccess) {
      yield put({
        type: types.SEND_REPORT_SUCCESS,
      });
      if (resolve) {
        resolve();
      }
    }
  } catch (error: any) {
    yield put({
      type: types.SEND_REPORT_FAILURE,
      payload: {
        error: error.message,
      },
    });
    if (reject) {
      reject();
    }
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* createReportSaga() {
  yield all([takeLatest(types.SEND_REPORT_REQUEST, createReport)]);
}

export default createReportSaga;
