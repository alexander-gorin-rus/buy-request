import React, { FC, memo } from 'react';

import { ReactComponent as LoaderSvg } from 'src/images/loader.svg';
import { ReactComponent as MiniLoaderSvg } from 'src/images/miniLoader.svg';
import { ReactComponent as MiniLoaderWhiteSvg } from 'src/images/miniLoaderWhite.svg';

import { PreloaderComponentContainer, PreloaderLayoutContainer, PreloaderContainer } from './style';

interface PreloaderProps {
  isComponent?: boolean;
  isLayout?: boolean;
  isWhite?: boolean;
}

const Preloader: FC<PreloaderProps> = ({
  isComponent, isLayout, isWhite,
}) => {
  const Svg = isWhite ? MiniLoaderWhiteSvg : MiniLoaderSvg;

  if (isComponent) {
    return (
      <PreloaderComponentContainer>
        <PreloaderContainer>
          <LoaderSvg />
        </PreloaderContainer>
      </PreloaderComponentContainer>
    );
  }

  if (isLayout) {
    return (
      <PreloaderLayoutContainer>
        <PreloaderContainer>
          <LoaderSvg />
        </PreloaderContainer>
      </PreloaderLayoutContainer>
    );
  }

  return (
    <PreloaderContainer isMini>
      <Svg />
    </PreloaderContainer>
  );
};

export default memo(Preloader);
