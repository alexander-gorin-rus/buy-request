import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Star } from '../../star.svg';
import { APP_ROUTES } from '../../core/appRoutes';
import {
  Username, Rating, UserRatingContainer, ReviewsLink,
} from './styles';
import { IUserRatingProps } from './types';

const UserRating: FC<IUserRatingProps> = ({
  rating, userName, userId,
}) => {
  const { t } = useTranslation('userRating');

  return (
    <UserRatingContainer>
      <div>
        <Username>{userName}</Username>
        <Rating>
          {rating}
          <Star />
          <ReviewsLink to={`${APP_ROUTES.USER_REVIEWS}/${userId}`}>{t('reviews')}</ReviewsLink>
        </Rating>
      </div>
    </UserRatingContainer>
  );
};

export default UserRating;
