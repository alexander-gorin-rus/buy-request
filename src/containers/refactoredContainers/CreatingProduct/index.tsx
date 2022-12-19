import { Typography } from '@mui/material';
import React, { VFC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { PageTitle } from 'src/commonStyles';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { ProductFormValues } from 'src/components/ProductForm/types';
import { CustomButton } from 'src/components/CustomButton';
import Modal from 'src/components/Modal';
import ProductForm from 'src/components/ProductForm';
import { APP_ROUTES } from 'src/core/appRoutes';
import { getComponentLoadingSelector, getCurrentUserSelector } from 'src/core/selectors';
import Preloader from 'src/components/Preloader';
import { setCreatingProduct } from './actions/actions';
import {
  ButtonWrapper,
  StyledModalContent,
  StyledModalControl,
} from './styles';

const CreatingProduct: VFC = memo(() => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { t } = useTranslation(['common', 'productForm']);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getComponentLoadingSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const isLoadingCreatingProduct = useSelector(getComponentLoadingSelector);

  const toggleModal = () => setOpenModal((prev) => !prev);
  const redirectToCatalog = () => navigate(APP_ROUTES.CATALOG);

  const handleSubmitProductForm = (formData: ProductFormValues) => {
    if (currentUser?.id) {
      dispatch(setCreatingProduct({
        formData: {
          ...formData,
          userId: currentUser.id,
        },
        toggleModal,
      }));
    }
  };
  const handleModalClose = () => {
    toggleModal();
    redirectToCatalog();
  };

  return (
    <>
      <PageTitle>{t('productForm:creatingProductTitle')}</PageTitle>
      <ProductForm
        id="create-product-form"
        onSubmit={handleSubmitProductForm}
        isEdit={!isLoadingCreatingProduct}
      >
        <ButtonWrapper>
          <CustomStyledButton
            onClick={redirectToCatalog}
          >
            {t('common:form.button.cancel')}
          </CustomStyledButton>
        </ButtonWrapper>
        <ButtonWrapper>
          <CustomStyledButton
            primary
          >
            {isLoading && <Preloader isWhite />}
            {t('common:form.button.save')}
          </CustomStyledButton>
        </ButtonWrapper>
      </ProductForm>

      <Modal onClose={toggleModal} open={openModal} maxWidth="xs" onBackdropClick={handleModalClose}>
        <StyledModalContent>
          <Typography variant="h6" gutterBottom align="center" mb={4}>
            {t('productForm:productCreationVerificationNotice')}
          </Typography>
          <StyledModalControl>
            <CustomButton
              size="large"
              variant="contained"
              onClick={handleModalClose}
              title={t('common:form.button.ok')}
              isLoading={!!isLoadingCreatingProduct}
            />
          </StyledModalControl>
        </StyledModalContent>
      </Modal>
    </>
  );
});

export default CreatingProduct;
