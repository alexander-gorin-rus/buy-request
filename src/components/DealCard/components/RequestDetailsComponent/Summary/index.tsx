import React, {
  memo, VFC, useEffect, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { RequestDescription } from '../../../../RequestDataComponent/styles';
import {
  Collapsator,
  StyledArrow, StyledDetails, StyledSummary, StyledSummaryHeader,
} from '../../../styles';
import Badge from '../../../../Badge';
import { StyledTagsContainer, TagsTitle, TagsWrapper } from '../styles';
import { LANGUAGES } from '../../../../../utils/constants';
import { ISummaryProps } from '../types';
import { useAnimationKeyframes } from '../../../../../utils/hooks/animStateHook';

const SummaryComponent: VFC<ISummaryProps> = memo(({
  tags, deal, open, setSummaryOpen,
}) => {
  const { t, i18n: { language } } = useTranslation('dealCard');
  const ref = useRef(null);
  const [animationStatus, enter, exit] = useAnimationKeyframes(
    ref.current,
    open,
  );

  useEffect(() => {
    if (!open && animationStatus === 'ENTERED') {
      exit();
      return;
    }
    if (open && animationStatus === 'EXITED') {
      enter();
    }
  }, [exit, enter, open]);

  return (
    <div>
      <StyledDetails>
        <Collapsator animState={animationStatus} ref={ref}>
          {Boolean(animationStatus !== 'EXITED')
              && (
              <>
                <RequestDescription>{deal?.request.description}</RequestDescription>
                <TagsWrapper>
                  <TagsTitle>
                    {t('tags')}
                  </TagsTitle>
                  <StyledTagsContainer>
                    {tags?.map((tag) => (
                      <Badge smallFont key={tag?.id}>
                        {language === LANGUAGES.en ? tag?.titleEn : tag?.titleRu}
                      </Badge>
                    ))}
                  </StyledTagsContainer>
                </TagsWrapper>
              </>
              )}
        </Collapsator>
        <StyledSummaryHeader>
          <StyledArrow isOpen={open} />
          <StyledSummary onClick={setSummaryOpen}>
            {open ? t('hideDetails') : t('showDetails')}
          </StyledSummary>
        </StyledSummaryHeader>
      </StyledDetails>
    </div>
  );
});

export default SummaryComponent;
