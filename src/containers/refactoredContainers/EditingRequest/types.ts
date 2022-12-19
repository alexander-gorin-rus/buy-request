import {
  IDefaultAction,
  IRequest,
  IDefaultErrorPayload,
  IDefaultPromiseAction,
  IMedia,
} from '../../../core/types';

export interface IGetRequestPayload {
  id: string;
}

export interface IGetRequestSuccessPayload {
  request: IRequest,
}

export interface IUpdateRequestPayload {
  request: IUpdatingRequest,
}

export interface IRequestState {
  request: IRequest | null;
}

export interface IUpdatingRequest {
  tags: string[];
  budget: number;
  description: string;
  product?: string[];
  media: IMedia[];
  title: string;
}

export interface IGetRequestAction extends IDefaultAction<string, IGetRequestPayload> {}

export interface IGetRequestSuccessAction
  extends IDefaultAction<string, IGetRequestSuccessPayload> {}

export interface IGetRequestFailureAction
  extends IDefaultAction<string, IDefaultErrorPayload> {}

export interface IUpdateRequestAction
  extends IDefaultPromiseAction<string, IUpdateRequestPayload> {}

export interface IUpdateRequestFailureAction
  extends IDefaultAction<string, IDefaultErrorPayload> {}
