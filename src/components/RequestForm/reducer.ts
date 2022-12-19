import { ICreatingRequestState, CreateRequestActions } from './types';
import types from '../../core/actionTypes';

const initialState: ICreatingRequestState = {
  products: null,
  tags: null,
};

export default (
  state: ICreatingRequestState = initialState,
  action: CreateRequestActions,
): ICreatingRequestState => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_TAGS_AND_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload?.products,
        tags: payload?.tags,
      };
    case types.CLEAR_TAGS_AND_PRODUCTS:
      return {
        ...initialState,
      };

    default:
      return {
        ...state,
      };
  }
};
