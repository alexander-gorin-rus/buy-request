import styled from 'styled-components';

export const BodyContentWrapper = styled.div`
    width: 100%;
    margin-top: 0;
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
    align-self: center;
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

export const SectionTitle = styled.h2`
    font: ${(props) => props.theme.typography.h1.font};
`;

export const SectionWrapper = styled.div`
    margin-top: 64px;
`;

export const SectionContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const CardsProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 4.9rem;
    padding-top: 38px;
    
    @media (max-width: ${(props) => props.theme.breakpoints.largeDesktop}) {
      gap: 3rem 0.6rem;
    }
    
    @media (max-width: ${(props) => props.theme.breakpoints.mobiletablet}) {
      gap: 3rem 6rem;
    }
`;
