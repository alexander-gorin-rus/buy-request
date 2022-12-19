import styled from 'styled-components';
import { ReactComponent as StarRating } from 'src/images/ratingStar.svg';
import { IStyledStarProps } from './types';

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
`;

export const StyledStar = styled(StarRating)<IStyledStarProps>`
  fill: ${({ theme, isFilled }) => (isFilled ? theme.palette.orange : theme.palette.tetriaryGray)};
`;

export const RatingStarsValue = styled.p`
  font: ${(props) => props.theme.typography.body1.font};
  margin: 0;
  padding-left: 8px;
  padding-bottom: 2px;
`;
