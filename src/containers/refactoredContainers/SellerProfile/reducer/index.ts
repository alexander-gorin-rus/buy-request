import types from '../../../../core/actionTypes';
import { ISellerProfileState, SellerProfileActions } from '../types';

const initialState: ISellerProfileState = {
  profile: null,
  tags: [],
  ratings: null,
  avatarUrl: null,
};

export default (
  state: ISellerProfileState = initialState,
  action: SellerProfileActions,
): ISellerProfileState => {
  const { type, payload } = action;
  switch (type) {
    case types.SAVE_SELLER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload?.profile,
      };
    case types.FETCH_SELLER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload?.profile,
        tags: payload?.tags || null,
        ratings: payload?.ratings || null,
      };
    case types.CLEAR_SELLER_PROFILE:
      return initialState;
    default:
      return {
        ...state,
      };
  }
};
