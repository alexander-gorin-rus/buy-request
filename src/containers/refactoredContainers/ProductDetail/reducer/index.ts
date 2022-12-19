import { getLoadingSelector } from 'src/core/selectors';
import types from 'src/core/actionTypes';
import { IProductDetailState, IGetProductSuccessAction } from '../types';

const initialState: IProductDetailState = {
  product: null,
  loading: getLoadingSelector,
  isRemovalLoader: false,
};

export default (
  state: IProductDetailState = initialState,
  action: IGetProductSuccessAction,
): IProductDetailState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload?.product || null,
        loading: null,
      };
    case types.SET_IS_REMOVAL_PRODUCT_LOADER:
      return {
        ...state,
        isRemovalLoader: !state.isRemovalLoader,
      };
    case types.CLEAR_PRODUCT:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
