import React, { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'src/components/Pagination';
import { getCurrentUserSelector } from 'src/core/selectors';
import { ReactComponent as StarsIcon } from 'src/icons/svg/stars.svg';
import { getRatingsAction } from '../../actions/actions';
import { getRatingsSelector } from '../../selectors';
import {
  ProfileTitle, ProfileReviewsHeader, EmptyReviewsText,
  StyledPaginationContainer, EmptyReviewsTextWrapper,
} from '../../styles';
import Review from './Review';

const ProfileReviews: FC = memo(() => {
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();
  const ratings = useSelector(getRatingsSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const [queryParams, setQueryParams] = useSearchParams();
  const page = Number(queryParams.get('page')) || 1;

  const handlePageChange = (value: number) => {
    queryParams.set('page', value.toString());
    setQueryParams(queryParams);
  };

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(getRatingsAction({ userId: currentUser.id, page, perPage: 1 }));
    }
  }, [page]);

  if (!ratings) return null;

  return (
    <div>
      <ProfileReviewsHeader>
        <ProfileTitle>
          {t('review')}
        </ProfileTitle>
        <ProfileTitle>
          {ratings.data.length}
        </ProfileTitle>
      </ProfileReviewsHeader>
      {ratings.data.length
        ? (
          <>
            <div>
              {ratings.data.map((rating) => <Review key={rating.id} rating={rating} />)}
            </div>
            <StyledPaginationContainer>
              <Pagination
                page={page}
                total={ratings.pageInfo.totalPageCount || 1}
                onChange={handlePageChange}
              />
            </StyledPaginationContainer>
          </>
        )
        : (
          <EmptyReviewsTextWrapper>
            <StarsIcon />
            <EmptyReviewsText>{t('reviewsEmptyText')}</EmptyReviewsText>
          </EmptyReviewsTextWrapper>
        )}
    </div>
  );
});

export default ProfileReviews;
