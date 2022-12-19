import styled from 'styled-components';
import { theme } from '../utils/theme';

export const PageTitle = styled.p`
  font: ${(props) => props.theme.typography.h1.font};
`;

export const DescriptionWrapper = styled.div`
  position: static;
  width: 100%;
  height: auto;
  display: table;
  margin: 40px 0 40px 0;
  background: ${theme.palette.quaternaryGray};
  padding: 3%;
  border-radius: 8px;
`;

export const StyledPaginationContainer = styled.div`
  margin-top: 40px;
`;

export const PagesWrapper = styled.div`
  position: relative;
`;

export const BadgeWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const ArrowLinkContainer = styled.div`
  position: relative;
  top: -10px;
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.typography.h3.fontWeight};
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  cursor: pointer;
  & > svg {
    margin-right: 1rem;
  }
`;

export const StyledSortAndFiltersWrapper = styled.div`
  position: relative;
  margin-top: 44px;
`;
