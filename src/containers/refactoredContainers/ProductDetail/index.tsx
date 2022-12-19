import React, { VFC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Preloader from 'src/components/Preloader';
import { ArrowLinkContainer } from 'src/commonStyles';
import { getComponentLoadingSelector } from 'src/core/selectors';
import { ReactComponent as ArrowBack } from 'src/arrow-back.svg';
import { useNavigate } from 'react-router';
import { useProductServices } from './hooks/useProductServices';
import ProductCard from './components/ProductCard';
import { getProductSelector } from './selectors';
import { getProduct } from './actions/actions';
import { APP_ROUTES } from '../../../core/appRoutes';

const ProductDetail: VFC = memo(() => {
  const [t, params, dispatch, redirectToCatalog] = useProductServices();
  const product = useSelector(getProductSelector);
  const isLoading = useSelector(getComponentLoadingSelector);

  useEffect(() => {
    if (params.productId) dispatch(getProduct({ productId: params.productId }));
  }, [params]);
  const navigate = useNavigate();
  const redirectToProductEdit = () => navigate(`${APP_ROUTES.CATALOG}/${params.productId}/edit`);

  if (isLoading) return <Preloader isComponent />;
  return (
    <>
      <ArrowLinkContainer onClick={redirectToCatalog}>
        <ArrowBack />
        {t('productForm:returnToCatalog')}
      </ArrowLinkContainer>
      {
        product?.name && product.name ? (
          <ProductCard
            productData={product}
            redirectToEdit={redirectToProductEdit}
          />
        ) : (
          <h3>{t('productForm:notFound')}</h3>
        )
      }
    </>
  );
});

export default ProductDetail;
