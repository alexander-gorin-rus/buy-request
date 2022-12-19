import styled from 'styled-components';
import Select from 'react-select';
import { ISelectOption } from './types';

export const FilterPopupWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  height: 400px;
  right: 0;
  top: 116px;
  background: ${(props) => props.theme.palette.white};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  z-index: 20;
`;

export const SortIconWrapper = styled.div`
  position: relative;
  top: -10px;
  right: -10px;
`;

export const IconDateWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

export const PopupModalHeader = styled.div`
  margin-top: 30px;
  width: 295px;
  display: flex;
  justify-content: space-between;
`;

export const PopupTitleWrapper = styled.div`
  font: ${(props) => props.theme.typography.h2.font};
`;

export const FiltersPopupCloseIcon = styled.div`
  position: relative;
  top: 5px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const FiltersWrapper = styled.div`
  width: 295px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledTitle = styled.span`
  font-style: normal;
  font: ${(props) => props.theme.typography.subtitle1.font};
`;

export const ReactSelect = styled(Select<ISelectOption>)`
  
  font: ${(props) => props.theme.typography.h3.font};
  border-radius: 5px;
  & .Select__control {
    width: 295px;
    height: 56px;
    background: ${(props) => props.theme.overlay};
  }
  & .Select__indicator-separator {
    display: none;
  }
  & .Select__dropdown-indicator {
    color: ${(props) => props.theme.palette.black};
  }
  & .Select__control--is-focused {
      border: none;
  }
`;

export const ReactSelectPlaceholder = styled.span`
  font: ${(props) => props.theme.typography.subtitle1.font};
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  width: 100%;
`;
