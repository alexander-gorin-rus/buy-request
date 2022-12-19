import {
  all, put, takeLatest, call,
} from 'redux-saga/effects';
import { query, mutate } from 'src/apollo';
import { setIsComponentLoading } from 'src/core/actions/actions';
import types from 'src/core/actionTypes';
import { markNotificationAsRead as markNotificationAsReadMutation } from 'src/core/sagas/mutations';
import * as queries from '../queries';
import * as mutations from '../mutations';
import { NOTIFICATION_TYPES_MAP, NOTIFICATION_PERIOD_MAP } from '../constants';
import {
  getNotificationsFailure,
  getNotificationsSuccess,
  markNotificationAsReadSuccess,
  markNotificationAsReadFailure,
  removeNotificationSuccess,
  removeNotificationFailure,
  markNotificationAsRead as markNotificationAsReadAction,
} from '../actions/actions';
import {
  IMarkNotificationAsReadAction,
  IRemoveNotificationPromiseAction,
  IGetNotificationsAction,
} from '../types';

function* fetchNotifications(action: IGetNotificationsAction) {
  const { payload } = action;
  const {
    page, isRead, notificationType, notificationPeriod, sorting,
  } = payload;
  try {
    yield put(setIsComponentLoading(true));

    const { data: { user: { notifications } } } = yield call(query, {
      query: queries.getNotifications,
      variables: {
        notificationsFilterInput: {
          page,
          perPage: 9,
          isRead,
          types: notificationType ? NOTIFICATION_TYPES_MAP[notificationType]?.types : [],
          periodTime: notificationPeriod ? NOTIFICATION_PERIOD_MAP[notificationPeriod] : '',
          sort: sorting,
          archive: notificationType ? NOTIFICATION_TYPES_MAP[notificationType].isArchive : false,
        },
      },
    });

    yield put(getNotificationsSuccess({ request: notifications }));
  } catch (error) {
    yield put(getNotificationsFailure({
      error: error as Error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* markNotificationAsRead(
  action: IMarkNotificationAsReadAction,
) {
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

function* removeNotification(
  action: IRemoveNotificationPromiseAction,
) {
  const { payload, resolve, reject } = action;
  try {
    const { data: { setNotificationsArchive: { isSuccess } } } = yield call(mutate, {
      mutation: mutations.deleteNotification,
      variables: {
        getIdsInput: {
          ids: [payload?.id],
        },
      },
    });
    if (isSuccess) {
      yield put(removeNotificationSuccess());
      yield put(markNotificationAsReadAction({ id: payload?.id }));
    }
    if (resolve) { yield resolve(); }
  } catch (error) {
    yield put(removeNotificationFailure({
      error: error as Error,
      message: {
        text: 'errors:error',
      },
    }));
    if (reject) { yield reject(); }
  }
}

function* fetchClientRequestsSaga() {
  yield all([
    takeLatest(types.GET_NOTIFICATIONS_CENTER_REQUEST, fetchNotifications),
    takeLatest(types.MARK_NOTIFICATION_AS_READ_REQUEST, markNotificationAsRead),
    takeLatest(types.REMOVE_NOTIFICATION_REQUEST, removeNotification),
  ]);
}

export default fetchClientRequestsSaga;
