import styled from 'styled-components';
import { ReactComponent as ArrowStart } from 'src/icons/svg/arrow-start.svg';

export const HeaderWrapper = styled.div`
    margin: auto;
    width: 100%;
    height: 586px;
    background: ${(props) => props.theme.palette.blue};
    display: flex;
`;

export const HeaderBodyContainer = styled.div`
    width: 50%;
    color: ${(props) => props.theme.palette.white};
    display: flex;
    justify-content: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { 
      width: 100%; 
      justify-content: center;   
    } 
`;

export const GreetingsBlock = styled.div`
    width: 520px;
    margin: 97px 0;
    padding-right: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
      max-width: 420px;
      padding-left: 32px;
      margin-right: 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
      margin-left: 32px;
      margin-right: 32px;
      padding: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { 
      margin-left: 0;
      margin-right: 0;
    } 
`;

export const ImageWrapper = styled.div`
    width: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { 
      width: 0; 
    } 
`;

export const ImageHeader = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const AdvertisingSlogan = styled.div``;

export const Slogan = styled.h2`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 54px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) { 
      font-size: 32px;
      line-height: 48px;
    } 
`;

export const BuyRequestTitle = styled.h1`
    margin-top: 12px;
    font-style: normal;
    font-weight: 800;
    font-size: 56px;
    line-height: 60px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) { 
      font-size: 40px;
      line-height: 54px;
    } 
`;

export const ServiceInformation = styled.h3`
    margin-top: 40px;
    width: 219px;
    font: ${(props) => props.theme.typography.h3.font};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) { 
      font: ${(props) => props.theme.typography.subtitle1.font};
    } 
`;

export const TextButton = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const ButtonStart = styled.button`
    margin-top: 100px;
    font: ${(props) => props.theme.typography.h1.font};
    color: ${(props) => props.theme.palette.white};
    border: none;
    background-color: inherit;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) { 
      font: ${(props) => props.theme.typography.h2.font};
    } 
`;

export const IconArrowStart = styled(ArrowStart)`
    margin-left: 32px;
    margin-top: 2px;
`;
