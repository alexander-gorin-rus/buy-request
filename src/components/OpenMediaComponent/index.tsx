import React, {
  memo, useCallback, useEffect, useRef, useState, VFC, MutableRefObject, useMemo,
} from 'react';
import Modal from '../CustomModal';
import CustomSlider from '../CustomSlider';
import {
  IconWrapper,
  SCustomSliderPreview, SCustomSliderPreviewImg,
  SliderWrapper, StyledCross, StyledSlider,
} from './styles';

export interface IOpenMediaComponent {
  media: string[];
  open: boolean;
  closeModal: (index: number) => void;
  setOpenMediaModal: (item: boolean) => void;
  openMediaModal: boolean;
  clickedMedia: number | any;
}

const OpenMediaComponent: VFC<IOpenMediaComponent> = memo(({
  media, open, closeModal, setOpenMediaModal, openMediaModal, clickedMedia,
}) => {
  const MOUSE_UP = 'mouseup';

  const [selected, setSelected] = useState<number>(0);
  function useOutsideClick(
    handleClose: (index: number) => void,
    ref: MutableRefObject<HTMLElement | null>,
  ) {
    const handleClick = useCallback((event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (handleClose) {
          handleClose(0);
        }
      }
    }, [handleClose, ref]);

    useEffect(() => {
      document.addEventListener(MOUSE_UP, handleClick);
      return () => { document.removeEventListener(MOUSE_UP, handleClick); };
    }, [handleClick]);
    return { handleClose };
  }

  useEffect(() => {
    if (openMediaModal) {
      const close = (e: KeyboardEvent) => {
        if (setOpenMediaModal && e.key === 'Escape') {
          setOpenMediaModal(false);
        }
      };
      window.addEventListener('keydown', close);
    }
    setSelected(clickedMedia);
  }, [openMediaModal]);

  const modalRef = useRef(null);
  useOutsideClick(closeModal, modalRef);
  const onClickHandle = useCallback(() => {
    closeModal(0);
  }, [openMediaModal]);
  const mediaUrls = useMemo(() => (
    media.map((image) => ({
      id: image,
      src: `${image}`,
    }))
  ), [media]);

  return (
    <Modal open={open}>
      <div ref={modalRef}>
        <SliderWrapper>
          <StyledSlider>
            <CustomSlider
              items={mediaUrls}
              slidesToShow={7}
              setSelected={setSelected}
              selected={selected}
              style={{ width: '536px' }}
            >
              <SCustomSliderPreview
                type="button"
              >
                <SCustomSliderPreviewImg
                  src={media[selected]}
                  alt="img"
                />
              </SCustomSliderPreview>
            </CustomSlider>
          </StyledSlider>
          <IconWrapper>
            <StyledCross onClick={onClickHandle} />
          </IconWrapper>
        </SliderWrapper>
      </div>
    </Modal>
  );
});

export default OpenMediaComponent;
