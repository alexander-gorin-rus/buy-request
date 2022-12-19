import { IProductData } from '../../../../core/types';

export interface ICreatingProductPayload {
  formData: IProductData;
  toggleModal: () => void;
  error?: string | null;
}

export interface ICreatingProductAction {
  type: string;
  payload: ICreatingProductPayload
}
