import styled from 'styled-components';
import Select from 'react-select';
import { ReactComponent as CrossInCircle } from 'src/images/cross-in-circle.svg';

import { ISelectOption } from './types';

export const StyledSelect = styled(Select<ISelectOption>)`
  width: 100%;
  font: ${(props) => props.theme.typography.h3.font};
  border-radius: 5px;
  &&& .Select__control {
    width: 100%;
    height: 56px;
    background: ${(props) => props.theme.overlay};
    box-shadow: none;
    outline: 1px solid ${({ theme }) => theme.palette.outline};
  }
  &&& .Select__indicator-separator {
    display: none;
  }
  &&& .Select__dropdown-indicator {
    color: ${(props) => props.theme.palette.black};
  }
  &&& .Select__control--is-focused {
    border: 1px solid ${({ theme }) => theme.palette.outline};
  }
  &&& .Select__option--is-focused {
    background-color: ${({ theme }) => theme.palette.lightBlue};
    color: ${({ theme }) => theme.palette.black};
  }
  &&& .Select__option--is-selected {
    background-color: unset;
    color: unset;
  }
`;

export const ReactSelectPlaceholder = styled.span`
  font: ${(props) => props.theme.typography.subtitle1.font};
`;

export const StyledCrossInCircle = styled(CrossInCircle)`
  color: ${({ theme }) => theme.palette.blue};
  cursor: pointer;
`;
