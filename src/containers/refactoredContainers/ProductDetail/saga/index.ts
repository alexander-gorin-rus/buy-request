import {
  all, takeLatest, put, call, select,
} from 'redux-saga/effects';

import { setIsComponentLoading } from 'src/core/actions/actions';
import { mutate, query } from 'src/apollo';
import { MessageTypes, PRODUCT_BUCKET_NAME } from 'src/utils/constants';
import { del } from 'src/core/axios';
import types from 'src/core/actionTypes';
import { IDefaultMedia, IProductData } from 'src/core/types';
import { uploadMediaIfNeeded } from 'src/core/sagas/fragments/file';

import {
  getProductFailure, getProductSuccess, removeProductFailure,
  updateProductFailure, updateProductInfo,
} from '../actions/actions';
import { IGetProductAction, IRemoveProductPromiseAction, IUpdateProductPromiseAction } from '../types';
import { getProductSelector } from '../selectors';
import * as mutations from '../mutations';
import * as queries from '../queries';

function* getProduct(action: IGetProductAction) {
  const { payload: { productId } } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data: { user: { products } } } = yield call(query, {
      query: queries.getProductById,
      variables: {
        productFilterInput: {
          productId,
        },
      },
    });
    const product = products.data[0];
    yield put(getProductSuccess({ product }));
  } catch (error: any) {
    yield put(getProductFailure(error));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* updateProduct(action: IUpdateProductPromiseAction) {
  const { payload, resolve, reject } = action;
  const { media, previousProduct, ...restPayload } = payload;

  try {
    yield put(setIsComponentLoading(true));
    const resultMedia: IDefaultMedia[] = yield uploadMediaIfNeeded(
      media,
      PRODUCT_BUCKET_NAME,
      false,
    );

    yield call(mutate, {
      mutation: mutations.updateProduct,
      variables: {
        updateProductData: {
          ...restPayload,
          media: resultMedia,
          cover: resultMedia[0]?.fileNameMinio,
        },
      },
    });
    yield put(updateProductInfo({
      message: {
        type: MessageTypes.INFO,
        text: 'productForm:updateAfterVerification',
      },
    }));
    const oldMedia = previousProduct?.media.filter((mediaItem) => !resultMedia.find(
      (savedMediaItem) => savedMediaItem.fileNameMinio === mediaItem.fileNameMinio,
    ));
    if (oldMedia?.length) {
      yield del({
        path: 'file',
        params: {
          fileNamesMinio: JSON.stringify(oldMedia.map((mediaItem) => mediaItem.fileNameMinio)),
          bucketName: PRODUCT_BUCKET_NAME,
        },
      });
    }
    if (resolve) {
      yield resolve();
    }
  } catch (error: any) {
    yield put(updateProductFailure({
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

function* removeProduct(action: IRemoveProductPromiseAction):any {
  const { payload, resolve, reject } = action;
  const product: IProductData = yield select(getProductSelector);

  try {
    yield put({ type: types.SET_IS_REMOVAL_PRODUCT_LOADER });

    const { data: { deleteProduct } } = yield call(mutate, {
      mutation: mutations.deleteProduct,
      variables: { id: payload?.id },
    });

    if (deleteProduct.isSuccess) {
      yield del({
        path: 'file',
        params: {
          fileNamesMinio: JSON.stringify(
            product?.media.map((mediaItem) => mediaItem.fileNameMinio),
          ),
          bucketName: PRODUCT_BUCKET_NAME,
        },
      });
    }

    if (resolve) yield resolve();
  } catch (error) {
    yield put(removeProductFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
    if (reject) {
      yield reject();
    }
  } finally {
    yield put({ type: types.SET_IS_REMOVAL_PRODUCT_LOADER });
  }
}

function* catalogSaga() {
  yield all([takeLatest(types.GET_PRODUCT_REQUEST, getProduct)]);
  yield all([takeLatest(types.UPDATE_PRODUCT_REQUEST, updateProduct)]);
  yield all([takeLatest(types.REMOVE_PRODUCT_REQUEST, removeProduct)]);
}

export default catalogSaga;
