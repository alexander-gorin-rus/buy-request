import types from 'src/core/actionTypes';
import { ProfileActions, IProfileState } from '../types';

const initialState: IProfileState = {
  profile: null,
  sellerProfile: null,
  tags: null,
  ratings: null,
};

export default (
  state: IProfileState = initialState,
  action: ProfileActions,
): IProfileState => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload?.profile || null,
      };
    case types.FETCH_SELLER_PROFILE_SUCCESS:
      return {
        ...state,
        sellerProfile: payload?.sellerProfile || null,
        tags: payload?.tags || null,
      };
    case types.FETCH_RATINGS_SUCCESS:
      return {
        ...state,
        ratings: payload?.ratings || null,
      };
    default:
      return {
        ...state,
      };
  }
};
