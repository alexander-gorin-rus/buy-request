import types from 'src/core/actionTypes/index';
import {
  IReport,
  IReportRequest,
  IReportRequestSuccess,
} from '../types';

export const setReportRequest = (payload: IReport): IReportRequest => ({
  type: types.SEND_REPORT_REQUEST,
  payload,
});

export const setReportRequestSuccess = (): IReportRequestSuccess => ({
  type: types.SEND_REPORT_SUCCESS,
});
