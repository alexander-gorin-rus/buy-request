import styled from 'styled-components';

export const StyledPopupContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 24px;
    gap: 40px;
    background: ${(props) => props.theme.palette.white};
    border-radius: 8px;
    width: 100%;
    max-width: 414px;
  
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: calc(100% - 32px);
        padding: 24px 16px;
    }
`;

export const StyledTitle = styled.div`
    font: ${({ theme }) => theme.typography.h2.font};
`;

export const StyledDescription = styled.div`
    font: ${({ theme }) => theme.typography.subtitle2.font};
`;

export const StyledButtonsContainer = styled.div`
    margin-top: auto;
    display: flex;
    gap: 12px;
    & button {
        flex-grow: 1;
        max-width: calc( 50% - 6px );
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 8px;
        & button {
            max-width: calc( 50% - 4px );
        }
    }
`;

export const StyledPopupHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
