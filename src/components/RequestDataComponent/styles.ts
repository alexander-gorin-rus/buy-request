import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BuyerName = styled(Link)`
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  text-decoration: none;
  line-height: ${(props) => props.theme.typography.body1.lineHeight};
  color: ${(props) => props.theme.palette.blue};
  font-weight: ${(props) => props.theme.typography.fontWeight};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

export const RequestBudgetWrapper = styled.div`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font: ${(props) => props.theme.typography.body2.font};
  line-height: ${(props) => props.theme.typography.subtitle1.lineHeight};
  display: flex;
`;

export const RequestDescription = styled.p`
  margin-top: 16px;
  width: 100%;
  font-style: normal;
  font: ${(props) => props.theme.typography.body1.font};
`;

export const RequestTitle = styled.span`
  display: flex;
  align-items: flex-start;
  font: ${(props) => props.theme.typography.h2.font};
  color: ${(props) => props.theme.typography.color};
`;

export const IconRightArrowWrapper = styled.span`
  margin: 2px 0 0 5px;
  width: 20px;
  height: 20px;
`;

export const IconRubleWrapper = styled.div`
  position: relative;
  top: 0;
  padding-left: 4px;
  width: 14px;
  height: 14px;
`;

export const TitleAndPriceWrapper = styled.div`
  width: 90%;
  height: 20px;
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  @media(max-width: 700px) {
    display: block;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
`;

export const RequestBudget = styled.span`
  margin-right: 8px;
`;

export const BuyerNameAndArrowWrapper = styled.div`
  display: flex;
  width: auto;
  height: 20px;
  margin-top: 40px;
`;

export const BuyerNameWrapper = styled.div`
  position: relative;
`;
