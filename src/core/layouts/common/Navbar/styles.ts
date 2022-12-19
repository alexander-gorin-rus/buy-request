import styled from 'styled-components';

export const StyledNavbarContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.palette.white};
    height: 64px;
`;
export const StyledNavbar = styled.div`
    display: flex;
    
    width: 100%;
    margin: 0.75rem auto;
    align-items: center;

    @media (min-width: 905px) and (max-width: 1440px)  {
        max-width: 840px;
        justify-content: space-between;
    }
    @media (min-width: 1440px)  {
        max-width: 1040px;
        justify-content: space-between;
    }
`;

export const StyledLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        order: 2;
        margin-left: 16px;
    }
`;
