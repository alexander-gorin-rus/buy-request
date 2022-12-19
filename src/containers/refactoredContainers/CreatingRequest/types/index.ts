import {
  IDefaultAction, IDefaultPromiseAction, IMedia, ITag,
} from '../../../../core/types';
import { IAutocompleteItem } from '../../../../components/CustomAutocomplete/types';

export enum RequestType {
  CREATING_REQUEST = 'CREATING_REQUEST',
}

export interface ICreatingRequest {
  tags: string[];
  budget: number;
  description: string;
  isDraft: boolean;
  product?: string[];
  media: IMedia[];
  title: string;
}

export interface ICreatingRequestForm {
  title: string;
  tags: string[];
  products: string[];
  budget: number;
  description: string;
  media: IMedia[];
}

export interface IProduct extends IAutocompleteItem {
  id: string;
  name: string;
  model: string;
  tags: string[];
  media: IMedia[];
}

export interface ICreatingRequestState {
  products: IProduct[] | null | undefined;
  tags: ITag[] | null | undefined;
}

export type SuccessPayload = {
  products: IProduct[] | null | undefined;
  tags: ITag[] | null | undefined;
};

export interface ISetCreatingRequestPromise
  extends IDefaultPromiseAction<string, ICreatingRequest> {}
export interface ISetCreatingRequestSuccess extends IDefaultAction<string, SuccessPayload> {}

export type CreateRequestActions = ISetCreatingRequestSuccess;
