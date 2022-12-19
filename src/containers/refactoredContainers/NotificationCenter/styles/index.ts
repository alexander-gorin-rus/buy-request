import styled from 'styled-components';
import { IStatusSelectActive } from '../types';

export const NotificationsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FiltersAndSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: 40px;
    flex-direction: column;
  }
`;

export const FiltersListBlock = styled.div`
  display: flex;
  padding: 6px 0;
  gap: 4px;
`;

export const FilterItems = styled.button<IStatusSelectActive>`
  border:none;
  outline:none;
  border-radius: 2px;
  font: ${(props) => props.theme.typography.subtitle1.font};
  padding: 0 8px;
  cursor: pointer;
  background-color: ${({ isActive, theme }) => (isActive ? theme.palette.blue : theme.palette.white)};
  color: ${({ isActive, theme }) => (isActive ? theme.palette.white : theme.palette.blue)};
  &:active{
    background-color: ${(props) => props.theme.palette.blue};
    color: ${(props) => props.theme.palette.white};
  }
`;

export const ClearBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: 40px;
    justify-content: flex-start;
  }
`;

export const ClearFilters = styled.span`
  font: ${(props) => props.theme.typography.button.font};
  color: ${(props) => props.theme.palette.blue};
  cursor: pointer;
`;

export const SortingBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NotificationsCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

export const StyledNotificationCard = styled.div`
  margin: 8px 0;
  display: flex;
  padding: 16px;
  &:hover {
    background-color: ${(props) => props.theme.palette.lightGray};
  }
`;

export const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
`;

export const IsReadMarkWrapper = styled.div`
  width: 16px;
  display: flex;
`;

export const IsReadMark = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.blue};
`;

export const NotificationInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NotificationInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;

export const DeleteIconWrapper = styled.div`
  display: none;
  width: auto;
  height: auto;
  margin: 2px;
  ${StyledNotificationCard}:hover & {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
`;

export const NotificationMessage = styled.span`
  cursor: pointer;
  font: ${(props) => props.theme.typography.subtitle1.font};
`;

export const NotificationType = styled.span`
  margin-top: 8px;
  font: ${(props) => props.theme.typography.body2.font};
  color: ${(props) => props.theme.palette.gray};
`;

export const StyledNotificationDate = styled.div`
  margin-top: 2px;
  font: ${(props) => props.theme.typography.overline.font};
  color: ${(props) => props.theme.palette.secondaryGray};
`;

export const StyledModalControls = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  & > * {
    width: 9rem;
    height: 2.7rem;
  }
`;

export const DateSelectWrapper = styled.div`
  position: relative;
  left: 2px;
`;
