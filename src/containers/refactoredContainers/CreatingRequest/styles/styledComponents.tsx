import styled from 'styled-components';
import { theme } from '../../../../utils/theme';

export const RequestTitle = styled.span`
  display: flex;
  font-size: ${theme.typography.h1.fontSize};
  line-height: ${theme.typography.h1.lineHeight};
  font-weight: ${theme.typography.h1.fontWeight};
  color: ${theme.typography.h1.color};
`;
