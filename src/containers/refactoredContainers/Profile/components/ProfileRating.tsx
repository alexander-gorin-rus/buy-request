import React, { memo, FC } from 'react';
import RatingStars from 'src/components/RatingStars';
import { countingRating } from 'src/utils/helpers';
import { IProfileData } from '../types';
import {
  RatingStarsWrapper, MegaRating, NumberOfRatings,
  RatingWrapper, RatingGrid, RatingStarsBlock,
} from '../styles';

const ProfileRating: FC<IProfileData> = memo(({ profile: { ratings } }) => {
  const rating = countingRating(ratings.data.map((item) => item.value));

  return (
    <RatingGrid>
      <RatingWrapper>
        <div>
          <MegaRating>
            {ratings.userRating}
          </MegaRating>
          <NumberOfRatings>/5</NumberOfRatings>
        </div>
        <RatingStarsWrapper>
          <RatingStarsBlock>
            <RatingStars
              filledStarsCount={1}
              value={rating['1'] || 0}
            />
            <RatingStars
              filledStarsCount={2}
              value={rating['2'] || 0}
            />
            <RatingStars
              filledStarsCount={3}
              value={rating['3'] || 0}
            />
          </RatingStarsBlock>
          <RatingStarsBlock>
            <RatingStars
              filledStarsCount={4}
              value={rating['4'] || 0}
            />
            <RatingStars
              filledStarsCount={5}
              value={rating['5'] || 0}
            />
          </RatingStarsBlock>
        </RatingStarsWrapper>
      </RatingWrapper>
    </RatingGrid>
  );
});

export default ProfileRating;
