import styled from 'styled-components';
import {
  Button, Typography,
} from '@mui/material';

export const StyledButton = styled(Button)`
  color: #FF8149;
  :hover{
    background-color: #fce2d7;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 202px;
  cursor: pointer;
  margin-top: 25px;
`;

export const ClickSortingPopup = styled.div`
  cursor: pointer;
`;

export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 202px;
  padding-bottom: 0;
`;

export const RequestTitleAndBudget = styled.span`
  margin: 2px 0 2px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-weight: ${(props) => props.theme.typography.body1.fontWeight};
  font-family: ${(props) => props.theme.typography.fontFamily};
  display: flex;
  justify-content: flex-start;
`;

export const RequestDescription = styled.span`
  position: relative;
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.subtitle2.fontSize};
`;

export const RequestCreatedAt = styled.span`
  margin-top: 3px;
  font-size: ${(props) => props.theme.typography.body2.fontSize};
  color: ${(props) => props.theme.palette.secondaryGray};
`;

export const StyledTitleTypography = styled(Typography)`
  margin-bottom: 1rem;
  border-bottom: 3px solid #FF8149;
`;

export const IconRubleWrapper = styled.div`
margin-left: 5px;
  width: 8px;
  height: 8px;
`;

export const TitleAndNewRequestBlock = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  @media(max-width: 500px) {
    display: inline-block;
  }
`;

export const RequestsTitleDiv = styled.div`
  position: relative;
  left: 0;
`;

export const NewRequestWrapper = styled.div`
  position: relative;
  top: -4px;
  width: 174px;
  height: 48px;
  display: flex;
  justify-content: flex-end;
  @media(max-width: 650px) {
    position: absolute;
    top: 70px;
    left: 0;
  }
`;

export const NewRequestButtonBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  
`;

export const FilterPopupCard = styled.div`
  position: absolute;
  width: 343px;
  height: 400px;
  left: 39vw;
  top: 50px;
  background: ${(props) => props.theme.palette.white};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  z-index: 10;
`;

export const IconCloseWrapper = styled.div`
  position: relative;
  top: 29px;
  right: 29px;
  width: 14px;
  height: 14px;
`;

export const CloseSortingPopupCard = styled.p`
  position: absolute;
  top: -5px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Filter = styled.span`
  position: relative;
  top: -34px;
  left: 24px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.fontWeight};
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
`;

export const SorintPopupButtonWrapper = styled.div`
  position: relative;
  left: 24px;
  top: 300px;
`;

export const SearchingBox = styled.div`
  position: relative;
  left: 0;
  top: -31px;
  height: 56px;
  width: 70%;
  @media(max-width: 830px){
    width: 60%;
  }
  @media(max-width: 540px){
    top: 40px;
    width: 100%;
  }
`;

export const IconSearchWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: -120px;
  width: 18px;
  height: 18px;
  display: flex;
  float: right;
`;

export const StyledSelect = styled.select`
  position: relative;
  top: 104px;
  left: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  gap: 10px;
  width: 295px;
  height: 56px;
  background: ${(props) => props.theme.palette.overlay};
  border: 1px solid ${(props) => props.theme.palette.outline};
  border-radius: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const ChooseStatus = styled.option`
  font: ${(props) => props.theme.typography.subtitle1.font};
  color: ${(props) => props.theme.palette.secondaryGray};
`;

export const StyledOption = styled.option`
  font: ${(props) => props.theme.typography.h3};
  cursor: pointer;
`;

export const StyledLabelStatus = styled.label`
  position: relative;
  left: 30px;
  top: 25%;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.fontWeight};
  font-size: 16px;
  line-height: 24px;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

export const Status = styled.p`
  position: relative;
  top: 8px;
  font-weight: ${(props) => props.theme.typography.subtitle1.fontWeight};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
  line-height: 16px;
  font-style: normal;
`;

export const RequestStatusWrapper = styled.div`
  position: relative;
  top: 45px;
  left: 13px;
  width: 96px;
  height: 32px;
  background: ${(props) => props.theme.palette.white};
  border-radius: 25px;
  z-index: 10;
  text-align: center;
`;

export const IconDateWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

export const IconsWrapper = styled.div`
  margin-top: 21px;
`;
