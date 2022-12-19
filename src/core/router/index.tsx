import React, {
  memo, VFC,
} from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import SellerLandingPage from 'src/components/SellerLandingPage';
import NotFoundPage from 'src/containers/refactoredContainers/404Page';
import Catalog from 'src/containers/refactoredContainers/Catalog';
import NotificationCenter from 'src/containers/refactoredContainers/NotificationCenter';
import ProductDetail from 'src/containers/refactoredContainers/ProductDetail';
import CreatingOffer from 'src/containers/refactoredContainers/CreatingOffer';
import DealList from 'src/containers/refactoredContainers/DealList';
import CreatingProduct from 'src/containers/refactoredContainers/CreatingProduct';
import CreatingRequest from 'src/containers/refactoredContainers/CreatingRequest';
import Deal from 'src/containers/refactoredContainers/Deal';
import Login from 'src/containers/refactoredContainers/Login';
import Offers from 'src/containers/refactoredContainers/Offers';
import Offer from 'src/containers/refactoredContainers/Offer';
import Register from 'src/containers/refactoredContainers/Register';
import Requests from 'src/containers/refactoredContainers/Requests';
import SellerProfile from 'src/containers/refactoredContainers/SellerProfile';
import Request from 'src/containers/refactoredContainers/Request';
import Profile from 'src/containers/refactoredContainers/Profile';
import ProfileSettings from 'src/containers/refactoredContainers/ProfileSettings';
import ProfileAvatarSettings from 'src/containers/refactoredContainers/ProfileAvatarSettings';
import CheckTracking from 'src/containers/refactoredContainers/CheckTracking';
import EditingRequest from 'src/containers/refactoredContainers/EditingRequest';
import ResetPassword from 'src/containers/refactoredContainers/ResetPassword';
import VerifyEmailPage from 'src/containers/refactoredContainers/VerifyEmailPage';
import ConsumerLandingPage from 'src/containers/refactoredContainers/ConsumerLandingPage';
import UserDashboard from 'src/containers/refactoredContainers/UserDashboard';
import EditingProduct from 'src/containers/refactoredContainers/ProductDetail/components/EditProduct';
import License from 'src/containers/refactoredContainers/License';
import Rules from 'src/containers/refactoredContainers/Rules';
import {
  ProfileGuard,
  ConsumerGuard,
  RegisteredUsersGuard,
  SellerGuard,
  UnregisteredUsersGuard,
} from '../guards';
import { APP_ROUTES } from '../appRoutes';
import BaseLayout from '../layouts/common/baseLayout/index';
import { BodyContainer } from '../layouts/common/baseLayout/styles';

