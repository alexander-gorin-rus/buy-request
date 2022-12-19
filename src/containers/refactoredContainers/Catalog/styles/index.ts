import {
  Avatar, List,
  ListItem, ListItemText, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledProductDescription = styled(Typography)`
  align-items: center;
`;

export const StyledDateDescription = styled(Typography)`
  align-items: center;
  font-size: 0.8rem;
`;

export const StyledTagsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0 3px;

  & > *:not(:last-child) {
    margin-right: 6px;
  }
`;

export const StyledListItemAvatar = styled(Avatar)`
  min-width: 80px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const StyledListItemText = styled(ListItemText)`
  margin-left: 15px;
`;

export const StyledAvatar = styled(Avatar)`
  background: none;
`;

export const StyledListItem = styled(ListItem)`
  padding-left: 0;
  padding-right: 0;
  &:first-child {
    padding-top: 0;
  }
  &:not(:first-child) {
    padding-top: 12px;
  }
`;

export const StyledList = styled(List)`
  padding-top: 0;
`;

export const StyledLink = styled(Link)`
  color: rgb(26, 32, 39);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  text-decoration: none;
  border-bottom: 1px solid white;
  transition : border-bottom-color 200ms ease-out;
  &:hover {
    border-color: rgb(26, 32, 39);
  }
`;

export const StyledServicesGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCover = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const StyledButtonContainer = styled.div`
  width: 182px;
`;
