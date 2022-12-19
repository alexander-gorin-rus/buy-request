import styled from 'styled-components';
import { AvatarControls, AvatarWrapper, StyledAvatarImg } from 'src/components/Avatar/styles';

export const StyledMobileAvatar = styled.div`
  
  & ${AvatarWrapper} {
    background: ${({ theme }) => theme.palette.lightGray};
  }
  
  & ${AvatarControls} {
    display: none;
  }
  
  & ${StyledAvatarImg} {
    border-radius: 0;
  }
`;

export const StyledMobileAvatarControl = styled.p`
  font: ${(props) => props.theme.typography.button.font};
  color: ${(props) => props.theme.palette.blue};
`;

export const StyledMobileAvatarControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  align-items: center;
  
  svg {
    color: ${(props) => props.theme.palette.red};
  }
`;
