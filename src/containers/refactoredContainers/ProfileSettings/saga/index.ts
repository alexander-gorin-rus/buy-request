import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import { mutate, query } from 'src/apollo';
import types from 'src/core/actionTypes';
import { getCurrentUser } from 'src/core/sagas/queries';
import { setIsComponentLoading, setCurrentUser } from 'src/core/actions/actions';
import { ErrorMessages, TypeUser } from 'src/utils/constants';
import { IFileNameMinio } from 'src/components/AvatarComponent/types';
import { del, post } from 'src/core/axios';
import { getUserProfileSuccess } from '../../Profile/actions/actions';
import * as queries from '../../Profile/queries';
import { saveSellerProfileFailure } from '../../SellerProfile/actions/actions';
import * as mutations from '../mutations';
import { updateProfileFailure } from '../actions/actions';
import { IUpdateProfileAction } from '../types';

function* updateProfile(action: IUpdateProfileAction) {
  const {
    payload: {
      data, userType, file, removeAvatar, handleResetForm,
    },
  } = action;
  const mutation = userType === TypeUser.seller ? mutations.updateSeller : mutations.updateConsumer;

  try {
    yield put(setIsComponentLoading(true));

    if ((data.avatar && file) || (data.avatar && removeAvatar)) {
      yield del({
        path: 'file',
        params: {
          fileNamesMinio: JSON.stringify([data.avatar]),
          bucketName: 'avatar',
        },
      });
      data.avatar = '';
    }

    if (file && !removeAvatar) {
      const formData = new FormData();
      formData.append('file', file.file);

      const response: IFileNameMinio[] = yield post({
        path: 'file?bucketName=avatar',
        data: formData,
      }, 'application/json');

      if (!response[0].resultInfo.isSuccess) {
        yield put(saveSellerProfileFailure({
          message: {
            text: ErrorMessages.error || 'errors:error',
          },
        }));
      } else {
        data.avatar = response[0].fileNameMinio;
      }
    }

    yield call(mutate, {
      mutation,
      variables: {
        params: data,
      },
    });

    const { data: { user } } = yield call(query, {
      query: getCurrentUser,
      variables: {},
    });

    const { data: userProfile } = yield call(query, {
      query: queries.getUserProfileData,
      variables: {
        currentUserId: user.id,
      },
    });

    yield put(getUserProfileSuccess({
      profile: userProfile.user,
    }));

    yield put(setCurrentUser({
      currentUser: user,
    }));

    yield put({ type: types.CLEAR_AVATAR_SETTINGS });
  } catch (error: any) {
    yield put(updateProfileFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    handleResetForm();
    yield put(setIsComponentLoading(false));
  }
}

function* profileSaga() {
  yield all([
    takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfile),
  ]);
}

export default profileSaga;
