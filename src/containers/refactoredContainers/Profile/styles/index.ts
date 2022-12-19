import styled from 'styled-components';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { Link } from 'react-router-dom';
import { IReviewInfoItemProps } from '../types';

export const ProfileSecondaryContent = styled.p`
  color: ${(props) => props.theme.palette.secondaryGray};
  font: ${(props) => props.theme.typography.h2.font};
  margin-top: 12px;
`;

export const MegaRating = styled.span`
  font: ${(props) => props.theme.typography.megaFont.font};
`;

export const NumberOfRatings = styled.span`
  margin-left: 4px;
  color:  ${({ theme }) => theme.palette.secondaryGray};
  font: ${(props) => props.theme.typography.h3.font};
`;

export const RatingStarsWrapper = styled.div`
  display: flex;
  column-gap: 34px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    column-gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const RatingStarsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 5px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 56px;
`;

export const ProfileAvatarContainer = styled.div`
  width: 142px;
  height: 142px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 60px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const ProfileTitle = styled.p`
  font: ${(props) => props.theme.typography.h1.font};
  word-wrap: break-word;
`;

export const ProfileTitleWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 14px;

  svg {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    margin-top: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    margin-top: 16px;
  }
`;

export const EditButtonWrapper = styled.div`
  margin-top: 14px;
  
  svg {
    width: 26px;
    height: 24px;
    color: ${(props) => props.theme.palette.blue};
  }

  button {
    justify-content: flex-start;
    column-gap: 7px;
    padding: 0;
    font: ${(props) => props.theme.typography.button.font};
  }
`;

export const StyledProfileType = styled.div`
  padding: 8px 16px;
  background: ${(props) => props.theme.palette.quaternaryGray};
  border-radius: 72px;
  text-align: center;
  display: inline-block;
  color: ${(props) => props.theme.palette.black};
  font: ${(props) => props.theme.typography.overline.font};
`;

export const StatisticsContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    gap: 8px;
  }

  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

export const StatisticsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.overlay};
  padding: 27px 25px;
  border-radius: 4px;

  @media screen and (max-width: 690px) {
    flex-grow: 1;
  }
`;

export const StatisticsItem = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 8px;
  
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const StatisticsValue = styled.p`
  font: ${(props) => props.theme.typography.h1.font};
  white-space: nowrap;
`;

export const StatisticsDescription = styled.p`
  font: ${(props) => props.theme.typography.body1.font};
  white-space: nowrap;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 68px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    column-gap: 40px;
    align-items: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    column-gap: 13px;
  }
`;

export const RatingGrid = styled.div`
  background: ${({ theme }) => theme.palette.overlay};
  padding: 15px 60px;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    padding: 15px 27px;
  }

  @media screen and (max-width: 690px) {
    flex-grow: 1;
  }
`;

export const ProfileTagsHeader = styled.div`
  display: flex;
  gap: 14px 12px;
  align-items: flex-end;
  flex-wrap: wrap;
  
  svg {
    cursor: pointer;
    color: ${(props) => props.theme.palette.blue};
  }
`;

export const ProfileTagsList = styled.div`
  margin-top: 24px;
`;

export const ProfileTagsBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StyledButton = styled(CustomStyledButton)`
  width: auto;
  height: auto;
  min-height: 24px;
  padding: 0;
`;

export const ProfileTagsControls = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const StyledReview = styled.div`
  padding: 32px 0 24px;
  
  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.palette.lightGray};
  }
`;

export const StyledReviewLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
`;

export const StyledReviewLink = styled(Link)`
  font: ${(props) => props.theme.typography.subtitle1.font};
  color: ${(props) => props.theme.palette.blue};
  text-decoration: none;
`;

export const StyledReviewHeader = styled.div`
  display: flex;
  column-gap: 17px;
  align-items: flex-start;
`;

export const ReviewDate = styled.p`
  font: ${(props) => props.theme.typography.overline};
  color: ${(props) => props.theme.palette.secondary};
  line-height: 17px;
`;

export const StyledReviewLinkIcon = styled.span`
  margin: 3px 0 0 10px;
  width: 20px;
  height: 20px;
`;

export const StyledReviewText = styled.p`
  font: ${(props) => props.theme.typography.body3};
  color: ${(props) => props.theme.palette.black};
  margin-top: 18px;
`;

export const StyledReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    row-gap: 24px;
  }
`;

export const StyledReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 267px;
  }
`;

export const StyledReviewInfoItem = styled.div<IReviewInfoItemProps>`
  display: inline-block;
  text-align: center;
  border-radius: 8px;
  font: ${(props) => props.theme.typography.overline};
  background: ${({ theme, isGreen }) => (isGreen ? theme.palette.lightGreen : theme.palette.lightGray)};
  max-width: 100%;
  
  &:not(:first-child) {
    margin-top: 8px;
  }
  
  & > div {
    padding: 8px 16px;
  }
`;

export const ProfileReviewsHeader = styled.div`
  display: flex;
  column-gap: 24px;
`;

export const EmptyReviewsText = styled.p`
  font: ${(props) => props.theme.typography.h3.font};
`;

export const StyledPaginationContainer = styled.div`
  margin-top: 40px;
`;

export const EmptyReviewsTextWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-top: 32px;
`;
