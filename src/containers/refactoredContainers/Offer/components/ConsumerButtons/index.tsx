import React, { memo, VFC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { CustomStyledButton } from '../../../../../components/CustomStyledButton';
import { APP_ROUTES } from '../../../../../core/appRoutes';
import { getCurrentUserSelector } from '../../../../../core/selectors';
import dispatchPromise from '../../../../../utils/helpers';
import { cancelOfferByConsumer, createDealRequest } from '../../actions/actions';
import { CustomStyledButtonWrapper } from '../../styles';
import { ISingleOfferProps } from '../../types';

const ConsumerButtons: VFC<ISingleOfferProps> = memo(({ data }) => {
  const { t } = useTranslation('offer');
  const currentUser = useSelector(getCurrentUserSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    requestId,
    authorId,
    id,
    description,
  } = data;

  const handleCreateDeal = () => {
    if (data && currentUser) {
      dispatchPromise<string>(dispatch, createDealRequest({
        requestId,
        offerId: id,
        sellerId: authorId,
        consumerId: currentUser.id,
      })).then((dealId: string) => {
        navigate(`${APP_ROUTES.DEAL_CONFIRMATION}/${dealId}`);
      });
    }
  };

  const handleRejectOffer = () => {
    dispatchPromise<string>(dispatch, cancelOfferByConsumer({
      id,
      description,
    })).then(() => {
      navigate(APP_ROUTES.OFFERS);
    });
  };

  return (
    <>
      <CustomStyledButtonWrapper>
        <CustomStyledButton
          size="large"
          onClick={handleRejectOffer}
        >
          {t('refuse')}
        </CustomStyledButton>
      </CustomStyledButtonWrapper>
      <CustomStyledButtonWrapper>
        <CustomStyledButton
          size="large"
          primary
          onClick={handleCreateDeal}
        >
          {t('makeDeal')}
        </CustomStyledButton>
      </CustomStyledButtonWrapper>
    </>
  );
});

export default ConsumerButtons;
