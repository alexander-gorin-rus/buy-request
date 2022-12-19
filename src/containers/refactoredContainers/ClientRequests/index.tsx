import { Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import RequestCard from '../Requests/components/RequestCard';
import { getClientRequests } from './actions/actions';
import { StyledTitleTypography } from './styles';
import { getCurrentClientRequestsSelector } from '../../../core/selectors';
import Pagination from '../../../components/Pagination';

function ClientRequest() {
  const pageChange = 3;
  const maxPageCount = 3;
  const [page, setPage] = useState<number>(1);
  const { t } = useTranslation('clientRequestList');

  const dispatch = useDispatch();
  const client = useSelector(getCurrentClientRequestsSelector);
  const count = client?.pageInfo.totalPageCount;
  const dispatchRequests = useCallback((onePage, perPage) => {
    dispatch(getClientRequests({ page: onePage, perPage }));
  }, [dispatch]);
  useEffect(() => {
    dispatchRequests(page, pageChange);
  }, [dispatchRequests, dispatch, page]);

  const handlePageChange = (value: number) => {
    setPage(value);
  };
  const handleCount = () => {
    if (count && count > maxPageCount) {
      return maxPageCount;
    }
    return count;
  };
  return (
    <>
      <StyledTitleTypography variant="h4">
        {t('title')}
      </StyledTitleTypography>
      <Grid container spacing={4} mt={1}>
        {
          client?.data?.length
            ? client.data.map((elem) => <RequestCard key={elem.id} data={elem} />)
            : <Typography variant="h5">{t('noRequests')}</Typography>
        }
      </Grid>
      <Pagination
        page={page}
        total={handleCount() || 1}
        onChange={handlePageChange}
      />
    </>
  );
}

export default ClientRequest;
