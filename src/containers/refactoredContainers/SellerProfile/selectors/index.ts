import { AppState } from '../../../../core/reducers';

export const getSellerProfileSelector = (state: AppState) => state.sellerProfile.profile;
export const getTagsSelector = (state: AppState) => state.sellerProfile.tags;
export const getRatingsSelector = (state: AppState) => state.sellerProfile.ratings;
