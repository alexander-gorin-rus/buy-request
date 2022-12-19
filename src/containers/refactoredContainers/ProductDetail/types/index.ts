import {
  IDefaultAction,
  IDefaultPromiseAction,
  IProductData, IUpdateProductData,
} from '../../../../core/types';

export interface IGetProductPayload {
  productId: string;
}

export interface IRemoveProductPayload {
  id: string | undefined;
}

export interface IUpdateProductPayload extends IProductData {
  id: string;
  userId: string;
  previousProduct: IUpdateProductData | null;
}

export interface IProductDetailState {
  product: IProductData | null;
  loading: any;
  isRemovalLoader: boolean;
}

export type IGetProductSuccessPayload = {
  product: IProductData;
};

export interface IGetProductAction {
  type: string,
  payload: IGetProductPayload
}

export interface IRemoveProductAction {
  type: string,
  payload: IRemoveProductPayload
}

export interface IUpdateProductAction {
  type: string,
  payload: IUpdateProductPayload
}

export interface IProductFormProps {
  productData: IProductData;
  redirectToEdit: () => void;
}

export interface IGetProductSuccessAction
  extends IDefaultAction<string, IGetProductSuccessPayload> {}

export interface IUpdateProductPromiseAction
  extends IDefaultPromiseAction<string, IUpdateProductPayload> {}

export interface IRemoveProductPromiseAction
  extends IDefaultPromiseAction<string, IRemoveProductPayload> {}
