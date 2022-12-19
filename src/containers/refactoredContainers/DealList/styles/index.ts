import {
  Chip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DealListItemWrapper = styled.div`
  display: flex;
  flex-direction: row !important;
  height: 202px;
  width: 100%;
  margin-bottom: 50px;
  @media(max-width: 380px) {
    height: 160px;
    width: 160px;
    margin: 2px 2px 80px 2px;
  }
`;

export const CardMedia = styled.img`
  width: 202px;
  height: 202px;
  @media(max-width: 380px) {
    height: 160px;
    width: 160px;
  }
`;

export const OfferContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
`;

export const StatusAndDate = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 0 20px 10px;
  z-index: 2;
  @media(max-width: 380px) {
    dispaly: block;
    position: relative;
    top: 8px;
    left: -165px;
  }
`;

export const Status = styled.span`
  font: ${(props) => props.theme.typography.button.font};
  padding: 8px 16px 8px 16px;
  background: ${(props) => props.theme.palette.quaternaryGray};
  border-radius: 72px;
  @media(max-width: 380px) {
    background: ${(props) => props.theme.palette.overlay};
  }
`;

export const Date = styled.span`
  font: ${(props) => props.theme.typography.button.font};
  color: ${(props) => props.theme.palette.secondaryGray};
  padding-top: 8px;
  @media(max-width: 380px) {
    position: relative;
    top: 190px;
    left: -125px;
  }
`;

export const Description = styled(Link)`
  font: ${(props) => props.theme.typography.h2.font};
  margin: 5px 0 0 12px;
  text-decoration: none;
  color: ${(props) => props.theme.palette.black};
  @media(max-width: 380px) {
    position: relative;
    top: 105px;
    left: -170px;
    width: 160px;
    height: 20px;
    overflow: hidden;
    font: ${(props) => props.theme.typography.body2.font};
  }
`;

export const Price = styled.span`
  font: ${(props) => props.theme.typography.h2.font};
  margin: 5px 0 0 12px;
  @media(max-width: 560px) {
    position: relative;
    top: 100px;
    left: -170px;
    font: ${(props) => props.theme.typography.body2.font};
  }
`;

export const DealLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  height: 20px;
  margin: 40px 0 0 10px;
  @media(max-width: 380px) {
    display: none;
  }
`;

export const DealLink = styled(Link)`
  font: ${(props) => props.theme.typography.subtitle1.font};
  color: ${(props) => props.theme.palette.blue};
  text-decoration: none;
`;

export const IconWrapper = styled.span`
  margin: 3px 0 0 5px;
  width: 20px;
  height: 20px;
`;

export const Counterparties = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 560px) {
    display: none;
  }
`;

export const CounterpartyInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 60px;
`;

export const CounterpartyAvatar = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const CounterpartyName = styled.span`
  font: ${(props) => props.theme.typography.h3.font};
`;

export const RatingWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
`;

export const StarWrapper = styled.div`
  width: 15px;
  height: 15px;
`;

export const Rating = styled.span`
  font: ${(props) => props.theme.typography.button.font};
  color: ${(props) => props.theme.palette.gray};
  margin: 2px 0 0 5px;
`;

export const StyledTermsItem = styled.div`
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const StyledChip = styled(Chip)`
  color: #ff8149;
  border-color: rgb(255 129 73 / 70%);
  margin-bottom: 2px;
`;
