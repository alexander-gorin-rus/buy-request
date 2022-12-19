import { AppState } from '../../../../core/reducers';

export const getOffersSelector = (state: AppState) => state.offers.offers;
export const getOffersPageInfoSelector = (state: AppState) => state.offers.pageInfo;
