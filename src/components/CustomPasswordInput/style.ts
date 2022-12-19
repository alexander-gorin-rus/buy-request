import styled from 'styled-components';
import { ReactComponent as EyeOpened } from 'src/images/opened-eye.svg';
import { ReactComponent as EyeClosed } from 'src/images/closed-eye.svg';
import CustomStyledInput from '../CustomStyledInput';

export const OpenedEye = styled(EyeOpened)`
color: black !important;
  cursor: pointer;
  width: 20px;
  height: 20px;
  opacity: 1;
`;

export const ClosedEye = styled(EyeClosed)`
color: black !important;
  cursor: pointer;
  width: 20px;
  height: 20px;
  opacity: 1;

`;

export const CustomPasswordStyledInput = styled(CustomStyledInput)`
  & input {
    padding-right: 36px;
  }
`;
