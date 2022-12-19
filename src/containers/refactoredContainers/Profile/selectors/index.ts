import { AppState } from 'src/core/reducers';

export const getProfileSelector = (state: AppState) => state.profile.profile;
export const getSellerProfileSelector = (state: AppState) => state.profile.sellerProfile;
export const getTagsSelector = (state: AppState) => state.profile.tags;
export const getRatingsSelector = (state: AppState) => state.profile.ratings;
