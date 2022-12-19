import types from '../../../core/actionTypes';
import { IProductFormState, ActionTypes } from '../types';

const initialState: IProductFormState = {
  tags: [],
  isTagsLoading: false,
  error: null,
};

export default (
  state: IProductFormState = initialState,
  action: ActionTypes,
): IProductFormState => {
  const { type, payload } = action;
  switch (type) {
    case types.PRODUCT_FORM_TAGS_REQUEST:
      return {
        ...state,
        isTagsLoading: true,
      };
    case types.PRODUCT_FORM_TAGS_SUCCESS:
      return {
        ...state,
        isTagsLoading: false,
        tags: payload?.tags || [],
      };
    case types.PRODUCT_FORM_TAGS_FAILURE:
      return {
        ...state,
        isTagsLoading: false,
        error: payload?.error || null,
      };
    default:
      return {
        ...state,
      };
  }
};
