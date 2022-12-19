import { IDefaultAction, IPageInfo, IRequestCard } from '../../../../core/types';

export interface IGetClientRequests {
  page: number;
  perPage: number;
  error?: null;
  requests?: null;
}

export interface IPageRequests {
  pageInfo: IPageInfo
  data: IRequestCard[] | [];
}

export interface IClientRequestsState {
  requests: IPageRequests | null;
  pending: boolean;
}

export type Payload = {
  requests: IPageRequests,
  error?: null,
};

export type ErrorPayload = {
  error: string | string[],
  requests?: null;
};

export interface IGetRequests extends IDefaultAction<string, IGetClientRequests> {}
export interface IGetRequestsSuccess extends IDefaultAction<string, Payload> {}
export interface IGetRequestsFailure extends IDefaultAction<string, ErrorPayload> {}

export type CreateRequestActions =
  IGetRequests |
  IGetRequestsSuccess |
  IGetRequestsFailure;
