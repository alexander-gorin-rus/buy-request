import React, { VFC, useRef } from 'react';

import { ITooltipProps } from './types';
import { StyledTooltipContainer, StyledTooltipText, StyledTooltipTarget } from './styles';
import { useIsOverflow } from './hooks';

const Tooltip:VFC<ITooltipProps> = ({ text, children, showOnOverflow }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isOverflow = useIsOverflow(ref, children);

  return (
    <StyledTooltipContainer showOnOverflow={showOnOverflow} isOverflow={isOverflow}>
      <StyledTooltipTarget ref={ref}>{children}</StyledTooltipTarget>
      <StyledTooltipText>{text}</StyledTooltipText>
    </StyledTooltipContainer>
  );
};

export default Tooltip;
