import { Typography } from '@mui/material';
import React, { VFC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
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
import { CustomStyledButton } from '../../../../components/CustomStyledButton';

const ConsumerDealControlButtons: VFC<DealControlButtonsProps> = memo(({
  status, dealId, toggleFeedback, isVisibleEstimateButton,
}) => {
  const { t } = useTranslation(['common', 'deal']);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoadingDealCancel, setIsLoadingDealCancel] = useState(false);
  const [isLoadingCompleteDeal, setIsLoadingCompleteDeal] = useState(false);
  const [isLoadingConfirmPayment, setIsLoadingConfirmPayment] = useState(false);
  const [openConfirmPayment, setOpenConfirmPayment] = useState(false);
  const [openCompleteDealModal, setOpenCompleteDealModal] = useState(false);

  const toggleConfirmPaymentModal = () => setOpenConfirmPayment(!openConfirmPayment);
  const toggleCompleteDealModal = () => setOpenCompleteDealModal(!openCompleteDealModal);

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

  const handleConfirmCustomerPaid = () => {
    if (dealId) {
      setIsLoadingConfirmPayment(true);
      dispatchPromise(dispatch, setUpdateDeal({
        id: dealId,
        status: DealStatus.CUSTOMER_PAID,
      }))
        .then(() => {
          setIsLoadingConfirmPayment(false);
          toggleConfirmPaymentModal();
          dispatch(getDeal({ dealId }));
        })
        .catch(() => setIsLoadingConfirmPayment(false));
    }
  };

  const handleCompleteDeal = () => {
    if (dealId) {
      setIsLoadingCompleteDeal(true);
      dispatchPromise(dispatch, setUpdateDeal({
        id: dealId,
        status: DealStatus.COMPLETED,
      }))
        .then(() => {
          toggleCompleteDealModal();
          toggleFeedback();
        })
        .finally(() => setIsLoadingCompleteDeal(false));
    }
  };

  return (
    <>
      <StyledControlsGroup>
        {(status === DealStatus.IN_PROGRESS
            || status === DealStatus.CUSTOMER_PAID
            || status === DealStatus.PAID)
          && (
            <CustomStyledButton
              primary
              onClick={handleDealCancel}
              isLoading={isLoadingDealCancel}
            >
              {t('common:form.button.cancel')}
            </CustomStyledButton>
          )}
        {status === DealStatus.IN_PROGRESS && (
          <CustomStyledButton
            onClick={toggleConfirmPaymentModal}
          >
            {t('common:form.button.confirmPayment')}
          </CustomStyledButton>
        )}
        {(status === DealStatus.PAID || status === DealStatus.CUSTOMER_PAID) && (
        <CustomStyledButton
          onClick={toggleCompleteDealModal}
          disabled={status === DealStatus.CUSTOMER_PAID}
        >
          {t('common:form.button.completeDeal')}
        </CustomStyledButton>
        )}
        {status === DealStatus.COMPLETED && isVisibleEstimateButton && (
          <CustomStyledButton
            onClick={toggleFeedback}
          >
            {t('common:form.button.estimate')}
          </CustomStyledButton>
        )}
      </StyledControlsGroup>
      <Modal onClose={toggleConfirmPaymentModal} open={openConfirmPayment} maxWidth="xs" fullWidth>
        <StyledModalContent>
          <Typography variant="h6" gutterBottom align="center" mb={4}>
            {t('deal:confirmPaymentModalNotice')}
          </Typography>
          <StyledModalControls>
            <CustomStyledButton
              primary
              onClick={toggleConfirmPaymentModal}
            >
              {t('common:form.button.no')}
            </CustomStyledButton>
            <CustomStyledButton
              onClick={handleConfirmCustomerPaid}
              isLoading={isLoadingConfirmPayment}
            >
              {t('common:form.button.yes')}
            </CustomStyledButton>
          </StyledModalControls>
        </StyledModalContent>
      </Modal>
      <Modal onClose={toggleCompleteDealModal} open={openCompleteDealModal} maxWidth="xs" fullWidth>
        <StyledModalContent>
          <Typography variant="h6" gutterBottom align="center" mb={4}>
            {t('deal:completeDealModalNotice')}
          </Typography>
          <StyledModalControls>
            <CustomStyledButton
              onClick={toggleCompleteDealModal}
            >
              {t('common:form.button.no')}
            </CustomStyledButton>
            <CustomStyledButton
              onClick={handleCompleteDeal}
              primary
              isLoading={isLoadingCompleteDeal}
            >
              {t('common:form.button.yes')}
            </CustomStyledButton>
          </StyledModalControls>
        </StyledModalContent>
      </Modal>
    </>
  );
});

export default ConsumerDealControlButtons;
