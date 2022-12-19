import { AppState } from '../../../../core/reducers';

export const getSellerRequestsPageInfoSelector = (
  state: AppState,
) => state.sellerRecommendedRequests.pageInfo;
export const getSellerRequestsSelector = (
  state: AppState,
) => state.sellerRecommendedRequests.requests;
export const getSellerTagsSelector = (
  state: AppState,
) => state.sellerRecommendedRequests.tags;
