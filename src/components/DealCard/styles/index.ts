import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as ArrowLeft } from 'src/arrow-left.svg';
import { ICollapsatorProps, IStyledArrow } from '../types';

export const StyledDealCard = styled.div`
  width: 100%;
`;
export const IconWrapper = styled.div`
  width: 14px;
  font-weight: bold;
  stroke: ${(props) => props.theme.palette.black};
  stroke-width: 1px;
`;
export const PageContent = styled.div`
  padding-top: 32px;
`;

export const OfferBrief = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OfferDescription = styled.div`
  display: flex;
  padding-top: 24px;
`;

export const OfferTitle = styled.div`
  font: ${(props) => props.theme.typography.h2.font};
`;

export const OfferPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const OfferPrice = styled.div`
  font: ${(props) => props.theme.typography.h1.font};
  padding-right: 4px;
`;

export const StyledSpan = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 16px;
  line-height: 16px;
`;

export const BlockWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const BlockTitle = styled.span`
  padding-top: 32px;
  font: ${(props) => props.theme.typography.h3.font};
`;

export const StyledMediaContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledDetails = styled.div`
`;
const dropDownOpenKeyframe = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    max-height: 100vh;
    opacity: 1;
  }
`;

const dropDownCloseKeyframe = keyframes`
  0% {
    max-height: 100vh;
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    max-height: 0;
    opacity: 0;
  }
`;
const timingFunctions = {
  dropDownOpen: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  dropDownClose: 'cubic-bezier(0.23, 1, 0.32, 1)',
};

const combinedAnimations = {
  dropDownOpen: css`
    ${dropDownOpenKeyframe} 0.3s ${timingFunctions.dropDownOpen}
  `,
  dropDownClose: css`
    ${dropDownCloseKeyframe} 0.3s ${timingFunctions.dropDownClose}
  `,
};

export const Collapsator = styled.div<ICollapsatorProps>`
  overflow: hidden;

  ${({ animState }) => {
    switch (animState) {
      case 'ENTERING':
        return css`
          animation: ${combinedAnimations.dropDownOpen};
        `;
      case 'ENTERED':
        return css`
          overflow: visible;
        `;
      case 'EXITING':
        return css`
          animation: ${combinedAnimations.dropDownClose};
        `;
      case 'EXITED':
        return css`
          max-height: 0;
          overflow: hidden;
        `;
      default:
        return css`
          overflow: hidden;
        `;
    }
  }}
  
`;

export const StyledArrow = styled(ArrowLeft)<IStyledArrow>`
  display: flex;
  transform:rotateZ(268deg);
  transition: all 0.3s ease 0s;
  ${({ isOpen }) => isOpen && `
     transform: rotateZ(90deg);
  `}
  & path {
        fill: ${({ theme }) => theme.palette.blue}
    }
`;

export const StyledSummaryHeader = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StyledSummary = styled.div`
  display: flex;
  font: ${(props) => props.theme.typography.body1.font};
  font-weight: 600;
  color: ${(props) => props.theme.palette.blue};
  padding-left: 13px;
  margin-top: 30px;
  cursor: pointer;
`;

export const UserAuthorBlock = styled.div`
  border-top: 1px solid ${(props) => props.theme.palette.tetriaryGray};
  margin-top: 56px;
`;

export const UserAuthorBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  align-items: center;
`;

export const UserAuthorData = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  width: 106px;
`;

export const UserAuthorText = styled.div`
  font: ${(props) => props.theme.typography.h3.font};
  margin-left: 12px;
`;

export const StyledInfoText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 24px 34px 24px;
  background-color: ${(props) => props.theme.palette.blueWhite};
  color: ${(props) => props.theme.palette.gray};
  font: ${(props) => props.theme.typography.body2.font};
  font-style: italic;
  line-height: 1rem;
  border-radius: 8px;
  margin-top: 56px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const InfoTextParagraph = styled.div`
  display: flex;
  max-width: 248px;
`;

export const StyledImgWrapper = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 8px;
`;
