import { IDefaultPromiseAction } from 'src/core/types';

export type RequestPayload = {
  [key: string]: any,
};

export interface IReportForm {
  subject: string
  description: string
}

export interface IReportProps {
  entityId: string
  toggle: () => void
}

export interface IReportFormProps {
  entityId: string
  toggle: () => void
}

export interface IDefaultAction<T, P> {
  type: T;
  payload?: P;
}

export interface IReport {
  subject: string
  description: string
  entityId: string
  userId: string
}

export interface IReportState {
  isSuccess: boolean
}

export type SuccessPayload = {
  error?: null
  isSuccess?: boolean
};

export type ErrorPayload = {
  error: string | string[]
  isSuccess?: boolean
};

export interface IReportRequest extends IDefaultPromiseAction<string, RequestPayload> {}
export interface IReportRequestSuccess extends IDefaultAction<string, SuccessPayload> {}
export interface IReportRequestFailure extends IDefaultAction<string, ErrorPayload> {}

export type ReportRequestActions = IReportRequest | IReportRequestSuccess | IReportRequestFailure;
