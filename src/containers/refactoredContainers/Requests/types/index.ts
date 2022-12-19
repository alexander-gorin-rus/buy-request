import { IBaseCardData } from '../../../../components/Card/types';
import {
  IDefaultAction, ISortItem, IPageInfo, IRequestCard,
} from '../../../../core/types';
import { RequestStatus } from '../../../../utils/constants';

export interface IRequestCardProps {
  data: IRequestCard;
}

export interface IGetRequestsSuccessPayload {
  requests: IPagedRequests;
}

export interface IPagedRequests {
  pageInfo: IPageInfo;
  data: IRequestCard[] | [];
}

export interface IFilterValues {
  status: string;
}

export interface IRequestCardData extends IBaseCardData {
  status: RequestStatus;
}

export interface IRequestsPageState {
  requests: IPagedRequests | null;
}

export interface IGetRequestListPayload {
  page: number;
  perPage: number;
  sort: ISortItem[];
  statuses?: string[];
}

export interface IFilter {
  tag?: string;
  sortBy: string;
}

export interface IGetRequestsAction
  extends IDefaultAction<string, IGetRequestListPayload> {}
export interface IGetRequestsSuccessAction
  extends IDefaultAction<string, IGetRequestsSuccessPayload> {}
