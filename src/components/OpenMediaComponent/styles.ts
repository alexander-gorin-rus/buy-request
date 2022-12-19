import styled from 'styled-components';
import { ReactComponent as Cross } from '../../cross.svg';

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.white};
  width: 840px;
  height: 688px;
  border-radius: 12px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    width: 740px;
  }
`;

export const StyledSlider = styled.div`
  flex-grow: 1;
  padding-left: 150px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobiletablet}) {
    padding-left: 106px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  padding: 40px;
`;

export const StyledCross = styled(Cross)`
  cursor: pointer;
`;

export const SCustomSliderPreview = styled.button`
  width: 538px;
  height: 536px;
  margin-bottom: 16px;
  padding: 0;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

export const SCustomSliderPreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
