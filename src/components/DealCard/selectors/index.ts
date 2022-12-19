import { createSelector } from 'reselect';

import { AppState } from '../../../core/reducers';

const getLoading = (state: AppState) => state.dealCard.isLoading;
const getError = (state: AppState) => state.dealCard.error;
const getDeal = (state: AppState) => state.dealCard.deal;

export const getLoadingSelector = createSelector(getLoading, (loading) => loading);
export const getErrorSelector = createSelector(getError, (error) => error);
export const getDealSelector = createSelector(getDeal, (deal) => deal);
