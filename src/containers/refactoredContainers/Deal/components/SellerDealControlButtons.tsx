import { Typography } from '@mui/material';
import React, { VFC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { CustomStyledButton } from '../../../../components/CustomStyledButton';
import { getDeal } from '../../../../components/DealCard/actions';
import Modal from '../../../../components/Modal';
import { APP_ROUTES } from '../../../../core/appRoutes';
import { DealStatus } from '../../../../utils/constants';
import dispatchPromise from '../../../../utils/helpers';
import { StyledModalContent } from '../../CreatingProduct/styles';
import { StyledModalControls } from '../../ProductDetail/styles';
import { setUpdateDeal } from '../actions/actions';
import {
  StyledControlsGroup,
} from '../styles';
import { DealControlButtonsProps } from '../types';

const SellerDealControlButtons: VFC<DealControlButtonsProps> = memo(({
  status, dealId, toggleFeedback, isVisibleEstimateButton,
}) => {
  const { t } = useTranslation(['common', 'deal']);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoadingDealCancel, setIsLoadingDealCancel] = useState(false);
  const [isLoadingDealPayment, setIsLoadingDealPayment] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  const togglePaymentStatusModal = () => setOpenPayment(!openPayment);

  const handleDealCancel = () => {
    if (dealId) {
      setIsLoadingDealCancel(true);
      dispatchPromise(dispatch, setUpdateDeal({
        id: dealId,
        status: DealStatus.CANCELED,
      }))
        .then(() => navigate(APP_ROUTES.MY_DEALS))
        .catch(() => setIsLoadingDealCancel(false));
    }
  };

  const handleConfirmPayment = () => {
    if (dealId) {
      setIsLoadingDealPayment(true);
      dispatchPromise(dispatch, setUpdateDeal({
        id: dealId,
        status: DealStatus.PAID,
      })).then(() => {
        setIsLoadingDealPayment(false);
        dispatch(getDeal({ dealId }));
        togglePaymentStatusModal();
      });
    }
  };

  return (
    <>
      <StyledControlsGroup>
        {status === DealStatus.IN_PROGRESS && (
          <CustomStyledButton
            primary
            onClick={handleDealCancel}
            isLoading={isLoadingDealCancel}
          >
            {t('common:form.button.cancel')}
          </CustomStyledButton>
        )}
        {(status === DealStatus.IN_PROGRESS || status === DealStatus.CUSTOMER_PAID) && (
        <CustomStyledButton
          onClick={togglePaymentStatusModal}
          disabled={status === DealStatus.IN_PROGRESS}
        >
          {t('common:form.button.paid')}
        </CustomStyledButton>
        )}
        {(status === DealStatus.PAID || status === DealStatus.COMPLETED)
          && isVisibleEstimateButton && (
          <CustomStyledButton
            onClick={toggleFeedback}
            primary
            disabled={status === DealStatus.PAID}
          >
            {t('common:form.button.estimate')}
          </CustomStyledButton>
        )}
      </StyledControlsGroup>
      <Modal onClose={togglePaymentStatusModal} open={openPayment} maxWidth="xs" fullWidth>
        <StyledModalContent>
          <Typography variant="h6" gutterBottom align="center" mb={4}>
            {t('deal:paymentModalNotice')}
          </Typography>
          <StyledModalControls>
            <CustomStyledButton
              onClick={togglePaymentStatusModal}
            >
              {t('common:form.button.no')}
            </CustomStyledButton>
            <CustomStyledButton
              primary
              onClick={handleConfirmPayment}
              isLoading={isLoadingDealPayment}
            >
              {t('common:form.button.yes')}
            </CustomStyledButton>
          </StyledModalControls>
        </StyledModalContent>
      </Modal>
    </>
  );
});

export default SellerDealControlButtons;
