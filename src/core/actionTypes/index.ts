import clientRequestList from '../../containers/refactoredContainers/ClientRequests/actions/actionTypes';
import creatingRequest from '../../containers/refactoredContainers/CreatingRequest/actions/actionTypes';
import dealList from '../../containers/refactoredContainers/DealList/actions/actionTypes';
import login from '../../containers/refactoredContainers/Login/actions/actionTypes';
import register from '../../containers/refactoredContainers/Register/actions/actionTypes';
import requests from '../../containers/refactoredContainers/Requests/actions/actionTypes';
import request from '../../containers/refactoredContainers/Request/actions/actionTypes';
import offer from '../../containers/refactoredContainers/Offer/actions/actionTypes';
import offers from '../../containers/refactoredContainers/Offers/actions/actionTypes';
import FeedbackForm from '../../containers/refactoredContainers/FeedbackForm/actions/actionTypes';
import deal from '../../containers/refactoredContainers/Deal/actions/actionTypes';
import profileSeller from '../../containers/refactoredContainers/SellerProfile/actions/actionTypes';
import notifications from '../layouts/common/Navbar/components/Notifications/actions/actionTypes';
import sellerRecommendedRequests from '../../containers/refactoredContainers/SellerRecommendedRequests/actions/actionTypes';
import profileUser from '../../containers/refactoredContainers/UserProfile/actions/actionTypes';
import core from '../actions/actionTypes';
import report from '../../containers/refactoredContainers/Report/actions/actionTypes';
import creatingOffer from '../../containers/refactoredContainers/CreatingOffer/actions/actionTypes';
import productForm from '../../components/ProductForm/actions/actionTypes';
import creatingProduct from '../../containers/refactoredContainers/CreatingProduct/actions/actionTypes';
import catalog from '../../containers/refactoredContainers/Catalog/actions/actionTypes';
import dealCard from '../../components/DealCard/actions/actionTypes';
import productDetail from '../../containers/refactoredContainers/ProductDetail/actions/actionTypes';
import notificationsCenter from '../../containers/refactoredContainers/NotificationCenter/actions/actionTypes';
import chatCompanionUser from '../../components/Chat/actions/actionTypes';
import resetPassword from '../../containers/refactoredContainers/ResetPassword/actions/actionTypes';
import verifyEmail from '../../containers/refactoredContainers/VerifyEmailPage/actions/actionTypes';
import getAvatar from '../../components/AvatarComponent/types/actionTypes';
import requestEdit from '../../containers/refactoredContainers/EditingRequest/actions/actionTypes';
import profile from '../../containers/refactoredContainers/Profile/actions/actionTypes';
import profileSetting from '../../containers/refactoredContainers/ProfileSettings/actions/actionTypes';

interface IRootActionTypes {
  [key: string]: string;
}

const rootActionTypes: IRootActionTypes = {
  ...core,
  ...register,
  ...profileUser,
  ...creatingRequest,
  ...login,
  ...profileSeller,
  ...requests,
  ...request,
  ...offer,
  ...FeedbackForm,
  ...offers,
  ...deal,
  ...clientRequestList,
  ...sellerRecommendedRequests,
  ...creatingOffer,
  ...notifications,
  ...productForm,
  ...creatingProduct,
  ...catalog,
  ...report,
  ...dealCard,
  ...productDetail,
  ...dealList,
  ...notificationsCenter,
  ...chatCompanionUser,
  ...resetPassword,
  ...verifyEmail,
  ...getAvatar,
  ...requestEdit,
  ...profile,
  ...profileSetting,
};

export default rootActionTypes;
