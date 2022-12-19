import { IBaseCardData } from 'src/components/Card/types';
import {
  IDefaultAction, IGetListPayload, IMedia, IPageInfo, ISortItem,
} from 'src/core/types';

export interface ICatalogProduct {
  id: string;
  name: string;
  description: string;
  tags: string[];
  media: IMedia[];
  createdAt: string;
  cover: string;
  userId: string;
}

export interface IProductCardProps {
  product: ICatalogProduct;
}

export interface IFilterForm {
  myProducts: boolean;
}

export interface IProductCardData extends IBaseCardData {
  mark: string;
}

export interface IFilterProps {
  onClose: () => void;
  onSubmit: (e: IFilterValues) => void;
  initialValues?: {
    myProducts: boolean;
  }
}

export interface IFilterValues {
  myProducts: boolean;
}

export interface ICatalogRequest {
  pageInfo: IPageInfo
  data: ICatalogProduct[] | [];
}

export interface ICatalogState {
  request: ICatalogRequest | null;
}

export type IGetCatalogSuccessPayload = {
  request: ICatalogRequest;
};

export interface IGetCatalogPayload extends IGetListPayload {
  myOwnProduct: boolean;
  sort: ISortItem[];
}

export interface ICatalogContentProps {
  catalog: ICatalogRequest | null;
}

export interface IGetCatalogAction
  extends IDefaultAction<string, IGetCatalogPayload> {}

export interface IGetCatalogSuccessAction
  extends IDefaultAction<string, IGetCatalogSuccessPayload> {}
