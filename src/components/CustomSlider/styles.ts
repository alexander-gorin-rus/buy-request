import styled from 'styled-components';

export const SCustomSlider = styled.div`
  width: 272px;

  .slick-slide {
    margin: 0 6px;
  }

  .slick-list {
    overflow: hidden;
    margin: 0 -6px;
  }

  .slick-track {
    display: flex;
    margin-left: 0;
  }

  .slick-slider {
    position: relative;
  }
`;

export const SCustomSliderBtn = styled.button<{ prev?: boolean, next?: boolean }>`
  width: 20px;
  height: 20px;
  position: absolute;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  top: calc((100% - 20px) / 2);
  z-index: 3;
  background: ${({ theme }) => theme.palette.white};
  border-radius: 50%;
  
  svg path {
    fill: ${({ theme }) => theme.palette.blue};
  }

  ::before {
    content: none;
  }

  ${({ prev }) => prev && {
    left: '-10px',
    transform: 'none',
  }}

  ${({ next }) => next && {
    right: '-10px',
    transform: 'rotate(180deg)',
  }}
`;

export const SCustomSliderItem = styled.button<{ isSelected: boolean }>`
  height: 60px;
  width: 60px;
  padding: 0;
  margin: 0;
  outline: none;
  background: ${({ theme }) => theme.palette.quaternaryGray};
  border: 2px solid ${({ theme, isSelected }) => (isSelected ? theme.palette.blue : 'transparent')};
  box-sizing: border-box;
  cursor: pointer;
`;

export const SCustomSliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
