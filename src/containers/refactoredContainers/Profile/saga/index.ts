import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import { mutate, query } from 'src/apollo';
import types from 'src/core/actionTypes';
import { TypeUser } from 'src/utils/constants';
import { setIsComponentLoading } from 'src/core/actions/actions';
import * as mutations from '../mutations';
import {
  getUserProfileSuccess, getSellerTagsSuccess, getRatingsSuccess,
  getSellerTagsFailure, getUserProfileFailure, saveTagsFailure, getRatingsFailure,
} from '../actions/actions';
import * as queries from '../queries';
import {
  IDealData, IFetchRatingsAction, IFetchUserAction,
  IProfileRating, ISaveTagsAction, IUserProfile,
} from '../types';

const prepareRatings = (user: IUserProfile): IProfileRating[] => (
  user.ratings.data.map((rating: IProfileRating) => {
    const ratingEntity = user.deals.data.filter(
      (deal: IDealData) => deal.id === rating.entityId,
    );

    if (ratingEntity.length) {
      return {
        ...rating,
        productName: ratingEntity[0].offer.title,
        dealName: ratingEntity[0].request.title,
      };
    }

    return rating;
  })
);

function* getSeller() {
  try {
    const { data: sellerProfile } = yield call(query, {
      query: queries.getSellerProfile,
      variables: {},
    });

    yield put(getSellerTagsSuccess({
      sellerProfile: {
        company: sellerProfile.seller.company,
        subscribedTags: sellerProfile?.seller?.setting?.tags || [],
      },
      tags: sellerProfile.tags.data,
    }));
  } catch (error: any) {
    yield put(getSellerTagsFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  }
}

function* getRatings(action: IFetchRatingsAction) {
  const { payload } = action;

  try {
    const { data } = yield call(query, {
      query: queries.getRatings,
      variables: payload,
    });

    yield put(getRatingsSuccess({
      ratings: {
        data: prepareRatings(data.user),
        pageInfo: data.user.ratings.pageInfo,
      },
    }));
  } catch (error: any) {
    yield put(getRatingsFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  }
}

function* getUserProfile(action: IFetchUserAction) {
  const { payload } = action;

  try {
    const { data } = yield call(query, {
      query: queries.getUserProfileData,
      variables: payload,
    });

    yield put(getUserProfileSuccess({
      profile: data.user,
    }));

    if (data.user.type === TypeUser.seller) {
      yield getSeller();
    }
  } catch (error: any) {
    yield put(getUserProfileFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  }
}

function* saveTags(action: ISaveTagsAction) {
  const { payload: { updatedData, toggleEdit } } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data: { updateSellerSetting: { isSuccess } } } = yield call(mutate, {
      mutation: mutations.saveTags,
      variables: {
        params: updatedData,
      },
    });

    if (isSuccess) {
      yield getSeller();
      yield toggleEdit();
    }
  } catch (error: any) {
    yield put(saveTagsFailure({
      error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* profileSaga() {
  yield all([
    takeLatest(types.FETCH_USER_PROFILE_REQUEST, getUserProfile),
    takeLatest(types.FETCH_RATINGS_REQUEST, getRatings),
    takeLatest(types.SAVE_TAGS_REQUEST, saveTags),
  ]);
}

export default profileSaga;
