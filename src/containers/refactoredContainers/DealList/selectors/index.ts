import { AppState } from '../../../../core/reducers';

export const getDealListSelector = (state: AppState) => state.deals.request;
