import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import * as queries from '../queries';
import types from '../../../../core/actionTypes';
import { mutate, query } from '../../../../apollo';
import * as mutations from '../mutations';
import { getCurrentUser, setIsComponentLoading } from '../../../../core/actions/actions';
import {
  IFetchConsumerProfileAction,
  ISaveConsumerProfileAction,
} from '../types';
import {
  fetchConsumerProfileFailure, fetchConsumerProfileSuccess,
  saveConsumerProfileSuccess, saveConsumerProfileFailure,
} from '../actions/actions';
import { post } from '../../../../core/axios';
import { deleteAvatar } from '../../../../components/AvatarComponent/saga';
import { saveSellerProfileFailure } from '../../SellerProfile/actions/actions';
import { IFileNameMinio } from '../../../../components/AvatarComponent/types';
import { ErrorMessages } from '../../../../utils/constants';
import {
  isResolutionValid,
  MAX_IMAGE_RESOLUTION,
  MAX_IMAGE_SIZE_BYTES,
  MIN_IMAGE_RESOLUTION,
} from '../../../../components/DropzoneArea/constants';

function* saveUserProfile(action: ISaveConsumerProfileAction) {
  const {
    payload: {
      profile, media, removeAvatar, setFileCallback,
    },
  } = action;
  try {
    yield setIsComponentLoading(true);
    if (media && profile
      && (isResolutionValid(media))) {
      const formData = new FormData();
      formData.append('file', media.file);

      const response : IFileNameMinio[] = yield post({
        path: 'file?bucketName=avatar',
        data: formData,
      }, 'application/json');

      if (!response[0].resultInfo.isSuccess) {
        if (setFileCallback) {
          setFileCallback(undefined);
        }
        yield put(saveSellerProfileFailure({
          message: {
            text: ErrorMessages.error || 'errors:error',
          },
        }));
      }
      if (profile.avatar) {
        yield deleteAvatar(profile.avatar);
      }

      profile.avatar = response[0].fileNameMinio;
      if (removeAvatar && profile) {
        yield deleteAvatar(profile.avatar);
        profile.avatar = '';
      }
    } else if (media && (!isResolutionValid(media))) {
      if (setFileCallback) {
        setFileCallback(undefined);
      }
      if (media.file.size > MAX_IMAGE_SIZE_BYTES) {
        yield put(saveConsumerProfileFailure({
          message: {
            text: ErrorMessages.mediaFile.IMAGE_SIZE || 'errors:mediaFile.IMAGE_SIZE',
          },
        }));
      }
      if (media.height > MAX_IMAGE_RESOLUTION
        || media.width > MAX_IMAGE_RESOLUTION) {
        yield put(saveConsumerProfileFailure({
          message: {
            text: ErrorMessages.mediaFile.MAX_IMAGE_RESOLUTION || 'errors:mediaFile.MAX_IMAGE_RESOLUTION',
          },
        }));
      }
      if (media.height < MIN_IMAGE_RESOLUTION
        || media.width < MIN_IMAGE_RESOLUTION) {
        yield put(saveConsumerProfileFailure({
          message: {
            text: ErrorMessages.mediaFile.MIN_IMAGE_RESOLUTION || 'errors:mediaFile.MIN_IMAGE_RESOLUTION',
          },
        }));
      }
    }

    const { data } = yield call(mutate, {
      mutation: mutations.putUserProfile,
      variables: {
        params: profile,
      },
    });
    yield put(saveConsumerProfileSuccess({ profile: data.updateConsumer.user }));
    yield put(getCurrentUser());
  } catch (e: any) {
    yield put(saveConsumerProfileFailure(e));
  } finally {
    yield setIsComponentLoading(false);
  }
}

function* fetchUserProfile(action: IFetchConsumerProfileAction) {
  const { payload } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data } = yield call(query, {
      query: queries.getUserProfile,
      variables: payload,
    });

    yield put(fetchConsumerProfileSuccess({
      profile: data.consumer,
      ratings: data.user.ratings,
    }));
  } catch (e: any) {
    yield put(fetchConsumerProfileFailure(e));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* userProfileSaga() {
  yield all([
    takeLatest(types.SAVE_CONSUMER_PROFILE_REQUEST, saveUserProfile),
    takeLatest(types.FETCH_CONSUMER_PROFILE_REQUEST, fetchUserProfile),
  ]);
}

export default userProfileSaga;
