import types from '../../../../core/actionTypes';
import { ConsumerProfileActions, IConsumerProfileState } from '../types';

const initialState: IConsumerProfileState = {
  profile: null,
  ratings: null,
  avatarUrl: null,
};

export default (
  state: IConsumerProfileState = initialState,
  action: ConsumerProfileActions,
): IConsumerProfileState => {
  const { type, payload } = action;
  switch (type) {
    case types.SAVE_CONSUMER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload?.profile || null,
      };
    case types.FETCH_CONSUMER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload?.profile || null,
        ratings: payload?.ratings || null,
        avatarUrl: payload?.avatarUrl || null,
      };
    case types.CLEAR_CONSUMER_PROFILE:
      return initialState;
    default:
      return {
        ...state,
      };
  }
};
