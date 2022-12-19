import styled from 'styled-components';
import { ReactComponent as Cross } from 'src/cross.svg';
import { ReactComponent as SendIcon } from 'src/icons/svg/sendIcon.svg';
import {
  IImageContainerProps,
  IStyledChatBoxProps,
  IStyledChatSpanProps,
  IStyledFormProps,
  IStyledMessageProps,
} from '../types';

export const StyledChatContainer = styled.div`
  z-index: 2;
  position: relative; 
`;

export const StyledChatBox = styled.div<IStyledChatBoxProps>`
  display: ${(props) => (props.isChatOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  right: 24px;
  bottom: 45px;
  width: 506px;
  height: 621px;
  background: ${(props) => props.theme.palette.white};
  border: 1px solid ${(props) => props.theme.palette.quaternaryGray};
  box-shadow: 0 3px 15px rgba(190, 190, 190, 0.2);
  border-radius: 5px;
`;

export const StyledChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px 16px 16px;
  background: ${(props) => props.theme.palette.quaternaryGray};
  border-radius: 5px 5px 0 0;
  height: 66px;
  box-sizing: border-box;
`;

export const StyledChatTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledChatTitle = styled.div`
  margin-left: 14px;
  font: ${(props) => props.theme.typography.h1.font};
`;

export const StyledCross = styled(Cross)`
  cursor: pointer;
  & path {
    fill: ${({ theme }) => theme.palette.blue}
  }
`;

export const StyledChatMessageList = styled.div`
  padding: 16px 12px 0;
  height: 470px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledGroupedMessage = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledMessageData = styled.p`
  text-align: center;
  padding-top: 40px;
  font: ${(props) => props.theme.typography.subtitle2.font};
  color: ${(props) => props.theme.palette.secondaryGray};
`;

export const StyledMessageBox = styled.div<IStyledMessageProps>`
  display: flex;
  flex-direction: ${(props) => (props.isSelf ? 'row-reverse' : 'row')};
  width: 464px;
  
  > div {
    ${({ theme, isMediaOpen }) => isMediaOpen && {
    background: `${theme.palette.secondaryGray}`,
  }}
    ${({ theme, isSelf, isMediaOpen }) => (isSelf === true)
    && (isMediaOpen === false) && {
    background: `${theme.palette.lightBlue}`,
  }}
    ${({ theme, isSelf, isMediaOpen }) => (isSelf === false)
    && (isMediaOpen === false)
    && {
      background: `${theme.palette.quaternaryGray}`,
    }}
    text-align: ${(props) => (props.isSelf ? 'right' : 'left')};
  }
`;
export const StyledMessageGroup = styled.div`
  display: inline-block;
  padding: 14px;
  border-radius: 8px;
  margin-top: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.black};
`;

export const StyledMessage = styled.div`
  font: ${(props) => props.theme.typography.subtitle2.font};
  padding-top: 12px;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
`;

export const StyledMessageTime = styled.div`
  margin-top: 8px;
  font: ${(props) => props.theme.typography.caption.font};
  color: ${(props) => props.theme.palette.secondaryGray};
`;

export const StyledForm = styled.form<IStyledFormProps>`
  border: 1px solid ${(props) => props.theme.palette.secondaryGray};
  box-shadow: 0 0 9px ${(props) => props.theme.palette.quaternaryGray};
  border-radius: 5px;
  :has(textarea:focus) {
    textarea {
      background-color: ${(props) => props.theme.palette.blueWhite};
      border-color: ${(props) => (props.error ? props.theme.palette.red : 'transparent')};
      
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 1px solid ${(props) => props.theme.palette.blue};
    }
    
    border: 1px solid ${(props) => props.theme.palette.blue};
    background-color: ${(props) => props.theme.palette.blueWhite};
    }
    :has(label) {
      color: ${(props) => props.theme.palette.secondaryGray};
    }
  }
`;

export const StyledChatInput = styled.div`
  margin: 18px 12px 12px;
  .heighttext{
    padding: 20px 10px;
    line-height: 28px;
  }
  
  form {
    margin-bottom: 0;
    position: relative;
  }
`;

export const StyledChatTextarea = styled.textarea<IStyledChatSpanProps>`
  outline: none;
  border: none;
  -webkit-appearance: none;
  border-radius: 5px;
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 12px 50px 10px 45px;
  font-weight: 600;
  font-size: 14px;

  line-height: 20px;
  min-height: 54px;
  max-height: 149px;
  resize: none;
  height: ${(props) => (props.height)}px;
  
  &:focus {
    outline: none;
  }
`;

export const InputFieldWarning = styled.span`
  color: ${(props) => props.theme.palette.red};
  margin: 0 6px;
  font: ${(props) => props.theme.typography.body2.font};
`;

export const StyledSendMessageButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.palette.blue};
  top: 0;
  right: 10px;
  background: transparent;
  box-shadow: none;
  border: none;
  border-radius: 10px;
  height: 54px;
  cursor: pointer;
  img {
    width: 20px;
    height: 18px;
  }
`;

export const StyledSendIcon = styled(SendIcon)`
  cursor: pointer;
  & path {
    fill: ${({ theme }) => theme.palette.blue}
  }
`;

export const ImageContainer = styled.div<IImageContainerProps>`
  display: flex;
`;

export const SmallImageBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const BigImageBoxContainer = styled.div`
  display: flex;
  padding-left: 6px;
`;

export const SmallImageWrapper = styled.div`
  position: relative;
`;

export const SmallImageBox = styled.img<IImageContainerProps>`
  width: 104px;
  height: 104px;
  display: flex;
  border-radius: 8px;
  object-fit: cover;
`;

export const ImageNumberBlock = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  border-radius: 8px;
  font: ${(props) => props.theme.typography.h1.font};
  color: ${({ theme }) => theme.palette.white};
  height: 106px;
  width: 106px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BigImageBox = styled.img`
  width: 216px;
  height: 216px;
  display: flex;
  border-radius: 8px;
  object-fit: cover;
`;

export const SCustomSlider = styled.div`
  .slick-slide {
    margin: 0 8px;
  }

  .slick-list {
    overflow: hidden;
    padding-top: 12px !important;
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
  z-index: 2;
  background: ${({ theme }) => theme.palette.white};
  border-radius: 50%;
  
  svg path {
    fill: ${({ theme }) => theme.palette.blue};
  }

  ::before {
    content: none;
  }

  ${({ prev }) => prev && {
    left: '0px',
    transform: 'none',
  }}

  ${({ next }) => next && {
    right: '0px',
    transform: 'rotate(180deg)',
  }}
`;

export const StyledAddImage = styled.label`
  position: absolute;
  left: 8px;
  bottom: 22px;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.palette.blue}
`;

export const StyledChatInputWrapper = styled.div`
  position: relative;
`;

export const SliderItem = styled.button`
  height: 72px;
  width: 72px;
  padding: 0;
  margin: 0;
  outline: none;
  box-sizing: border-box;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const RemoveButtonWrapper = styled.div`
  width: 0;
  height: 0;
`;

export const StyledRemoveBtn = styled.div`
  position: relative;
  left: 48px;
  bottom: 68px;
  width: 13px;
  color: ${({ theme }) => theme.palette.blue};
`;
