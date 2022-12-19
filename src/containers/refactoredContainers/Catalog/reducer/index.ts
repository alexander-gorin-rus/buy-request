import types from '../../../../core/actionTypes';
import { IGetCatalogSuccessAction, ICatalogState } from '../types';

const initialState: ICatalogState = {
  request: null,
};

export default (
  state: ICatalogState = initialState,
  action: IGetCatalogSuccessAction,
): ICatalogState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CATALOG_SUCCESS:
      return {
        ...state,
        request: payload?.request || null,
      };
    case types.CLEAR_CATALOG:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
