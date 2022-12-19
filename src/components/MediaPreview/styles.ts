import styled from 'styled-components';
import { IMediaPreviewProps } from './types';

export const StyledImage = styled.div<IMediaPreviewProps>`
    width: 130px;
    height: 130px;
  ${({ width, height }) => height && width && `
    width: ${width};
    height: ${height};
  `}
  
    border-radius: 8px;
    background-image: url(${({ url }) => url});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.palette.white};
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    text-transform: uppercase;
`;
