import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import RatingStars from 'src/components/RatingStars';
import { dateFormat } from 'src/utils/helpers';
import { optionsDateForReviews } from 'src/utils/constants';
import IconRightArrow from 'src/icons/IconRightArrow';
import { APP_ROUTES } from 'src/core/appRoutes';
import Tooltip from 'src/components/Tooltip';
import {
  StyledReview, StyledReviewLinkWrapper, StyledReviewLink,
  StyledReviewHeader, ReviewDate, StyledReviewLinkIcon,
  StyledReviewText, StyledReviewContent, StyledReviewInfo, StyledReviewInfoItem,
} from '../../styles';
import { IReviewProps } from '../../types';

const Review: FC<IReviewProps> = memo(({ rating }) => {
  const { t } = useTranslation('deal');

  return (
    <StyledReview>
      <StyledReviewHeader>
        <RatingStars filledStarsCount={rating.value} />
        <ReviewDate>
          {dateFormat(rating.createdAt, optionsDateForReviews)}
        </ReviewDate>
      </StyledReviewHeader>
      <StyledReviewContent>
        <StyledReviewText>
          {rating.comment}
        </StyledReviewText>
        <StyledReviewInfo>
          <StyledReviewInfoItem>
            <Tooltip text={rating.dealName} showOnOverflow>
              {rating.dealName}
            </Tooltip>
          </StyledReviewInfoItem>
          <StyledReviewInfoItem isGreen>
            <Tooltip text={rating.productName} showOnOverflow>
              {rating.productName}
            </Tooltip>
          </StyledReviewInfoItem>
          <StyledReviewLinkWrapper>
            <StyledReviewLink
              to={`${APP_ROUTES.DEAL_CONFIRMATION}/${rating.entityId}`}
            >
              {t('dealListItem.dealLink')}
            </StyledReviewLink>
            <StyledReviewLinkIcon>
              <IconRightArrow />
            </StyledReviewLinkIcon>
          </StyledReviewLinkWrapper>
        </StyledReviewInfo>
      </StyledReviewContent>
    </StyledReview>
  );
});

export default Review;
