import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Bell } from 'src/images/bell.svg';

import { ReactComponent as Close } from '../images/close.svg';

export const StyledNotifications = styled.div`
  outline: none;
  padding: 0;
`;

export const StyledNotificationsBtn = styled.button<{ count: number }>`
  border: none;
  padding: 0;
  background: none;
  outline: none;
  cursor: pointer;
  position: relative;

  // Такого шрифта нет в uikit, он используется только здесь и один раз, ибо он совсем маленький
  ${({ theme, count }) => `
      ::after {
        ${count > 0 ? `content: '${count >= 9 ? '9+' : count}';` : ''}
        position: absolute;
        top: 0;
        right: 0;
        width: 12px;
        height: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font: 600 8px/10px ${theme.typography.fontFamily};
        background-color: ${theme.palette.green};
        border: 1px solid ${theme.palette.white};
        color: ${theme.palette.white};
      }
    `}
`;

export const StyledBell = styled(Bell)`
  & path {
      fill: ${({ theme }) => theme.palette.blue};
  }
`;

export const StyledClose = styled(Close)`
  width: 24px;
  height: 24px;

  & path {
      fill: ${({ theme }) => theme.palette.black};
  }
`;

export const StyledNotificationsSubContainer = styled.div`
  max-height: calc(100vh - 80px);
  box-sizing: border-box;
  overflow: auto;
  position: absolute;
  top: 64px;
  right: calc((100vw - 840px) / 2);
  z-index: 100;
  background: ${({ theme }) => theme.palette.white};
  padding: 24px 16px;
  width: 272px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobiletablet}) {
    right: 32px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    right: 0;
    left: 0;
    width: 100%;
    top: 72px;
    box-shadow: none;
    padding-bottom: 48px;
  }
`;

export const SLink = styled(Link)`
  outline: none;
  color: ${({ theme }) => theme.palette.blue};
  font: ${({ theme }) => theme.typography.button.font};
  text-decoration: none;
  margin-bottom: 32px;
  display: inline-block;
`;

export const STitle = styled.h3`
  color: ${({ theme }) => theme.palette.black};
  font: ${({ theme }) => theme.typography.h3.font};
`;

export const SCloseBtn = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

export const SHorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;
