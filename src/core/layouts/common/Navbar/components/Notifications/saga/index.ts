import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';

import { mutate, query } from 'src/apollo';
import types from 'src/core/actionTypes';
import { USER_NOTIFICATIONS_ALLOWED_TYPES, OrderBy, OrderName } from 'src/utils/constants';
import { markNotificationAsRead as markNotificationAsReadMutation } from 'src/core/sagas/mutations';

import { getNotificationsSuccess, markNotificationAsReadSuccess, markNotificationAsReadFailure } from '../actions/actions';
import * as queries from '../queries';
import { IMarkNotificationAsReadAction } from '../types';

function* fetchNotifications() {
  try {
    const { data: { user: { notifications } } } = yield call(query, {
      query: queries.getAllNotifications,
      variables: {
        notificationsFilterInput: {
          sort: [{
            orderBy: OrderBy.DESC,
            orderName: OrderName.CREATED_AT,
          }],
          isRead: false,
          archive: false,
          types: USER_NOTIFICATIONS_ALLOWED_TYPES,
        },
      },
    });
    yield put(
      getNotificationsSuccess({
        notifications: notifications.data,
      }),
    );
  } catch (error: any) {
    yield put({
      type: types.GET_NOTIFICATIONS_FAILURE,
      payload: {
        error: error.message,
      },
    });
  }
}

function* markNotificationAsRead(action: IMarkNotificationAsReadAction) {
  const { payload, resolve, reject } = action;
  try {
    const { data: { setNotificationsRead: { isSuccess } } } = yield call(mutate, {
      mutation: markNotificationAsReadMutation,
      variables: {
        getIdsInput: {
          ids: [payload?.id],
        },
      },
    });
    if (isSuccess) {
      yield put(markNotificationAsReadSuccess());
      yield put({ type: types.GET_NOTIFICATIONS_REQUEST });
    }
    if (resolve) { yield resolve(); }
  } catch (error) {
    yield put(markNotificationAsReadFailure({
      error: error as Error,
      message: {
        text: 'errors:error',
      },
    }));
    if (reject) { yield reject(); }
  }
}

function* fetchNotificationsSaga() {
  yield all([
    takeLatest(
      types.GET_NOTIFICATIONS_REQUEST,
      fetchNotifications,
    ),
    takeLatest(
      types.MARK_NOTIFICATION_AS_READ_REQUEST,
      markNotificationAsRead,
    ),
  ]);
}

export default fetchNotificationsSaga;
