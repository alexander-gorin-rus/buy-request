import styled from 'styled-components';
import { ReactComponent as Burger } from '../../../../../../burger.svg';

import { IStyledNavigationItemProps } from './types';

export const StyledNaviagationContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        order: 1;

    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
        gap: 2px;
    }
`;

export const StyledNavigationItem = styled.div<IStyledNavigationItemProps>`
    padding: 0.25rem 0.75rem;
    background-color: ${({ active, theme }) => (active ? theme.palette.blue : theme.palette.white)};
    color: ${({ active, theme }) => (active ? theme.palette.white : theme.palette.blue)};
    border-radius: 2px;
    font-weight: ${({ theme }) => theme.typography.fontWeight};
    font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
    line-height: ${({ theme }) => theme.typography.subtitle1.lineHeight};
    cursor: pointer;
    &:hover {
        color: ${({ active, theme }) => (active ? theme.palette.white : theme.palette.skyBlue)};
        background-color: ${({ active, theme }) => (active ? theme.palette.skyBlue : theme.palette.white)};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }

`;

export const StyledBurger = styled(Burger)`
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
    & path {
        fill: ${({ theme }) => theme.palette.blue};
    }

`;
