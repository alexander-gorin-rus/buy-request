import styled from 'styled-components';
import { IDropzoneStyleProps, IPreviewProps } from '../types';

const getColor = (props: IDropzoneStyleProps) => {
  if (props.isDragAccept) return props.theme.palette.outline;
  if (props.isDragReject || props.isError) return props.theme.palette.red;
  if (props.isFocused) return props.theme.palette.overlay;
  return props.theme.palette.quaternaryGray;
};

export const StyledDropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFilesZone = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const StyledDropzone = styled.div<IDropzoneStyleProps>`
  align-items: center;
  background-color:  ${({ theme }) => theme.palette.quaternaryGray};
  border-width: 1px;
  border-color: ${(props: IDropzoneStyleProps) => getColor(props)};
  cursor: ${(props: IDropzoneStyleProps) => (props.disabled ? 'default' : 'pointer')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  outline: none;
  transition: border .24s ease-in-out;
  width: 130px;
  height: 130px;
  justify-content: center;
`;

export const StyledCustomBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledRemoveBtn = styled.div`
  opacity: 0;
  position: absolute;
  left: 104px;
  top: 7px;
  transition: opacity .5s ease;
  width: 30px;
  color: ${(props) => props.theme.palette.white};
`;

export const StyledThumb = styled.div<IPreviewProps>`
  position: relative;
  box-sizing: border-box;
  &:hover ${StyledRemoveBtn} {
    opacity: 1;
  }
`;

export const StyledThumbContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;

export const StyledThumbInner = styled.div`
  display: flex;
`;

export const StyledNoPreview = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const StyledDropzoneTitle = styled.div<IDropzoneStyleProps>`
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  color: ${(props: IDropzoneStyleProps) => props.theme.palette.black};
  margin-bottom: 10px;
  cursor: default;
`;
