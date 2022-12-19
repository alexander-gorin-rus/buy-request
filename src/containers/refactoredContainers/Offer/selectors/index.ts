import { AppState } from '../../../../core/reducers';

export const getOfferSelector = (state: AppState) => state.offer.offer;

export const getOfferRequestDataSelector = (state: AppState) => state.offer.requestData;
