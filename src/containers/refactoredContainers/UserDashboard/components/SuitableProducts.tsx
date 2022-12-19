import React, {
  VFC, memo, useMemo,
  useEffect,
  EffectCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { getRequestsSelector } from 'src/containers/refactoredContainers/Requests/selectors';
import { getRequests, clearRequests } from 'src/containers/refactoredContainers/Requests/actions/actions';
import { getComponentLoadingSelector } from 'src/core/selectors';
import { ISortItem, IRequestCard } from 'src/core/types';
import {
  defaultSort, PER_PAGE, RequestStatus,
} from 'src/utils/constants';
import Preloader from 'src/components/Preloader';
import RequestCard from 'src/containers/refactoredContainers/Requests/components/RequestCard';
import {
  SectionTitle,
  SectionWrapper,
  CardsProducts,
} from '../styles';

const SuitableProducts: VFC = memo(() => {
  const perPage = PER_PAGE;
  const { t } = useTranslation('mainPageUser');
  const dispatch = useDispatch();
  const [queryParams] = useSearchParams();
  const page = Number(queryParams.get('page')) || 1;
  const isLoading = useSelector(getComponentLoadingSelector);
  const { data } = useSelector(getRequestsSelector) ?? {};

  const statuses = useMemo(() => {
    const status = queryParams.get('statuses');
    return status ? [status] as RequestStatus[] : [];
  }, [queryParams]);

  const sort = useMemo(() => {
    const orderBy = queryParams.get('orderBy');
    const orderName = queryParams.get('orderName');
    return orderBy && orderName ? {
      orderBy,
      orderName,
    } as ISortItem : defaultSort.createdAt;
  }, [queryParams]);

  useEffect(() => {
    dispatch(getRequests({
      page,
      perPage,
      sort: [sort],
      statuses,
    }));
  }, [page, sort, statuses]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearRequests());
  }, []);

  if (!data || data.length === 0) return null;

  return (
    <SectionWrapper>
      {isLoading ? <Preloader isComponent /> : (
        <>
          <SectionTitle>{t('suitableProducts')}</SectionTitle>
          <CardsProducts>
            {data.slice(0, 4).map(
              (elem: IRequestCard) => <RequestCard key={elem.id} data={elem} />,
            )}
          </CardsProducts>
        </>
      )}
    </SectionWrapper>
  );
});

export default SuitableProducts;
