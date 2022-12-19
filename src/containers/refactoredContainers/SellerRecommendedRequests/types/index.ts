import {
  IDefaultAction, IPageInfo, IRequestCard,
} from '../../../../core/types';

export interface ISellerRequestFeedNotice {
  isRequests: boolean;
  isSubscribedTags: boolean;
}

export interface IRequestPayload {
  page: number;
  perPage: number;
}

export interface IClientRequestsState {
  requests: IRequestCard[] | null | undefined;
  pageInfo: IPageInfo | null | undefined;
  tags: string[] | null | undefined;
}

export interface ISuccessPayload {
  requests: IRequestCard[];
  pageInfo: IPageInfo;
  tags: string[] | null | undefined;
}

export interface IFetchRequests extends IDefaultAction<string, IRequestPayload> {}
export interface IFetchRequestsSuccess extends IDefaultAction<string, ISuccessPayload> {}

export interface RecommendedRequestsAction {
  type: string,
  payload: {
    page?: number;
    perPage?: number;
    requests?: IRequestCard[];
    pageInfo?: IPageInfo;
    tags: string[] | null | undefined;
  }
}
