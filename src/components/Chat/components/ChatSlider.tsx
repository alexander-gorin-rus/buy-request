import React, { VFC, memo } from 'react';
import Slider from 'react-slick';
import { ReactComponent as Arrow } from 'src/images/ui-arrow.svg';
import MediaPreview from 'src/components/MediaPreview';
import { ReactComponent as Delete } from 'src/images/delete.svg';
import {
  SCustomSliderBtn, RemoveButtonWrapper, SliderItem, StyledRemoveBtn, SCustomSlider,
} from '../styled';
import { IChatMedia } from '../types';

export interface IChatSliderProps {
  value: IChatMedia[];
  slidesToShow?: number;
  initialSlide?: number;
  showPreview?: boolean;
  style?: Object;
  itemStyle?: Object;
  previewStyle?: Object;
  onDeleteClick?: (item: IChatMedia) => void;
}

const ChatSlider: VFC<IChatSliderProps> = memo(({
  slidesToShow = 5,
  value,
  style = {},
  onDeleteClick = () => { },
}) => (
  <SCustomSlider style={style}>
    <Slider
      focusOnSelect
      swipe={false}
      swipeToSlide={false}
      infinite={false}
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
      {value && value.map((imageInfo) => (
        <SliderItem
          type="button"
        >
          <MediaPreview width="72px" height="72px" url={imageInfo.preview} />
          <RemoveButtonWrapper>
            <StyledRemoveBtn onClick={() => onDeleteClick(imageInfo)}>
              <Delete />
            </StyledRemoveBtn>
          </RemoveButtonWrapper>
        </SliderItem>
      ))}
    </Slider>
  </SCustomSlider>
));

export default ChatSlider;
