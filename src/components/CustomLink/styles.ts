import styled from 'styled-components';
import { ICustomLinkProps } from './types';

export const StyledLink = styled.a<ICustomLinkProps>`
    display: flex;
    align-items: center;
    gap: 10px;
    font: ${({ theme }) => theme.typography.button.font};

    cursor: pointer;
    color: ${({ theme, disabled }) => (disabled ? theme.palette.secondaryGray : theme.palette.blue)};
    ${({ theme, disabled }) => disabled && `
        & svg path {
            fill: ${theme.palette.secondaryGray};
        }
    `}

    &:hover {
        color: ${({ theme, disabled }) => (disabled ? theme.palette.secondaryGray : theme.palette.skyBlue)};
        & svg path {
            fill: ${({ theme, disabled }) => (disabled ? theme.palette.secondaryGray : theme.palette.skyBlue)};
        }
    }
`;
