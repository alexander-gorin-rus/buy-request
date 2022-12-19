import React, {
  FC, memo,
} from 'react';
import Slider from 'react-slick';

import { ReactComponent as Arrow } from 'src/images/ui-arrow.svg';

import {
  SCustomSlider,
  SCustomSliderBtn,
  SCustomSliderImg,
  SCustomSliderItem,
} from './styles';

interface CustomSliderProps {
  items: any[];
  slidesToShow?: number;
  infinite?: boolean;
  style?: Object;
  itemStyle?: Object;
  onClick?: (item: string) => void;
  setSelected?: (item: number) => void;
  selected?: number;
  children?: React.ReactNode;
}

const CustomSlider: FC<CustomSliderProps> = ({
  slidesToShow = 4, infinite, items,
  itemStyle = {},
  setSelected = () => { },
  selected,
  style = {},
  onClick = () => { },
  children,
}) => (
  <SCustomSlider style={style}>
    {children}
    <Slider
      focusOnSelect
      swipe={false}
      swipeToSlide={false}
      infinite={infinite}
      slidesToShow={slidesToShow}
      prevArrow={(
        <SCustomSliderBtn
          type="button"
          prev
        >
          <Arrow />
        </SCustomSliderBtn>
        )}
      nextArrow={(
        <SCustomSliderBtn
          type="button"
          next
        >
          <Arrow />
        </SCustomSliderBtn>
        )}
    >
      {items.map((item, index) => (
        <SCustomSliderItem
          isSelected={index === selected}
          key={item.id}
          type="button"
          style={itemStyle}
          onClick={() => {
            setSelected(index);
            onClick(item);
          }}
        >
          <SCustomSliderImg src={item.src} alt="img" />
        </SCustomSliderItem>
      ))}
    </Slider>
  </SCustomSlider>
);

export default memo(CustomSlider);
