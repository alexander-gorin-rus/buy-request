import { ReactNode } from 'react';
import {
  IDefaultAction, IMedia, ITag, IProduct,
} from '../../core/types';

export interface IRequestForm {
  title: string;
  tags: string[];
  products: string[];
  budget: number;
  description: string;
  media: IMedia[];
}

export interface IRequestFormProps {
  onSubmit: (formValues: IRequestForm) => void;
  initialValues?: IRequestForm;
  children: ReactNode;
  isSubmitted?: boolean;
}

export interface IFetchTagsAndProductsSuccessPayload {
  products: IProduct[] | null | undefined;
  tags: ITag[] | null | undefined;
}

export interface ICreatingRequestState {
  products: IProduct[] | null | undefined;
  tags: ITag[] | null | undefined;
}

export interface ISetCreatingRequestSuccess
  extends IDefaultAction<string, IFetchTagsAndProductsSuccessPayload> {}

export type CreateRequestActions = ISetCreatingRequestSuccess;
