import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { setIsComponentLoading } from '../../../../core/actions/actions';
import types from '../../../../core/actionTypes';
import * as mutations from '../mutations';
import {
  ICreateDealPromiseAction,
  IGetOffer,
  IOffer,
  IRejectOfferByConsumerPromiseAction,
} from '../types';
import { mutate, query } from '../../../../apollo';
import * as queries from '../queries';
import {
  createDealFailure,
  getOfferFailure,
  getOfferSuccess,
  getRequestDataFailure,
  getRequestDataSuccess,
  cancelOfferByConsumerSuccess,
  cancelOfferBySellerSuccess,
} from '../actions/actions';
import { IGetRequestDataAction } from '../../CreatingOffer/types';
import { OfferStatus } from '../../../../utils/constants';

const formatOffer = ({
  ratingUser, userId, ...rest
}: any) : IOffer => {
  const offer = {
    ...rest,
    authorRating: ratingUser,
    authorId: userId,
  };
  return offer;
};

function* fetchOffer(action: IGetOffer) {
  const { payload: { offerId } } = action;
  try {
    const { data: { user: { offers: { data } } } } = yield call(query, {
      query: queries.getOfferById,
      variables: {
        offerFilterInput: {
          offerId,
        },
      },
    });
    const offer = formatOffer(data[0]);
    yield put(
      getOfferSuccess({ offer }),
    );
  } catch (e) {
    yield put(
      getOfferFailure(e),
    );
  }
}

function* createDeal(action: ICreateDealPromiseAction) {
  const { payload, resolve, reject } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data: { createDeal: { isSuccess, id } } } = yield call(mutate, {
      mutation: mutations.createDeal,
      variables: {
        newDeal: payload,
      },
    });

    if (isSuccess && resolve) yield resolve(id);
  } catch (error) {
    yield put(
      createDealFailure({
        error,
        message: {
          text: 'errors:error',
        },
      }),
    );
    if (reject) {
      yield reject();
    }
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* rejectOfferByConsumer(action: IRejectOfferByConsumerPromiseAction) {
  const { payload, resolve, reject } = action;

  try {
    yield call(mutate, {
      mutation: mutations.updateOffer,
      variables: {
        updateOfferData: {
          id: payload.id,
          description: payload.description,
          status: OfferStatus.CANCELED_BY_CONSUMER,
        },
      },
    });
    yield put(cancelOfferByConsumerSuccess());
    if (resolve) {
      yield resolve();
    }
  } catch (e) {
    yield put(
      {
        type: types.CANCEL_OFFER_BY_CONSUMER_FAILURE,
        payload: {
          error: 'errors:error',
        },
      },
    );
    if (reject) {
      yield reject();
    }
  }
}

function* rejectOfferBySeller(action: IRejectOfferByConsumerPromiseAction) {
  const { payload, resolve, reject } = action;

  try {
    yield call(mutate, {
      mutation: mutations.updateOffer,
      variables: {
        updateOfferData: {
          id: payload.id,
          description: payload.description,
          status: OfferStatus.CANCELED_BY_SELLER,
        },
      },
    });
    yield put(cancelOfferBySellerSuccess());
    if (resolve) {
      yield resolve();
    }
  } catch (e) {
    yield put(
      {
        type: types.CANCEL_OFFER_BY_SELLER_FAILURE,
        payload: {
          error: 'errors:error',
        },
      },
    );
    if (reject) {
      yield reject();
    }
  }
}

function* fetchRequestData(action: IGetRequestDataAction) {
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

function* fetchSingleOfferSaga() {
  yield all([
    takeLatest(types.GET_OFFER_REQUEST, fetchOffer),
    takeLatest(types.CREATE_DEAL_REQUEST, createDeal),
    takeLatest(types.CANCEL_OFFER_BY_CONSUMER_REQUEST, rejectOfferByConsumer),
    takeLatest(types.CANCEL_OFFER_BY_SELLER_REQUEST, rejectOfferBySeller),
    takeLatest(types.GET_OFFER_REQUEST_DATA_REQUEST, fetchRequestData),
  ]);
}

export default fetchSingleOfferSaga;
