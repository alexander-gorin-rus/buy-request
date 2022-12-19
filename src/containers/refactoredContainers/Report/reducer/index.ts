import { IReportState, ReportRequestActions } from '../types';
import types from '../../../../core/actionTypes';

const initialState = {
  isSuccess: false,
};

export default (state: IReportState = initialState, action: ReportRequestActions): IReportState => {
  const { type } = action;

  switch (type) {
    case types.SEND_REPORT_SUCCESS:
      return {
        ...state,
        isSuccess: true,
      };

    default:
      return {
        ...state,
      };
  }
};
