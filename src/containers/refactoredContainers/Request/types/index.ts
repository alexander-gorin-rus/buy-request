import {
  IDefaultAction, IDefaultErrorPayload, IDefaultPromiseAction, IRequest,
} from '../../../../core/types';
import { RequestStatus } from '../../../../utils/constants';

export interface IRequestState {
  request: IRequest | null;
}

export interface IGetRequestPayload {
  requestId: string;
}

export type IGetRequestSuccessPayload = {
  request: IRequest,
};

export interface IRequestActionsProps {
  request: IRequest,
}
export interface IDeleteRequestPayload {
  id: string;
}
export interface IChangeRequestActivePayload {
  id: string;
  status: RequestStatus;
}

export interface IGetRequestAction
  extends IDefaultAction<string, IGetRequestPayload> {}
export interface IGetRequestSuccessAction
  extends IDefaultAction<string, IGetRequestSuccessPayload> {}

export interface IGetRequestFailureAction
  extends IDefaultAction<string, IDefaultErrorPayload> {}

export interface IDeleteRequestFailureAction
  extends IDefaultAction<string, IDefaultErrorPayload> {}

export interface IDeleteRequestAction
  extends IDefaultPromiseAction<string, IDeleteRequestPayload> {}

export interface IChangeRequestActiveAction
  extends IDefaultAction <string, IChangeRequestActivePayload> {}

export interface IChangeRequestActiveFailureAction
  extends IDefaultAction <string, IDefaultErrorPayload> {}
