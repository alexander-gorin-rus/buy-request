import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../arrow-right.svg';
import { IStyledPageLinkProps } from './types';
import CustomLink from '../CustomLink';

export const StyledPaginationContainer = styled.div`
    display: flex;
    gap: 36px;
`;

export const StyledPaginationPagesContainer = styled.div`
    display: flex;
    gap: 8px;
`;

export const StyledArrowLeft = styled(ArrowLeft)`
    & path {
        fill: ${({ theme }) => theme.palette.blue}
    }
`;

export const StyledArrowRight = styled(ArrowRight)`
    & path {
        fill: ${({ theme }) => theme.palette.blue}
    }
`;

export const StyledPageLink = styled(CustomLink)<IStyledPageLinkProps>`
    font: ${({ theme }) => theme.typography.button.font};
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background-color: ${({ theme, active }) => (active ? theme.palette.blueWhite : 'unset')};
`;

export const StyledCustomLink = styled(CustomLink)`
    font: ${({ theme }) => theme.typography.body1.font};
`;
