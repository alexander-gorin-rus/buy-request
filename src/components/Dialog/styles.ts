import styled from 'styled-components';

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 24px;
    gap: 10px;
    background: ${(props) => props.theme.palette.white};
    border-radius: 8px;
    width: 414px;
    min-height: 216px;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        min-width: 298px;
        min-height: 184px;
        margin: 0 16px;
        padding: 24px 16px;
    }
`;
