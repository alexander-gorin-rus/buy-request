import {
  DealStatus, MessageTypes, OrderBy, RequestStatus, TypeUser,
} from 'src/utils/constants';
import { IAutocompleteItem } from 'src/components/CustomAutocomplete/types';

export interface IDispatchPromise {
  resolve?: (param?: any) => void;
  reject?: (param?: any) => void;
}

export interface IPageInfo {
  page: number;
  perPage: number;
  totalCount: number;
  totalPageCount: number;
}

export interface IGetListPayload {
  page: number;
  perPage: number;
  sort: ISortItem[];
  statuses?: string[];
  tags?: ITag[];
}

export interface IDefaultPromiseAction<T, P> extends IDispatchPromise {
  type: T;
  payload: P;
}

export interface IDefaultAction<T, P> {
  type: T;
  payload: P;
}

export interface IAny {
  [key: string]: any;
}

export interface ICurrentUserPayload {
  currentUser: null | undefined | IAny;
}

export interface ITag {
  id: string;
  name: string;
  titleEn: string;
  titleRu: string;
}

export interface IDeal {
  consumerId: string;
  sellerId: string;
  offerId: string;
  additionalConditions: string;
  status: DealStatus;
  request: {
    id: string;
    title: string;
    budget: number;
    tags: string[];
    tagsData: ITag[];
    description: string;
    requestAuthor: {
      avatar: string;
      name: string;
      surname: string;
    }
  };
  offer: {
    media: IMedia[];
    title: string;
    tags: string[];
    cover: string;
    offerAuthor: {
      avatar: string;
      name: string;
      surname: string;
    }
    product: {
      media: string;
      name: string;
      tagsData: ITag[];
    };
    price: string;
    description: string;
  };
  rating: {
    data: {
      authorId: string
    }[]
  }
}

export interface IProductData {
  id: string;
  production: string;
  name: string;
  model: string;
  tags: string[] | [];
  tagsData?: ITag[];
  productionGuarantee: string;
  description: string;
  media: IMedia[] | [];
  cover: string;
  userId: string;
  createdAt: string;
}

export interface IUpdateProductData {
  production: string;
  name: string;
  model: string;
  tags: string[] | [];
  productionGuarantee: string;
  description: string;
  media: IMedia[] | [];
  cover: string;
  userId: string;
  createdAt: string;
}

export interface IProduct extends IAutocompleteItem {
  id: string;
  name: string;
  model: string;
  tags: string[];
  media: IMedia[];
}

export interface IRequest {
  id?: string;
  description: string;
  tags: string[];
  tagsData: ITag[];
  products: IProduct[];
  budget: number;
  createdAt: string;
  title: string;
  status: RequestStatus;
  ratingUser: IUserRating;
  requestAuthor: IRequestAuthor;
  readyForAnalogues: boolean;
  media: IMedia[];
  cover: string;
  userId?: string;
}

export type IRequestCard = Omit<IRequest, 'ratingUser' | 'requestAuthor' | 'id'> & { id: string };

export interface IRequestList {
  data: IRequest;
}

export interface IProductFilter {
  myOwnProduct?: boolean;
  orderBy?: string;
  orderName?: string;
  page?: number;
  perPage?: number;
  productId?: string;
}

export interface ISortItem {
  orderBy: OrderBy;
  orderName: string;
}

export interface ISort {
  sort: ISortItem[]
}

export interface IUserRating {
  userRating: number;
}

export interface IRequestAuthor {
  id: string;
  name: string;
  surname: string;
  avatar: string
}

export interface ICurrentUser {
  email: string;
  id: string;
  name: string;
  type: TypeUser;
  avatar: string;
}

export interface PayloadWithError {
  error?: string | string[] | null,
}

export interface IMedia extends IDefaultMedia {
  id: string;
  preview?:string;
  file?: File;
  imageWidth?: number;
  imageHeight?: number;
  imagePixelsCount?: number;
  fileSize?:number;
}

export interface IDefaultMedia {
  fileNameMinio: string;
  fileOriginalName: string;
  mimetype: string;
  bucket?: string;
}

export interface IFileResponse extends IMedia {
  fileBuffer: any;
  resultInfo: {
    isSuccess: boolean;
    message?: string;
  }
}
export interface IDefaultErrorPayload {
  error: Error,
  message: {
    text: string;
  }
}

export interface IResponse {
  isSuccess: boolean;
}

export interface IDeleteFileResponse {
  resultInfo: {
    isSuccess: boolean;
    message: string;
  }
}

export type SortDir = 'asc' | 'desc';

export interface IInputsWrapperProps {
  isRegisterPage?: boolean;
}

export interface IDefaultResponsePayload {
  message: {
    type: MessageTypes,
    text: string,
  },
}

export interface ITotalCount {
  pageInfo: {
    totalCount: number
  }
}

export interface IRating {
  authorId: string,
  comment: string,
  createdAt: string,
  entityId: string,
  entityName: string,
  id: string,
  updatedAt: string,
  value: number,
}

export interface IIconProps {
  onClick?: () => void;
}

export interface IMediaValidator {
  file: File,
  width: number,
  height: number,
}
