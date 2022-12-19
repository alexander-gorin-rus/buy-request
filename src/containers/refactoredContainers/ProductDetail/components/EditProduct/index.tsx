import { Typography } from '@mui/material';
import React, {
  VFC, memo, useState, useEffect, EffectCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { PageTitle } from 'src/commonStyles';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { ProductFormValues } from 'src/components/ProductForm/types';
import { CustomButton } from 'src/components/CustomButton';
import Modal from 'src/components/Modal';
import ProductForm from 'src/components/ProductForm';
import { APP_ROUTES } from 'src/core/appRoutes';
import { getComponentLoadingSelector, getCurrentUserSelector } from 'src/core/selectors';
import { ButtonWrapper, StyledModalContent, StyledModalControl } from 'src/containers/refactoredContainers/CreatingProduct/styles';
import { clearProduct, getProduct, updateProduct } from 'src/containers/refactoredContainers/ProductDetail/actions/actions';
import Preloader from 'src/components/Preloader';
import { useProductServices } from 'src/containers/refactoredContainers/ProductDetail/hooks/useProductServices';
import dispatchPromise from 'src/utils/helpers';
import { getProductSelector } from 'src/containers/refactoredContainers/ProductDetail/selectors';

const EditingProduct: VFC = memo(() => {
  const [t, params, dispatch] = useProductServices();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const isLoading = useSelector(getComponentLoadingSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const isLoadingCreatingProduct = useSelector(getComponentLoadingSelector);
  const product = useSelector(getProductSelector);

  const toggleModal = () => setOpenModal((prev) => !prev);
  const redirectToCatalog = () => navigate(APP_ROUTES.CATALOG);

  const handleModalClose = () => {
    toggleModal();
    redirectToCatalog();
  };

  const handleUpdateProduct = (formData: ProductFormValues) => {
    if (params?.productId && currentUser?.id) {
      dispatchPromise(dispatch, updateProduct({
        id: params.productId,
        userId: currentUser.id,
        previousProduct: product,
        production: formData.production,
        name: formData.name,
        model: formData.model,
        tags: formData.tags,
        productionGuarantee: formData.productionGuarantee,
        description: formData.description,
        media: formData.media,
        cover: formData.cover,
        createdAt: formData.createdAt,
      }));
      redirectToCatalog();
    }
  };

  useEffect(() => {
    if (params.productId) dispatch(getProduct({ productId: params.productId }));
  }, [params]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearProduct());
  }, []);

  return (
    <>
      {isLoading && <Preloader isComponent />}
      <PageTitle>
        {t('productForm:editingProductTitle')}
      </PageTitle>

      <ProductForm
        id="edit-product-form"
        onSubmit={handleUpdateProduct}
        isEdit={!isLoadingCreatingProduct}
        productData={product}
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
            isLoading={isLoading}
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

export default EditingProduct;
