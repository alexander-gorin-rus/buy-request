import React, { VFC } from 'react';
import { v4 as uuid } from 'uuid';
import { IRatingStars } from './types';
import { RatingStarsValue, StyledStar, StarsWrapper } from './styles';

const RatingStars:VFC<IRatingStars> = ({ filledStarsCount = 0, value }) => {
  const ratingStars = Array(5)
    .fill(undefined)
    .map((item, idx) => <StyledStar key={uuid()} isFilled={idx < filledStarsCount} />);

  return (
    <StarsWrapper>
      {ratingStars}
      {value !== undefined && (
        <RatingStarsValue>
          {value}
        </RatingStarsValue>
      )}
    </StarsWrapper>
  );
};

export default RatingStars;
