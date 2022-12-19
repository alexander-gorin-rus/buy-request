import { all, fork } from 'redux-saga/effects';
import profileSaga from 'src/containers/refactoredContainers/Profile/saga';
import profileSettingsSaga from 'src/containers/refactoredContainers/ProfileSettings/saga';
import currentClientRequestsSaga from '../../containers/refactoredContainers/ClientRequests/saga';
import createQuoteSaga from '../../containers/refactoredContainers/CreatingRequest/saga';
import offersSaga from '../../containers/refactoredContainers/Offers/saga';
import accountSaga from './shared/account';
import registerSaga from '../../containers/refactoredContainers/Register/saga';
import loginSaga from '../../containers/refactoredContainers/Login/saga';
import requestsSaga from '../../containers/refactoredContainers/Requests/saga';
import requestSaga from '../../containers/refactoredContainers/Request/saga';
import offerSaga from '../../containers/refactoredContainers/Offer/saga';
import createFeedbackSaga from '../../containers/refactoredContainers/FeedbackForm/saga';
import updateDealSaga from '../../containers/refactoredContainers/Deal/saga';
import sellerProfileSage from '../../containers/refactoredContainers/SellerProfile/saga';
import notificationsSaga from '../layouts/common/Navbar/components/Notifications/saga';
import sellerRecommendedRequestsSaga from '../../containers/refactoredContainers/SellerRecommendedRequests/saga';
import userProfileSaga from '../../containers/refactoredContainers/UserProfile/saga';
import reportSaga from '../../containers/refactoredContainers/Report/saga';
import creatingOfferSaga from '../../containers/refactoredContainers/CreatingOffer/saga';
import productFormSaga from '../../components/ProductForm/saga';
import createProductSaga from '../../containers/refactoredContainers/CreatingProduct/saga';
import catalogSaga from '../../containers/refactoredContainers/Catalog/saga';
import dealCardSaga from '../../components/DealCard/saga';
import productDetailSaga from '../../containers/refactoredContainers/ProductDetail/saga';
import dealListSaga from '../../containers/refactoredContainers/DealList/saga';
import notificationsCenterSaga from '../../containers/refactoredContainers/NotificationCenter/saga';
import allActionsListener from './shared/allActionListeners';
import chatCompanionUser from '../../components/Chat/saga';
import resetPasswordSaga from '../../containers/refactoredContainers/ResetPassword/saga';
import changePasswordSaga from '../../components/ChangePasswordModal/saga';
import verifyEmailSaga from '../../containers/refactoredContainers/VerifyEmailPage/saga';
import requestFormSaga from '../../components/RequestForm/saga';
import fetchRequestForEditSaga from '../../containers/refactoredContainers/EditingRequest/saga';

export default function* rootSaga() {
  yield all([
    fork(allActionsListener),
    fork(accountSaga),
    fork(registerSaga),
    fork(userProfileSaga),
    fork(profileSaga),
    fork(profileSettingsSaga),
    fork(createQuoteSaga),
    fork(loginSaga),
    fork(sellerProfileSage),
    fork(requestsSaga),
    fork(requestSaga),
    fork(offerSaga),
    fork(offersSaga),
    fork(createFeedbackSaga),
    fork(updateDealSaga),
    fork(currentClientRequestsSaga),
    fork(sellerRecommendedRequestsSaga),
    fork(creatingOfferSaga),
    fork(notificationsSaga),
    fork(productFormSaga),
    fork(createProductSaga),
    fork(catalogSaga),
    fork(reportSaga),
    fork(dealCardSaga),
    fork(productDetailSaga),
    fork(dealListSaga),
    fork(notificationsCenterSaga),
    fork(resetPasswordSaga),
    fork(changePasswordSaga),
    fork(chatCompanionUser),
    fork(verifyEmailSaga),
    fork(requestFormSaga),
    fork(fetchRequestForEditSaga),
  ]);
}
