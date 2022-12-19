import styled from 'styled-components';

export const FilterPopupWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 343px;
  right: 0;
  top: 66px;
  padding: 24px;
  background: ${(props) => props.theme.palette.white};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  z-index: 20;
`;

export const PopupModalHeader = styled.div`
  width: 295px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PopupTitleWrapper = styled.div`
  font: ${(props) => props.theme.typography.h2.font};
`;

export const FiltersPopupCloseIcon = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
