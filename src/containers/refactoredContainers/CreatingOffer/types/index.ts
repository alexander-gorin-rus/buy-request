import {
  IAny, IDefaultAction, IDefaultPromiseAction, IMedia, IRequest,
} from '../../../../core/types';

export interface IProduct {
  id: string;
  name: string;
  media: IMedia[];
}

export interface ICreatingOfferState {
  catalog: IProduct[] | [] | null;
  requestData: IRequest | null;
}

export interface ICreateOfferFormData {
  title: string;
  additionalConditions: string;
  description: string;
  price: number;
  product: string[] | null;
  media: IMedia[] | [];
}

export interface ICreateOfferPayload extends ICreateOfferFormData {
  requestId: string;
}
export interface IGetRequestDataPayload {
  requestId: string;
}

export interface ICatalogRequestSuccessPayload {
  catalog: IProduct[] | [] | null;
}

export interface IRequestDataRequestSuccessPayload {
  requestData: IRequest | null;
}

export interface IGetCatalogRequestSuccess
  extends IDefaultAction<string, IAny> {}

export interface ICreateOfferAction
  extends IDefaultAction<string, ICreateOfferPayload> {}

export interface ICreateOfferPromiseAction
  extends IDefaultPromiseAction<string, ICreateOfferPayload> {}

export interface IGetRequestDataAction
  extends IDefaultAction<string, IGetRequestDataPayload> {}
