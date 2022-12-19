import styled from 'styled-components';
import preview from 'src/images/ui-preview-search.svg';

export const StyledModalControls = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  & > * {
    width: 9rem;
    height: 2.7rem;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ProductCardWrapper = styled.div`
  margin-top: 56px;
  display: flex;
  gap: 82px;
`;

export const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 272px;
  gap: 110px;
`;

export const ComplainButtonWrapper = styled.div`
  button {
    padding: 0;
    height: auto;
  }
`;

export const GalleryList = styled.div`
  display:flex;
  justify-content: space-between;
  width: 272px;
  flex-wrap: wrap;
`;

export const SCustomSliderPreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SCustomSliderPreview = styled.button`
  width: 272px;
  height: 272px;
  margin-bottom: 16px;
  padding: 0;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.palette.quaternaryGray};
  cursor: pointer;
  position: relative;
  z-index: 1;

  :hover {
    :after {
      content: url(${preview});
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      background: rgba(0, 0, 0, 0.2);;
    }
  }
`;

export const ProductInfoWrapper = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
`;

export const ProductInfoHeader = styled.div`
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font: ${(props) => props.theme.typography.h2.font};
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Model = styled.p`
  font: ${(props) => props.theme.typography.subtitle1.font};
`;

export const Description = styled.p`
  padding: 24px 0;
  font: ${(props) => props.theme.typography.body1.font};
`;

export const WarrantyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WarrantyTitle = styled.h3`
  font: ${(props) => props.theme.typography.h3.font};
`;

export const Warranty = styled.span`
  font: ${(props) => props.theme.typography.body1.font};
  margin: 5px 0 0 0;
`;

export const StyledModalTitle = styled.p`
  font: ${(props) => props.theme.typography.h2.font};
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const StyledModalControlsWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  
  & > button {
    width: calc((100% - 12px) / 2);
  }
`;
