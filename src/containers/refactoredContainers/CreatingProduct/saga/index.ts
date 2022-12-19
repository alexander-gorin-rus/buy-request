import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import { setIsComponentLoading } from '../../../../core/actions/actions';
import types from '../../../../core/actionTypes';
import { mutate } from '../../../../apollo';
import * as mutations from '../mutations';
import { post } from '../../../../core/axios';
import { ICreatingProductAction } from '../types';
import { setCreatingProductFailure } from '../actions/actions';
import { PRODUCT_BUCKET_NAME } from '../../../../utils/constants';
import {
  IFileResponse, IMedia, IDefaultMedia,
} from '../../../../core/types';

function* createProduct(action: ICreatingProductAction) {
  const { payload: { formData, toggleModal } } = action;

  const { media = [], ...restFormData } = formData;

  yield put(setIsComponentLoading(true));

  try {
    let savedFiles: IDefaultMedia[] = [];
    const filesFormData = new FormData();

    media.forEach((mediaItem: IMedia) => {
      if (mediaItem.file) {
        filesFormData.append('file[]', mediaItem.file);
      }
    });

    const response: IFileResponse[] = yield post(
      {
        path: 'file',
        data: filesFormData,
      },
      undefined,
      undefined,
      {
        bucketName: PRODUCT_BUCKET_NAME,
      },
    );

    const succesfullResponses = response?.filter(
      ((fileResult) => fileResult.resultInfo.isSuccess),
    );

    if (succesfullResponses.length) {
      savedFiles = succesfullResponses.map((file) => ({
        fileNameMinio: file.fileNameMinio,
        fileOriginalName: file.fileOriginalName,
        mimetype: file.mimetype,
      }));
    }

    yield call(mutate, {
      mutation: mutations.createProduct,
      variables: {
        createProductData: {
          ...restFormData,
          media: savedFiles,
          cover: savedFiles[0]?.fileNameMinio,
        },
      },
    });
    yield toggleModal();
  } catch (error: any) {
    yield put(setCreatingProductFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* createProductSaga() {
  yield all([
    takeLatest(types.CREATE_PRODUCT_REQUEST, createProduct),
  ]);
}

export default createProductSaga;
