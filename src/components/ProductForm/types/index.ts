import { ReactNode } from 'react';
import {
  IAny, IProductData, ITag,
} from '../../../core/types';

export interface IProductFormState {
  tags: ITag[] | [];
  isTagsLoading: boolean;
  error: string | null;
}

export type TagsSuccessPayload = {
  tags: ITag[],
  error?: string,
};

export type ErrorPayload = {
  error: string,
  tags?: ITag[],
};

export type ProductFormValues = Omit<IProductData, 'userId'>;

export interface IProductFormProps {
  onSubmit: (formData: ProductFormValues) => void;
  id: string;
  productData?: ProductFormValues | null;
  isEdit?: boolean;
  children?: ReactNode;
}

export interface ISetRequest<T, P> {
  type: T;
  payload?: P;
}

export interface IGetTagsAction
  extends ISetRequest<string, IAny> {}

export interface IGetTagsSuccessAction
  extends ISetRequest<string, TagsSuccessPayload> {}

export interface IGetTagsFailureAction
  extends ISetRequest<string, ErrorPayload> {}

export type ActionTypes = IGetTagsAction | IGetTagsSuccessAction | IGetTagsFailureAction;
