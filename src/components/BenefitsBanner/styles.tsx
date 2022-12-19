import styled from 'styled-components';

interface IBenefitBannerProp {
  marginTop: string;
}

export const BannerWrapper = styled.div<IBenefitBannerProp>`
    width: 100%;
    margin-top: ${({ marginTop }) => marginTop};
    padding: 34px 24px;
    background-color: ${(props) => props.theme.palette.blueWhite};
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: ${(props) => props.theme.palette.gray};
    font: ${(props) => props.theme.typography.caption.font};
`;

export const BannerContent = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 248px;

    @media (max-width: ${(props) => props.theme.breakpoints.smallMobileTablet}) {
      padding: 10px 0; 
    }
`;

export const BannerIcon = styled.img`
    width: 26px;
    height: 26px;
`;

export const BannerText = styled.p`
    margin-left: 8px;
`;
