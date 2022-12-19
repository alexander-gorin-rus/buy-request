import {
  IDefaultPromiseAction, IDefaultAction, IRequest, IMedia, ITag,
} from '../../../../core/types';
import { TypeUser } from '../../../../utils/constants';

export interface IOffer {
  status: string;
  description: string;
  title: string;
  price: string;
  id: string;
  authorId: string;
  userId: string;
  requestId: string;
  additionalConditions: string;
  createdAt: string;
  media?: IMedia[] | [];
  product: {
    tags: string[];
    tagsData: ITag[];
  };
  authorRating: {
    userRating: number;
  };
  offerAuthor: {
    name: string;
    surname: string;
    avatar: string
  };
}

export interface IOfferState {
  offer: IOffer | null | undefined;
  requestData: IRequest | null | undefined;
}

export interface IGetOfferPayload {
  offerId: string | undefined;
  type: TypeUser;
}

export type IOfferPayload = {
  offer: IOffer | null | undefined;
  requestData?: IRequest | null | undefined
};

export type CreateDealPayload = {
  additionalConditions?: string;
  consumerId: string;
  offerId: string;
  requestId: string;
  sellerId: string;
};

export interface ISingleOfferProps {
  data: IOffer;
  onClose?: () => void;
}

export interface IRejectOfferByConsumerState {
  isSuccess: boolean;
  error: string | null | undefined;
}

export interface IRejectOfferByConsumerPayload {
  id: string;
  description: string;
}

export interface IRejectOfferBySellerPayload {
  id: string;
  description: string;
}

export interface IRequestDataRequestSuccessPayload {
  requestData: IRequest | null;
}

export interface ICreateDealPromiseAction
  extends IDefaultPromiseAction<string, CreateDealPayload> {}

export interface IGetOffer extends IDefaultAction<string, IGetOfferPayload> {}

export interface IGetOfferSuccess extends IDefaultAction<string, IOfferPayload> {}

export type CreateOfferActions = IGetOfferSuccess;

export interface IRejectOfferByConsumerAction
  extends IDefaultAction<string, IRejectOfferByConsumerPayload> {}

export interface IRejectOfferBySellerAction
  extends IDefaultAction<string, IRejectOfferBySellerPayload> {}

export interface IRejectOfferByConsumerPromiseAction
  extends IDefaultPromiseAction<string, IRejectOfferByConsumerPayload> {}
