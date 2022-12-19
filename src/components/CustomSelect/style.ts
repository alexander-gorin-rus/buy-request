import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 12px;
  gap: 10px;
  width: 295px;
  height: 56px;
  border-radius: 5px;
  background: ${(props) => props.theme.palette.overlay};
  border: 1px solid ${(props) => props.theme.palette.outline};
  font: ${(props) => props.theme.typography.subtitle1.font};
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: unset;
  appearance: none;
  &:invalid{
    color: gray;
  }
`;

export const StyledOption = styled.option`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 24px;
  gap: 10px;
  padding-buttom: 20px;
  width: 343px;
  height: 36px !important;
  color: black;
  font-family: 'Nunito';
  font-style: normal;
  font ${(props) => props.theme.typography.body1.font}
  border-radius:5px; 
`;

export const OptionPlaceholder = styled.option`
  font ${(props) => props.theme.typography.subtitle1.font};
`;

export const IconSelectWrapper = styled.div`
  position: relative;
  display: flex;
  width: 16px;
  height: 16px;
  left: 260px;
  top: -30px;
`;
