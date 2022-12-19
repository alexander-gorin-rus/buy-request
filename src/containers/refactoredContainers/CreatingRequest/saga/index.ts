import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import types from '../../../../core/actionTypes';
import { mutate } from '../../../../apollo';
import * as mutations from '../mutations';
import { setIsComponentLoading } from '../../../../core/actions/actions';
import { ISetCreatingRequestPromise } from '../types';
import {
  createQuoteFailure, createQuoteSuccess,
} from '../actions/actions';
import { uploadMediaIfNeeded } from '../../../../core/sagas/fragments/file';
import { MessageTypes, REQUEST_BUCKET_NAME } from '../../../../utils/constants';
import { IDefaultMedia } from '../../../../core/types';

function* createQuote(action: ISetCreatingRequestPromise) {
  const {
    payload, resolve, reject,
  } = action;

  const { media } = payload;

  try {
    yield put(setIsComponentLoading(true));

    const resultMedia: IDefaultMedia[] = yield uploadMediaIfNeeded(media, REQUEST_BUCKET_NAME);

    const { data: { createRequest: { isSuccess } } } = yield call(mutate, {
      mutation: mutations.createRequest,
      variables: {
        createRequestData: {
          ...payload,
          media: resultMedia,
          cover: resultMedia[0]?.fileNameMinio,
        },
      },
    });
    if (isSuccess && resolve) resolve();
    yield put(
      createQuoteSuccess({
        message: {
          type: MessageTypes.SUCCESS,
          text: 'toasts:success',
        },
      }),
    );
  } catch (e: any) {
    yield put(
      createQuoteFailure({
        message: {
          text: 'errors:error',
        },
      }),
    );
    if (reject) reject();
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* createQuoteSaga() {
  yield all([
    takeLatest(
      types.CREATE_QUOTE_REQUEST,
      createQuote,
    ),
  ]);
}

export default createQuoteSaga;
