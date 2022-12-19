import styled from 'styled-components';
import { IStyledTooltipContainerProps } from './types';

export const StyledTooltipText = styled.div`
    bottom: calc(100% + 4px);
    left: 0;
    position: absolute;
    visibility: hidden;
    z-index: 1;

    padding: 12px;
    background-color: ${({ theme }) => theme.palette.gray};
    border-radius: 10px;
    color: ${({ theme }) => theme.palette.white};
`;

export const StyledTooltipContainer = styled.div<IStyledTooltipContainerProps>`
    position: relative;
    overflow: visible;
    width: 100%;
    &:hover > ${StyledTooltipText} {
        visibility: ${({ showOnOverflow, isOverflow }) => (showOnOverflow && !isOverflow ? 'hidden' : 'visible')};
    }
`;

export const StyledTooltipTarget = styled.div`
    &, & * {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
