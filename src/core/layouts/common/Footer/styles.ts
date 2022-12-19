import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.palette.tetriaryGray};
  display: flex;
  align-items: center;
  gap: 24rem;
  justify-content: center;
  height: 40px;
  width: 100%;
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    gap: 12rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    gap: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const FooterText = styled.div`
  color: ${(props) => props.theme.palette.gray};
  font: ${(props) => props.theme.typography.body2.font};
  line-height: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    font: ${(props) => props.theme.typography.subtitle2.font};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font: ${(props) => props.theme.typography.subtitle2.font};
    margin-top: 40px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 32px;
`;

export const StyledLink = styled(Link)`
  display: block;
  color: ${(props) => props.theme.palette.gray};
  text-decoration: none;
  font: ${(props) => props.theme.typography.body2.font};
  line-height: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    font: ${(props) => props.theme.typography.subtitle2.font};
    line-height: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font: ${(props) => props.theme.typography.subtitle2.font};
  }
`;
