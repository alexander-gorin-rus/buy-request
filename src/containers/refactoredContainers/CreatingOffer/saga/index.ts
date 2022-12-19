import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { setIsComponentLoading } from 'src/core/actions/actions';
import types from 'src/core/actionTypes';
import { mutate, query } from 'src/apollo';
import { uploadMediaIfNeeded } from 'src/core/sagas/fragments/file';
import { defaultSort, OFFER_BUCKET_NAME } from 'src/utils/constants';
import { IDefaultMedia } from 'src/core/types';
import * as queries from '../queries';
import {
  createOfferFailure,
  getCatalogFailure,
  getCatalogSuccess,
  getRequestDataSuccess,
  getRequestDataFailure,
} from '../actions/actions';
import * as mutations from '../mutations';
import { ICreateOfferPromiseAction } from '../types';

function* createOffer(action: ICreateOfferPromiseAction) {
  const { payload, resolve, reject } = action;

  const {
    media: mediaObj,
    title,
    description,
    price,
    product,
    requestId,
    additionalConditions,
  } = payload;

  const [productId] = product ?? [];

  try {
    yield put(setIsComponentLoading(true));

    const media: IDefaultMedia[] = yield uploadMediaIfNeeded(mediaObj, OFFER_BUCKET_NAME);

    const [mediaItem] = media ?? [];

    const { data: { createOffer: { isSuccess } } } = yield call(mutate, {
      mutation: mutations.createOffer,
      variables: {
        createOfferData: {
          title,
          description,
          price,
          requestId,
          additionalConditions,
          productId,
          media,
          isDraft: true,
          cover: mediaItem?.fileNameMinio,
        },
      },
    });
    if (isSuccess) {
      if (resolve) {
        yield resolve();
      }
    } else {
      throw new Error('error');
    }
  } catch (error) {
    yield put(createOfferFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
    if (reject) {
      yield reject();
    }
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* fetchCatalog() {
  try {
    yield put(setIsComponentLoading(true));
    const { data: { user: { products: { data } } } } = yield call(query, {
      query: queries.getProducts,
      variables: {
        productFilterInput: {
          myOwnProduct: true,
          sort: [defaultSort.name],
        },
      },
    });
    yield put(getCatalogSuccess({ catalog: data }));
  } catch (error) {
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

function* fetchRequestData(action: any) {
  const { payload } = action;
  try {
    const { data: { user: { requests: { data } } } } = yield call(query, {
      query: queries.getRequestData,
      variables: {
        requestFilterInput: {
          requestId: payload.requestId,
          statuses: [],
        },
      },
    });
    yield put(getRequestDataSuccess({ requestData: data[0] }));
  } catch (error: any) {
    yield put(getRequestDataFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  }
}

function* creatingOfferSaga() {
  yield all([
    takeLatest(types.GET_OFFER_CATALOG_REQUEST, fetchCatalog),
    takeLatest(types.CREATE_OFFER_REQUEST, createOffer),
    takeLatest(types.GET_OFFER_REQUEST_DATA_REQUEST, fetchRequestData),
  ]);
}

export default creatingOfferSaga;
