import styled from 'styled-components';

export const AvatarControls = styled.div`
  transition: .3s ease;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  
  svg {
    color: white;
    cursor: pointer;
  }
`;

export const AvatarLabel = styled.label`
  display: flex;
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const StyledAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  text-indent: 10000px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover ${AvatarControls} {
    opacity: 1;
  }
`;
