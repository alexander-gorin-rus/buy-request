import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.palette.secondaryGray};
    z-index: 3;
    justify-content: center;
    align-items: center;
`;
