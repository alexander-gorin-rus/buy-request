import { AppState } from '../../../../core/reducers';

export const getCatalogSelector = (state: AppState) => state.catalog.request;
