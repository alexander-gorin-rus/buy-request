import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { setIsComponentLoading } from '../../../../core/actions/actions';
import types from '../../../../core/actionTypes';
import { mutate, query } from '../../../../apollo';
import * as queries from '../queries';
import {
  getRequest,
  getRequestFailure,
  getRequestSuccess,
  deleteRequestFailure,
  deleteRequestSuccess,
  changeRequestActiveFailure,
  changeRequestActiveSuccess,
} from '../actions/actions';
import { IDeleteRequestAction, IGetRequestAction, IChangeRequestActiveAction } from '../types';
import * as mutations from '../mutations';
import { RequestStatus } from '../../../../utils/constants';

function* fetchRequest(action: IGetRequestAction) {
  const { payload: { requestId } } = action;

  try {
    yield put(setIsComponentLoading(true));
    const { data: { user: { requests: { data } } } } = yield call(query, {
      query: queries.getRequestById,
      variables: {
        requestFilterInput: {
          requestId,
          statuses: [],
        },
      },
    });

    if (!data.length) throw new Error();

    yield put(getRequestSuccess({ request: data[0] }));
  } catch (error) {
    yield put(getRequestFailure({
      error: error as Error,
      message: {
        text: 'errors:error',
      },
    }));
  } finally {
    yield put(setIsComponentLoading(false));
  }
}

function* deleteRequest(action:IDeleteRequestAction) {
  const { payload: { id }, resolve, reject } = action;
  try {
    const { data: { updateRequest: { isSuccess } } } = yield call(mutate, {
      mutation: mutations.updateRequest,
      variables: {
        updateRequestInput: {
          id,
          delete: true,
        },
      },
    });

    if (!isSuccess) throw new Error('error');

    yield put(deleteRequestSuccess());
    if (resolve) {
      yield resolve();
    }
  } catch (error) {
    yield put(deleteRequestFailure({
      error: error as Error,
      message: {
        text: 'errors:error',
      },
    }));
    if (reject) {
      yield reject();
    }
  }
}

function* changeRequestActive(action: IChangeRequestActiveAction) {
  const { payload: { id, status } } = action;
  try {
    const { data: { updateRequest: { isSuccess } } } = yield call(mutate, {
      mutation: mutations.updateRequest,
      variables: {
        updateRequestInput: {
          id,
          status: status === RequestStatus.DISABLE
            ? RequestStatus.IN_PROGRESS : RequestStatus.DISABLE,
        },
      },
    });

    if (!isSuccess) throw new Error('error');

    yield put(changeRequestActiveSuccess());
    yield put(getRequest({ requestId: id }));
  } catch (error) {
    yield put(changeRequestActiveFailure({
      error: error as Error,
      message: {
        text: 'errors:error',
      },
    }));
  }
}

function* fetchRequestSaga() {
  yield all([
    takeLatest(types.GET_REQUEST_REQUEST, fetchRequest),
    takeLatest(types.DELETE_REQUEST_REQUEST, deleteRequest),
    takeLatest(types.CHANGE_REQUEST_ACTIVE_REQUEST, changeRequestActive),
  ]);
}

export default fetchRequestSaga;
