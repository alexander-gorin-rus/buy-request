import React, {
  VFC, memo, useMemo, useEffect,
  EffectCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { getComponentLoadingSelector } from 'src/core/selectors';
import { ISortItem } from 'src/core/types';
import { defaultSort, PER_PAGE } from 'src/utils/constants';
import { getCatalogSelector } from 'src/containers/refactoredContainers/Catalog/selectors';
import Preloader from 'src/components/Preloader';
import {
  clearCatalog,
  getCatalog,
} from 'src/containers/refactoredContainers/Catalog/actions/actions';
import ProductCard from 'src/containers/refactoredContainers/Catalog/components/ProductCard';
import {
  SectionTitle,
  SectionWrapper,
  CardsProducts,
} from '../styles';

const NewProducts: VFC = memo(() => {
  const { t } = useTranslation('mainPageUser');

  const perPage = PER_PAGE;
  const isLoading = useSelector(getComponentLoadingSelector);
  const { data } = useSelector(getCatalogSelector) ?? {};
  const dispatch = useDispatch();
  const [queryParams] = useSearchParams();
  const page = Number(queryParams.get('page')) || 1;
  const myProducts = queryParams.get('myProducts') === 'true';

  const sort = useMemo(() => {
    const orderBy = queryParams.get('orderBy');
    const orderName = queryParams.get('orderName');
    return orderBy && orderName ? {
      orderBy,
      orderName,
    } as ISortItem : defaultSort.createdAt;
  }, [queryParams]);

  useEffect(() => {
    dispatch(getCatalog({
      page,
      perPage,
      myOwnProduct: myProducts,
      sort: [sort],
    }));
  }, [page, sort, myProducts]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearCatalog());
  }, []);

  if (!data || data.length === 0) return null;

  return (
    <SectionWrapper>
      {isLoading ? <Preloader isComponent /> : (
        <>
          <SectionTitle>{t('newProducts')}</SectionTitle>
          <CardsProducts>
            {data.slice(0, 4).map(
              (product) => <ProductCard product={product} key={product.id} />,
            )}
          </CardsProducts>
        </>
      )}
    </SectionWrapper>
  );
});

export default NewProducts;
