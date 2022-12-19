import { AppState } from '../../../../core/reducers';

export const getOfferCatalogSelector = (state: AppState) => state.creatingOffer.catalog;

export const getOfferRequestDataSelector = (state: AppState) => state.creatingOffer.requestData;
