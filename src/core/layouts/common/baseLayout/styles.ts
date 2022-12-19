import styled from 'styled-components';
import { IBodyContainerProps } from './types';

export const ContentContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const BodyContainer = styled.div<IBodyContainerProps>`
  width: 100%;
  margin-top: ${({ withNavigation }) => (withNavigation ? '16px' : '56px')};
  padding-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-self: center;
  min-height: calc(100vh - ${({ withNavigation }) => (withNavigation ? '120px' : '160px')});
  max-width: 1040px;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    max-width: 840px;
    margin-left: 32px;
    margin-right: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    width: calc(100% - 64px);
    margin-left: 32px;
    margin-right: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100% - 32px);
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const CustomBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 1040px;
  text-align: center;
`;
