import { AppState } from '../../../../core/reducers';

export const getSuccessSelector = (state: AppState) => state.report.isSuccess;
