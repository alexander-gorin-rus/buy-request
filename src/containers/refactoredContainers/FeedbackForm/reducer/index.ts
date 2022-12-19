import { ICreatingFeedbackState, CreateFeedbackActions } from '../types';
import types from '../../../../core/actionTypes';

const initialState: ICreatingFeedbackState = {
  ratings: [],
};

export default (
  state: ICreatingFeedbackState = initialState,
  action: CreateFeedbackActions,
): ICreatingFeedbackState => {
  const { type } = action;
  switch (type) {
    case types.CREATE_FEEDBACK_REQUEST:
      return {
        ...state,
      };
    case types.CREATE_FEEDBACK_SUCCESS:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
