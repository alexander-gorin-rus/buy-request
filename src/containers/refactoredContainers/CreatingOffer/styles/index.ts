import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RequestTitle = styled.span`
  display: flex;
  align-items: flex-start;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.h1.fontWeight};
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.subtitle1.lineHeight};
  color: ${(props) => props.theme.typography.color};
`;

export const RequestBudgetWrapper = styled.div`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.h2.fontWeight};
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.subtitle1.lineHeight};
  display: flex;
`;

export const RequestBudget = styled.span`
  padding-right: 8px;
`;

export const TitleAndPriceWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const IconRubleWrapper = styled.div`
  margin-left: 8px;
  width: 20px;
  height: 20px;
`;

export const BuyerNameAndArrowWrapper = styled.div`
  display: flex;
  width: auto;
  height: 20px;
  margin-top: 40px;
`;

export const BuyerNameWrapper = styled.div`
  position: relative;
`;

export const BuyerName = styled(Link)`
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  text-decoration: none;
  line-height: ${(props) => props.theme.typography.body1.lineHeight};
  color: ${(props) => props.theme.palette.blue};
  font-weight: ${(props) => props.theme.typography.fontWeight};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

export const IconRightArrowWrapper = styled.span`
  margin: 2px 0px 0px 5px;
  width: 20px;
  height: 20px;
`;

export const RequestDescription = styled.p`
  position: relative;
  margin-top: -2px;
  width: 100%;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.body1.fontWeight};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  line-height: ${(props) => props.theme.typography.body1.lineHeight};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  padding-bottom: 20px;
  & > * {
    padding-top: 20px;
  }
`;

export const StyledFormControl = styled.div`
  width: 100%;
`;

export const StyledPriceFormControl = styled.div`
  position: relative;
  height: 150px;
  float: left;
  width: 400px;
  @media(max-width: 870px) {
    width: 380px;
  }
  @media(max-width: 320px) {
    width: 315px;
  }
`;

export const BargainSuggestion = styled.p`
  position: relative;
  right: 17%;
  top: -2px;
  float: right;
  display: flex;
  width: 70%;
  color: ${(props) => props.theme.palette.secondaryGray};
  font-weight: ${(props) => props.theme.typography.body2.fontWeight};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyleItalic};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
  font-style: ${(props) => props.theme.typography.logo.fontStyle};
  line-height: 16px;
`;

export const IconHandAndBargainWrapper = styled.div`
  position: absolute;
  width: 300px;
  top: 60px;
  left: 410px;
  height: 30px;
  @media(max-width: 870px) {
    left: 390px;
  }
  @media(max-width: 320px) {
    top: 120px;
    left: 0;
  }
`;

export const DropZoneLabel = styled.label`
  position: relative;
  font: ${(props) => props.theme.typography.fontFamily};
  font-weight: 600;
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  margin-bottom: 10px;
`;

export const DropZoneLabelWrapper = styled.div`
  display: block;
  width: 80px;
`;

export const IconQuestionMarkWrapper = styled.div`
  position: relative;
  top: 4px;
  display: flex;
  float: right;
  width: 15px;
  height: 15px;
`;

export const StyledButtonContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
`;

export const CustomStyledButtonWrapper = styled.div`
  position: relative;
  padding-right: 5px;
  display: flex;
  width: 201px;
  height: 48px;
  @media(max-width: 870px) {
    width: 195px;
  }
  @media(max-width: 320px) {
    width: 160px;
  }
`;

export const InputPriceWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;
