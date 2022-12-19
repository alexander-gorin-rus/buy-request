import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import RequestCard from '../Requests/components/RequestCard';
import { clearSellerRequests, fetchSellerRequests } from './actions/actions';
import SellerRequestFeedNotice from './components/SellerRequestFeedNotice';
import {
  getSellerRequestsPageInfoSelector,
  getSellerRequestsSelector,
  getSellerTagsSelector,
} from './selectors';
import { StyledTitleTypography } from '../ClientRequests/styles';
import { StyledMainContainer } from './styles';
import Pagination from '../../../components/Pagination';

const SellerRecommendedRequests = () => {
  const perPage = 3;
  const [page, setPage] = useState(1);
  const { t } = useTranslation(['common', 'sellerDashboard']);

  const dispatch = useDispatch();
  const requests = useSelector(getSellerRequestsSelector);
  const pageInfo = useSelector(getSellerRequestsPageInfoSelector);
  const tags = useSelector(getSellerTagsSelector);
  const count = pageInfo?.totalPageCount;

  const handlePageChange = (value: number) => setPage(value);

  const handleCount = () => {
    if (count && count > 3) return 3;
    return count;
  };

  useEffect(() => {
    dispatch(fetchSellerRequests({ page, perPage }));

    return () => {
      dispatch(clearSellerRequests());
    };
  }, []);

  useEffect(() => {
    dispatch(fetchSellerRequests({ page, perPage }));
  }, [page]);

  return (
    <StyledMainContainer maxWidth="lg">
      <StyledTitleTypography variant="h4">
        {t('sellerDashboard:headers.recommendedRequests')}
      </StyledTitleTypography>
      {!!requests?.length && (
        <>
          <Grid container spacing={4} mt={1}>
            {requests.map((elem) => (
              <RequestCard key={elem.id} data={elem} />
            ))}
          </Grid>
          <Pagination page={page} total={handleCount() || 1} onChange={handlePageChange} />
        </>
      )}
      <SellerRequestFeedNotice isRequests={!!requests?.length} isSubscribedTags={!!tags?.length} />
    </StyledMainContainer>
  );
};

export default SellerRecommendedRequests;
