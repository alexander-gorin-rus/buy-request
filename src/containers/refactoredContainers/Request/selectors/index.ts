import { AppState } from '../../../../core/reducers';

export const getRequestSelector = (state: AppState) => state.request.request;
