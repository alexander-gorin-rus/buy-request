import styled from 'styled-components';

export const PreloaderLayoutContainer = styled.div`
  background: ${({ theme }) => theme.palette.white};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreloaderComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreloaderContainer = styled.div<{ isMini?: boolean }>`
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${({ isMini }) => (isMini ? `
    width: 24px;
    height: 24px;
  ` : `
    height: 64px;
    width: 64px;
  `)}
  animation: rotating 2s linear infinite;
`;