const Router: VFC = memo(() => (
  <BaseLayout>
    <Routes>
      <Route
        path={APP_ROUTES.MAIN}
        element={(
          <RegisteredUsersGuard>
            <ConsumerLandingPage />
          </RegisteredUsersGuard>
          )}
      />
      <Route
        path={APP_ROUTES.VERIFY_EMAIL}
        element={(
          <RegisteredUsersGuard>
            <VerifyEmailPage />
          </RegisteredUsersGuard>
          )}
      />
      <Route
        path={APP_ROUTES.MARKET}
        element={(
          <SellerLandingPage />
        )}
      />
      <Route
        path={APP_ROUTES.REGISTER}
        element={(
          <RegisteredUsersGuard>
            <Register />
          </RegisteredUsersGuard>
          )}
      />
      <Route
        path={APP_ROUTES.LOGIN}
        element={(
          <RegisteredUsersGuard>
            <Login />
          </RegisteredUsersGuard>
          )}
      />
      <Route
        path={APP_ROUTES.RESET_PASSWORD}
        element={(
          <RegisteredUsersGuard>
            <ResetPassword />
          </RegisteredUsersGuard>
          )}
      />
      <Route
        path="*"
        element={(
          <NotFoundPage />
          )}
      />
      <Route
        path={APP_ROUTES.DASHBOARD}
        element={(
          <UnregisteredUsersGuard>
            <UserDashboard />
          </UnregisteredUsersGuard>
          )}
      />
      <Route
        path={APP_ROUTES.PROFILE}
        element={(
          <UnregisteredUsersGuard>
            <BodyContainer>
              <ProfileGuard>
                <Profile />
              </ProfileGuard>
            </BodyContainer>
          </UnregisteredUsersGuard>
        )}
      />
      <Route
        path={APP_ROUTES.PROFILE_SETTINGS}
        element={(
          <UnregisteredUsersGuard>
            <BodyContainer>
              <ProfileGuard>
                <ProfileSettings />
              </ProfileGuard>
            </BodyContainer>
          </UnregisteredUsersGuard>
        )}
      />
      <Route
        path={APP_ROUTES.PROFILE_AVATAR_SETTINGS}
        element={(
          <UnregisteredUsersGuard>
            <BodyContainer>
              <ProfileGuard>
                <ProfileAvatarSettings />
              </ProfileGuard>
            </BodyContainer>
          </UnregisteredUsersGuard>
        )}
      />
      <Route
        path={APP_ROUTES.PROFILE_SELLER}
        element={(
          <UnregisteredUsersGuard>
            <SellerGuard>
              <SellerProfile />
            </SellerGuard>
          </UnregisteredUsersGuard>
        )}
      />

      <Route path={APP_ROUTES.REQUESTS_BASE_ROUTE} element={<Outlet />}>
        <Route
          path="*"
          element={(
            <BodyContainer>
              <Requests />
            </BodyContainer>
          )}
        />
        <Route
          path=":requestId"
          element={(
            <BodyContainer withNavigation>
              <Request />
            </BodyContainer>
          )}
        />
        <Route
          path="create"
          element={(
            <UnregisteredUsersGuard>
              <ConsumerGuard>
                <BodyContainer>
                  <CreatingRequest />
                </BodyContainer>
              </ConsumerGuard>
            </UnregisteredUsersGuard>
          )}
        />
        <Route
          path=":requestId/edit"
          element={(
            <UnregisteredUsersGuard>
              <ConsumerGuard>
                <BodyContainer>
                  <EditingRequest />
                </BodyContainer>
              </ConsumerGuard>
            </UnregisteredUsersGuard>
          )}
        />

      </Route>
      <Route path={APP_ROUTES.OFFERS_BASE_ROUTE} element={<Outlet />}>
        <Route
          path="*"
          element={(
            <UnregisteredUsersGuard>
              <BodyContainer>
                <Offers />
              </BodyContainer>
            </UnregisteredUsersGuard>
          )}
        />
        <Route
          path=":offerId"
          element={(
            <UnregisteredUsersGuard>
              <BodyContainer>
                <Offer />
              </BodyContainer>
            </UnregisteredUsersGuard>
        )}
        />

        <Route
          path="create/:requestId"
          element={(
            <UnregisteredUsersGuard>
              <SellerGuard>
                <BodyContainer>
                  <CreatingOffer />
                </BodyContainer>
              </SellerGuard>
            </UnregisteredUsersGuard>
        )}
        />
      </Route>
      <Route path={APP_ROUTES.DEALS_BASE_ROUTE} element={<Outlet />}>
        <Route
          path="*"
          element={(
            <UnregisteredUsersGuard>
              <BodyContainer>
                <DealList />
              </BodyContainer>
            </UnregisteredUsersGuard>
          )}
        />
        <Route
          path=":dealId"
          element={(
            <UnregisteredUsersGuard>
              <BodyContainer withNavigation>
                <Deal />
              </BodyContainer>
            </UnregisteredUsersGuard>
          )}
        />

      </Route>
      <Route path={APP_ROUTES.CATALOG_BASE_ROUTE} element={<Outlet />}>
        <Route
          path="*"
          element={(
            <UnregisteredUsersGuard>
              <BodyContainer>
                <Catalog />
              </BodyContainer>
            </UnregisteredUsersGuard>
            )}
        />
        <Route
          path="create"
          element={(
            <UnregisteredUsersGuard>
              <SellerGuard>
                <BodyContainer>
                  <CreatingProduct />
                </BodyContainer>
              </SellerGuard>
            </UnregisteredUsersGuard>
            )}
        />
        <Route
          path=":productId"
          element={(
            <UnregisteredUsersGuard>
              <BodyContainer withNavigation>
                <ProductDetail />
              </BodyContainer>
            </UnregisteredUsersGuard>
            )}
        />
        <Route
          path=":productId/edit"
          element={(
            <UnregisteredUsersGuard>
              <BodyContainer>
                <EditingProduct />
              </BodyContainer>
            </UnregisteredUsersGuard>
          )}
        />
      </Route>

      <Route
        path={APP_ROUTES.CHECK_TRACKING_ROUTE}
        element={(
          <CheckTracking />
          )}
      />

      <Route
        path={APP_ROUTES.NOTIFICATIONS}
        element={(
          <UnregisteredUsersGuard>
            <BodyContainer>
              <NotificationCenter />
            </BodyContainer>
          </UnregisteredUsersGuard>
        )}
      />

      <Route
        path={APP_ROUTES.LICENSE}
        element={(
          <BodyContainer>
            <License />
          </BodyContainer>
          )}
      />

      <Route
        path={APP_ROUTES.RULES}
        element={(
          <BodyContainer>
            <Rules />
          </BodyContainer>
          )}
      />

    </Routes>
  </BaseLayout>
));

export default Router;
