import { AppState } from '../../../../core/reducers';

export const getRequestsSelector = (state: AppState) => state.requests.requests;
