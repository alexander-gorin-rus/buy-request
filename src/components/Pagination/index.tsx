import React, { useMemo, VFC } from 'react';

import { useTranslation } from 'react-i18next';
import { IPaginationProps } from './types';
import {
  StyledPaginationContainer,
  StyledPaginationPagesContainer,
  StyledArrowLeft,
  StyledArrowRight,
  StyledPageLink,
  StyledCustomLink,
} from './styles';

const Pagination: VFC<IPaginationProps> = ({ total, page = 1, onChange }) => {
  const { t } = useTranslation('pagination');
  const maxPagesToShow = 3;
  const canGoBack = page > 1;
  const canGoForward = page < total;

  const back = () => {
    if (canGoBack) { onChange(page - 1); }
  };
  const forward = () => {
    if (canGoForward) { onChange(page + 1); }
  };

  const setPage = (newPage: number) => () => {
    onChange(newPage);
  };

  const pagesToShow = useMemo(() => {
    const currentPagesToShow = total < maxPagesToShow ? total : maxPagesToShow;
    if (!canGoBack) {
      return Array.from(Array(currentPagesToShow), (_, i) => i + 1);
    }
    if (canGoBack && canGoForward) {
      return Array.from(Array(currentPagesToShow), (_, i) => i + (page - 1));
    }
    if (!canGoForward) {
      return Array.from(Array(currentPagesToShow), (_, i) => page - i).reverse();
    }
    return [];
  }, [total, page, canGoBack, canGoForward]);

  if (total > 1) {
    return (
      <StyledPaginationContainer>
        <StyledCustomLink onClick={back} disabled={!canGoBack}>
          <StyledArrowLeft />
          {t('back')}
        </StyledCustomLink>
        <StyledPaginationPagesContainer>
          {pagesToShow?.map(
            (pageNumber) => (
              <StyledPageLink key={`pagination_${pageNumber}`} active={page === pageNumber} onClick={setPage(pageNumber)}>
                {pageNumber}
              </StyledPageLink>
            ),
          )}
        </StyledPaginationPagesContainer>
        <StyledCustomLink onClick={forward} disabled={!canGoForward}>
          {t('forward')}
          <StyledArrowRight />
        </StyledCustomLink>
      </StyledPaginationContainer>
    );
  }
  return null;
};

export default Pagination;
