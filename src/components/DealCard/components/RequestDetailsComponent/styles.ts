import styled from 'styled-components';
import { theme } from '../../../../utils/theme';

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 40px 0 40px 0;
  background: ${theme.palette.quaternaryGray};
  color: ${(props) => props.theme.palette.black};
  padding: 24px 59px 24px 59px;
  border-radius: 8px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobiletablet}) {
    padding: 24px;
  }
`;

export const RequestBudgetWrapper = styled.div`
  font: ${(props) => props.theme.typography.h2.font};
  display: flex;
`;

export const RequestDescription = styled.p`
  width: 100%;
  font: ${(props) => props.theme.typography.body1.font};
`;

export const RequestTitle = styled.span`
  display: flex;
  align-items: flex-start;
  font: ${(props) => props.theme.typography.h2.font};
`;

export const IconRubleWrapper = styled.div`
  position: relative;
  top: 0;
  padding-left: 4px;
  width: 16px;
  height: 14px;
  stroke: ${(props) => props.theme.palette.black};
  stroke-width: 1px;
`;

export const TitleAndPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 700px) {
    display: block;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
`;

export const TagsWrapper = styled.span`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const TagsTitle = styled.span`
  display: flex;
  font: ${(props) => props.theme.typography.h3.font};
`;

export const StyledTagsContainer = styled.div`
  margin-top: 16px;
  line-height: 16px;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const RequestBudget = styled.span`
  margin-right: 8px;
`;
