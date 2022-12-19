import {
  IDefaultAction, ITag, ITotalCount, IRating, IPageInfo,
} from 'src/core/types';
import { TypeUser } from 'src/utils/constants';

export interface IReviewInfoItemProps {
  isGreen?: boolean;
}

export interface IReviewProps {
  rating: IProfileRating;
}

export interface IProfileRatings {
  data: IProfileRating[];
  pageInfo: IPageInfo;
}

export interface IProfileState {
  profile: IUserProfile | null;
  sellerProfile: ISellerProfileData | null;
  tags: ITag[] | null;
  ratings: IProfileRatings | null;
}

export interface IDealData {
  id: string;
  offer: {
    title: string;
  },
  request: {
    title: string
  }
}

export interface IProfileRating extends IRating {
  productName: string,
  dealName: string
}

export interface IProfileDeals {
  data: IDealData[]
  pageInfo: {
    totalCount: number
  }
}

export interface IUserProfile {
  deals: IProfileDeals,
  offers: ITotalCount,
  requests: ITotalCount,
  ratings: {
    data: IProfileRating[],
    pageInfo: IPageInfo,
    userRating: number
  };
  surname: string,
  name: string,
  avatar: string,
  email: string,
  id: string,
  type: TypeUser
}

export interface ISellerProfileData {
  company: string;
  subscribedTags: string[];
}

export interface IProfileData {
  profile: IUserProfile;
}

export interface ISaveTagsData {
  tags: string[];
}

export interface IFetchUserPayload {
  currentUserId: string;
}

export interface IFetchRatingsPayload {
  userId: string;
  page: number;
  perPage: number;
}

export interface IFetchUserSuccessPayload {
  profile: IUserProfile;
}

export interface IFetchRatingsSuccessPayload {
  ratings: IProfileRatings;
}

export interface ISetSellerSuccessPayload {
  sellerProfile: ISellerProfileData;
  tags: ITag[];
}

export interface ISaveTagsPayload {
  updatedData: ISaveTagsData;
  toggleEdit: () => void;
}

export interface IProfilePayload {
  sellerProfile?: ISellerProfileData;
  tags?: ITag[];
  profile?: IUserProfile;
  ratings?: IProfileRatings;
}

export interface ISaveTagsAction
  extends IDefaultAction<string, ISaveTagsPayload> {}

export interface IFetchUserAction
  extends IDefaultAction<string, IFetchUserPayload> {}

export interface IFetchRatingsAction
  extends IDefaultAction<string, IFetchRatingsPayload> {}

export type ProfileActions =
  IDefaultAction<string, IProfilePayload>;
