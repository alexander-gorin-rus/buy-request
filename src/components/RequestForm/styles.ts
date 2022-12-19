import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding-top: 48px;
`;

export const StyledFormControl = styled.div`
  width: 100%;
  span {
    margin-top: 4px;
    display: flex;
  }
`;

export const StyledButtonBox = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 12px;
  max-width: 412px;
`;

export const CustomStyledBox = styled.div`
  font: ${(props) => props.theme.typography.body2.font};
  color: ${(props) => props.theme.palette.secondaryGray};
  font-style: italic;
  display: flex;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
   flex-direction: column;
  }
`;

export const InformationBox = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  align-items: center;
  padding-top: 28px;
  padding-left: 12px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-left: 0;
    padding-top: 0;
  }
`;

export const NoteBox = styled.div`
  width: 225px;
  padding-left: 8px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-left: 0;
  }
`;

export const MediaWrapper = styled.div`
  padding-top: 16px;
`;
