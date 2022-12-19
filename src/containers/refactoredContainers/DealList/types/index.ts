import {
  IDefaultAction, IDefaultErrorPayload, IGetListPayload, IMedia, IPageInfo,
} from 'src/core/types';
import { DealStatus } from 'src/utils/constants';

export interface IDealListRequest {
  pageInfo: IPageInfo
  data: IDealListItem[] | [];
}

export interface IDealsState {
  request: IDealListRequest | null;
}

export interface IDealListItem {
  id: string;
  status: DealStatus;
  expiratedAt: string;
  createdAt: string;
  offer: {
    description: string;
    price: number;
    media: IMedia[] | null;
    cover: string;
    ratingUser: {
      userRating: number
    }
    product: {
      media: string;
      name: string;
    },
    offerAuthor: {
      avatar: string;
      name: string;
    }
  }
  request: {
    tags: string[];
    requestAuthor: {
      avatar: string;
      name: string;
    },
    ratingUser: {
      userRating: number
    }
  }
}

export interface IFilterValues {
  status: string;
}

export interface DealListItemProps {
  deal: IDealListItem;
}

export interface IDealListSuccessPayload {
  request: IDealListRequest;
}

export interface IGetDealListPayload extends IGetListPayload {
  statuses?: DealStatus[]
}
export interface IGetDealList extends IDefaultAction<string, IGetListPayload> {}
export interface IGetDealListSuccess extends IDefaultAction<string, IDealListSuccessPayload> {}
export interface IGetDealListFailure extends IDefaultAction<string, IDefaultErrorPayload> {}
