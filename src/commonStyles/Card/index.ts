import styled from 'styled-components';

export const PriceText = styled.div`
  display: flex;
`;

export const CardBlockBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardCurrencyWrapper = styled.div`
  width: 8px;
  margin-left: 3px;
`;

export const DataText = styled.div`
  font: ${(props) => props.theme.typography.body2.font};
  line-height: 1rem;
  color: ${(props) => props.theme.palette.secondaryGray};
`;

export const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  max-width: 200px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 160px;
  }
`;

export const TitleAndBudget = styled.span`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font: ${(props) => props.theme.typography.body2.font};
`;
export const MediaBox = styled.div`
  display: flex;
  width: 202px;
  height: 202px;
`;
export const CardMedia = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  object-fit : cover;
`;

export const StatusWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  height: fit-content;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  max-width: 150px;
  width: fit-content;
  font: ${(props) => props.theme.typography.overline.font};
  min-height: 32px;
  background: ${(props) => props.theme.palette.overlay};
  border-radius: 72px;
  z-index: 2;
  text-align: center;
  box-shadow: 0px 0px 15px ${({ theme }) => theme.palette.tetriaryGray};
`;

export const MediaContainer = styled.div`
  position: relative;
`;
