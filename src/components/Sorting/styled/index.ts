import { Checkbox, TableSortLabel } from '@mui/material';
import styled from 'styled-components';

export const StyledRadioGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledCheckbox = styled(Checkbox)`
  &&& {
    padding: unset;
  }

  svg {
    font-size: 30px;
  }
`;

export const StyledSortLabel = styled(TableSortLabel)`
  svg {
    margin: 0;
    font-size: 24px;
  }
`;
