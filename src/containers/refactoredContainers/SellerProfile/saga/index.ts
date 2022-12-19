import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import * as queries from '../queries';
import { getCurrentUser } from '../../../../core/sagas/queries';
import types from '../../../../core/actionTypes';
import { mutate, query } from '../../../../apollo';
import * as mutations from '../mutations';
import {
  IFetchSellerProfileAction, ISellerProfile,
  ISettingSellerSaveAction, SellerProfileActions,
} from '../types';
import { setCurrentUser, setIsComponentLoading } from '../../../../core/actions/actions';
import {
  fetchSellerProfileFailure,
  fetchSellerProfileSuccess,
  saveSellerProfileFailure,
  saveSellerProfileSuccess,
  saveSellerSettingsFailure,
  saveSellerSettingsSuccess,
} from '../actions/actions';
import { post } from '../../../../core/axios';
import { deleteAvatar } from '../../../../components/AvatarComponent/saga';
import { IFileNameMinio } from '../../../../components/AvatarComponent/types';
import { ErrorMessages } from '../../../../utils/constants';
import {
  isResolutionValid,
  MAX_IMAGE_RESOLUTION,
  MAX_IMAGE_SIZE_BYTES,
  MIN_IMAGE_RESOLUTION,
} from '../../../../components/DropzoneArea/constants';

const prepareUser = (user: ISellerProfile): ISellerProfile => ({
  ...user,
  setting: {
    ...user.setting,
    tags: user.setting.tags || [],
  },
});

function* saveSellerProfile(action: SellerProfileActions) {
  const {
    payload: {
      profile, media, removeAvatar, setFileCallback,
    },
  } = action;
  try {
    yield put(setIsComponentLoading(true));
    if (media && profile
      && (isResolutionValid(media))
    ) {
      const formData = new FormData();
      formData.append('file', media.file);

      const response: IFileNameMinio[] = yield post({
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
        yield put(saveSellerProfileFailure({
          message: {
            text: ErrorMessages.mediaFile.IMAGE_SIZE || 'errors:mediaFile.IMAGE_SIZE',
          },
        }));
      }
      if (media.height > MAX_IMAGE_RESOLUTION
      || media.width > MAX_IMAGE_RESOLUTION) {
        yield put(saveSellerProfileFailure({
          message: {
            text: ErrorMessages.mediaFile.MAX_IMAGE_RESOLUTION || 'errors:mediaFile.MAX_IMAGE_RESOLUTION',
          },
        }));
      }
      if (media.height < MIN_IMAGE_RESOLUTION
        || media.width < MIN_IMAGE_RESOLUTION) {
        yield put(saveSellerProfileFailure({
          message: {
            text: ErrorMessages.mediaFile.MIN_IMAGE_RESOLUTION || 'errors:mediaFile.MIN_IMAGE_RESOLUTION',
          },
        }));
      }
    }
    const { data } = yield call(mutate, {
      mutation: mutations.updateSellerProfile,
      variables: {
        params: profile,
      },
    });

    yield put(saveSellerProfileSuccess({
      profile: prepareUser(data.updateSeller.user),
    }));

    const { data: { user } } = yield call(query, {
      query: getCurrentUser,
      variables: {},
    });
    yield put(setCurrentUser({
      currentUser: user,
    }));
  } catch (error: any) {
    yield put(saveSellerProfileFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* fetchSellerProfile(action: IFetchSellerProfileAction) {
  const { payload } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data } = yield call(query, {
      query: queries.getSellerProfile,
      variables: payload,
    });

    yield put(fetchSellerProfileSuccess({
      profile: prepareUser(data.seller),
      tags: data.tags.data,
      ratings: data.user.ratings,
    }));
  } catch (error: any) {
    yield put(fetchSellerProfileFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* saveSellerSettings(action: ISettingSellerSaveAction) {
  const { payload: { updatedData, userId } } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data: { updateSellerSetting: { isSuccess } } } = yield call(mutate, {
      mutation: mutations.updateSellerSettings,
      variables: {
        params: updatedData,
      },
    });
    if (isSuccess) {
      const { data: { seller, tags, user } } = yield call(query, {
        query: queries.getSellerProfile,
        variables: { userId },
      });
      yield put(saveSellerSettingsSuccess({
        profile: prepareUser(seller),
        tags: tags.data,
        ratings: user.ratings,
      }));
    }
  } catch (error: any) {
    yield put(saveSellerSettingsFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* saveSellerProfileSaga() {
  yield all([
    takeLatest(types.SAVE_SELLER_PROFILE_REQUEST, saveSellerProfile),
    takeLatest(types.FETCH_SELLER_PROFILE_REQUEST, fetchSellerProfile),
    takeLatest(types.SAVE_SELLER_SETTINGS_REQUEST, saveSellerSettings),
  ]);
}

export default saveSellerProfileSaga;
