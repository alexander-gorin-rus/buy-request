import styled from 'styled-components';

import { IStyledBadgeProps } from './types';

export const StyledBadge = styled.span<IStyledBadgeProps>`
    background-color: ${({ theme, alternative }) => (alternative ? theme.palette.orange : theme.palette.lightGreen)};
    color: ${({ theme }) => theme.typography.color};
    padding: 8px 16px;
    border-radius: ${({ alternative }) => (alternative ? '8px' : '72px')};
    font: ${({ theme, font }) => (font ? theme.typography.body2.font : theme.typography.overline.font)};
    display: flex;
    align-items: center;
    & > svg {
        margin-left: 12px;
        cursor: pointer;
    }
`;
