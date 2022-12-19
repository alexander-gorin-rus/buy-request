import { AppState } from '../../../../core/reducers';

export const getConsumerProfileSelector = (state: AppState) => state.consumerProfile.profile;
export const getRatingsSelector = (state: AppState) => state.consumerProfile.ratings;
