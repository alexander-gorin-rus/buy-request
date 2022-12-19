import { AppState } from '../../core/reducers';

export const getTagsSelector = (state: AppState) => state.requestForm.tags || [];
export const getProductsSelector = (state: AppState) => state.requestForm.products || [];
