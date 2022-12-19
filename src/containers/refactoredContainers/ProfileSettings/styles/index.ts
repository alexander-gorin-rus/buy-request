import styled from 'styled-components';

export const ProfileSettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 33px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    row-gap: 56px;
  }
`;

export const ProfileSettingsContent = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 71px;

  @media (max-width: 690px) {
    flex-wrap: wrap;
    row-gap: 24px;
  }
`;

export const PrevPageWrapper = styled.div`
  display: flex;
`;

export const StyledForm = styled.form`
  display: flex;
  row-gap: 13px;
  flex-direction: column;
  width: 100%;
  max-width: 556px;
  
  input {
    font: ${(props) => props.theme.typography.h3.font};
  }
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 12px;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 42px;
  max-width: 414px;
`;

export const StyledInputWrapper = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(50% - 6px);
    flex-basis: calc(50% - 6px);
    min-height: 110px;
  }
`;

export const ProfileAvatarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledLabel = styled.label`
  display: flex;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const AvatarImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  width: 100%;
  height: 142px;
  
  img {
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
    color: transparent;
    text-indent: 10000px;
  }
`;

export const AvatarValidateMessage = styled.p`
  font: ${(props) => props.theme.typography.overline.font};
  color: ${(props) => props.theme.palette.red};
  margin-top: 16px;
`;

export const ProfileAvatarContainer = styled.div`
  display: block;
  flex-shrink: 0;
  width: 142px;
  
  & > div {
    width: 142px;
    height: 142px;
  }

  @media (max-width: 690px) {
    width: 100%;
  }
`;
