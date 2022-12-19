import styled from 'styled-components';

import { ReactComponent as Logout } from 'src/images/logout.svg';
import { ReactComponent as Login } from 'src/images/login.svg';
import { IStyledUserActionsContainerProps } from './types';

export const StyledUserActionsContainer = styled.div<IStyledUserActionsContainerProps>`
    display: flex;
    align-items: center;
    gap: ${({ smallGap }) => (smallGap ? '8px' : '24px')};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-left: auto;
        order: 3;
        gap: ${({ smallGap }) => (smallGap ? '0px' : '12px')};
    }
`;

export const StyledLogout = styled(Logout)`
    cursor: pointer;
    color: ${({ theme }) => theme.palette.blue};
    &:hover {
        color: ${({ theme }) => theme.palette.skyBlue};
    }
`;

export const StyledLogin = styled(Login)`
    width: 20px;
    height: 20px;
`;

export const StyledAvatarWrapper = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
`;
