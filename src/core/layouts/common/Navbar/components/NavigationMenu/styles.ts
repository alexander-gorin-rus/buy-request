import styled from 'styled-components';
import { IStyledNavigationMenuItemProps } from './types';
import { ReactComponent as Cross } from '../../../../../../cross.svg';

export const StyledNavigationMenuItem = styled.div<IStyledNavigationMenuItemProps>`
    color: ${({ theme }) => theme.palette.blue};
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    line-height: ${({ theme }) => theme.typography.h2.lineHeight};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
    cursor: pointer;
    &:before {
        ${({ active }) => active && 'content:"• ";'}
    }
    &:hover {
        color: ${({ theme }) => theme.palette.skyblue};
    }
`;

export const StyledMenuContainer = styled.div`
    position: absolute;
    z-index: 3;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: ${({ theme }) => theme.palette.white};
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
        padding-top: 10px;
`;
export const NavbarLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavbarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  height: 100%;
`;

export const StyledClose = styled(Cross)`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 1rem;
    top: 1.5rem;
    cursor: pointer;
    & path {
        fill: ${({ theme }) => theme.palette.blue};
    }
`;

export const StyledTriggerContainer = styled.button`
    background-color: unset;
    border: none;
    cursor: pointer;
    display: flex;
`;

export const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
`;
