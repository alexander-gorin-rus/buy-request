import { combineReducers } from 'redux';
import resetPassword from 'src/containers/refactoredContainers/ResetPassword/reducer';
import profile from 'src/containers/refactoredContainers/Profile/reducer';
import profileSettings from 'src/containers/refactoredContainers/ProfileSettings/reducer';
import currentClientRequests from '../../containers/refactoredContainers/ClientRequests/reducer';
import login from '../../containers/refactoredContainers/Login/reducer';
import register from '../../containers/refactoredContainers/Register/reducer';
import requests from '../../containers/refactoredContainers/Requests/reducer';
import request from '../../containers/refactoredContainers/Request/reducer';
import offer from '../../containers/refactoredContainers/Offer/reducer';
import offers from '../../containers/refactoredContainers/Offers/reducer';
import feedbackForm from '../../containers/refactoredContainers/FeedbackForm/reducer';
import sellerProfile from '../../containers/refactoredContainers/SellerProfile/reducer';
import sellerRecommendedRequests from '../../containers/refactoredContainers/SellerRecommendedRequests/reducer';
import consumerProfile from '../../containers/refactoredContainers/UserProfile/reducer';
import account from './shared/account';
import componentLoading from './shared/componentLoading';
import loading from './shared/loading';
import notifications from '../layouts/common/Navbar/components/Notifications/reducer';
import productFrom from '../../components/ProductForm/reducer';
import report from '../../containers/refactoredContainers/Report/reducer';
import creatingOffer from '../../containers/refactoredContainers/CreatingOffer/reducer';
import catalog from '../../containers/refactoredContainers/Catalog/reducer';
import dealCard from '../../components/DealCard/reducer';
import productDetail from '../../containers/refactoredContainers/ProductDetail/reducer';
import deals from '../../containers/refactoredContainers/DealList/reducer';
import notificationsCenter from '../../containers/refactoredContainers/NotificationCenter/reducer';
import chatCompanionUser from '../../components/Chat/reducer';
import verifyEmail from '../../containers/refactoredContainers/VerifyEmailPage/reducer';
import requestForm from '../../components/RequestForm/reducer';
import editRequest from '../../containers/refactoredContainers/EditingRequest/reducer';

const rootReducer = combineReducers({
  loading,
  componentLoading,
  register,
  account,
  consumerProfile,
  login,
  sellerProfile,
  requests,
  request,
  offer,
  offers,
  feedbackForm,
  currentClientRequests,
  sellerRecommendedRequests,
  creatingOffer,
  notifications,
  productFrom,
  catalog,
  report,
  dealCard,
  productDetail,
  deals,
  notificationsCenter,
  chatCompanionUser,
  verifyEmail,
  requestForm,
  editRequest,
  resetPassword,
  profile,
  profileSettings,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
