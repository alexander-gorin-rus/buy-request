import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { TypeUser } from '../../utils/constants';

export const getState = (state: AppState) => state;

export const getCurrentUserSelector = (state: AppState) => state.account.currentUser;

export const getLoadingSelector = (state: AppState) => state.loading;

export const getComponentLoadingSelector = (state: AppState) => state.componentLoading;

export const getCurrentClientRequestsSelector = (state: AppState) => (
  state.currentClientRequests.requests
);

export const isCurrentUserSellerSelector = createSelector(
  getCurrentUserSelector,
  (currentUser: any) => currentUser?.type === TypeUser.seller,
);

export const isCurrentUserConsumerSelector = createSelector(
  getCurrentUserSelector,
  (currentUser: any) => currentUser?.type === TypeUser.consumer,
);
