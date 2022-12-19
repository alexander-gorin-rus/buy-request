import { AppState } from 'src/core/reducers';

export const getProductSelector = (state: AppState) => state.productDetail.product;
export const getIsRemovalLoaderSelector = (state: AppState) => state.productDetail.isRemovalLoader;
