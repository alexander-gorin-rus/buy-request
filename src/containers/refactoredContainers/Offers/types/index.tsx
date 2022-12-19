import { IBaseCardData } from '../../../../components/Card/types';
import { IDefaultAction, IMedia, IPageInfo } from '../../../../core/types';
import { OfferStatus } from '../../../../utils/constants';

export interface IOfferCardData extends IBaseCardData {
  status: OfferStatus;
}
export interface IOfferCardProps {
  offer: IOfferCard;
}
export interface IFilterValues {
  status: string;
}

export interface IOfferCard extends IOfferCardData {
  media: IMedia[];
  cover?: string;
}

export interface IOffersState {
  offers: IOfferCard[] | null | undefined;
  pageInfo: IPageInfo | null | undefined;
}

export interface IGetOffersPayload {
  page?: number;
  perPage?: number;
}

export interface IOffersPayload extends IOffersState {}

export interface IGetOffers extends IDefaultAction<string, IGetOffersPayload> {}
export interface IGetOffersSuccess extends IDefaultAction<string, IOffersPayload> {}

export type GetOffersActions = IGetOffersSuccess;
