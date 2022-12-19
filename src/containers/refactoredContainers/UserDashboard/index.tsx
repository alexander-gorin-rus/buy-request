import React, { VFC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { APP_ROUTES } from 'src/core/appRoutes';
import { isCurrentUserConsumerSelector, isCurrentUserSellerSelector } from 'src/core/selectors';

import BenefitsBanner from 'src/components/BenefitsBanner';
import Header from './components/Header';
import WorkFlow from './components/WorkFlow';
import SuitableProducts from './components/SuitableProducts';
import NewProducts from './components/NewProducts';
import { BodyContentWrapper } from './styles';

const UserDashboard: VFC = memo(() => {
  const navigate = useNavigate();
  const isCurrentUserConsumer = useSelector(isCurrentUserConsumerSelector);
  const isCurrentUserSeller = useSelector(isCurrentUserSellerSelector);

  const handerStartBuyRequest = useCallback(() => {
    if (isCurrentUserConsumer) {
      navigate(APP_ROUTES.CREATE_REQUEST);
    } else if (isCurrentUserSeller) {
      navigate(APP_ROUTES.REQUEST_MARKETPLACE);
    }
  }, [isCurrentUserSeller, isCurrentUserConsumer]);

  return (
    <>
      <Header
        currentUserConsumer={isCurrentUserConsumer}
        onClick={handerStartBuyRequest}
      />
      <BodyContentWrapper>
        {isCurrentUserConsumer && <NewProducts />}
        {isCurrentUserSeller && <SuitableProducts />}
        <BenefitsBanner marginTop="64px" consumer={isCurrentUserConsumer} />
        <WorkFlow currentUserConsumer={isCurrentUserConsumer} />
      </BodyContentWrapper>

    </>
  );
});

export default UserDashboard;
