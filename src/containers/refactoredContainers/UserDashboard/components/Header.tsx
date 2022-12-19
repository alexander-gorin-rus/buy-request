import React, { VFC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import HeaderImage from 'src/images/header.png';
import {
  HeaderWrapper,
  HeaderBodyContainer,
  GreetingsBlock,
  ImageWrapper,
  ImageHeader,
  ButtonStart,
  ServiceInformation,
  AdvertisingSlogan,
  BuyRequestTitle,
  Slogan,
  IconArrowStart,
  TextButton,
} from '../styles/header';

interface IHeaderProps {
  currentUserConsumer: boolean,
  onClick: () => void,
}

const Header: VFC<IHeaderProps> = memo(({ currentUserConsumer, onClick }) => {
  const { t } = useTranslation(['headerMainPage']);

  return (
    <HeaderWrapper>
      <HeaderBodyContainer>
        <GreetingsBlock>

          <AdvertisingSlogan>
            <Slogan>
              {t('headerMainPage:shopping')}
            </Slogan>
            <Slogan>
              {t('headerMainPage:easier')}
            </Slogan>
            <BuyRequestTitle>
              {t('headerMainPage:buyRequest')}
            </BuyRequestTitle>
          </AdvertisingSlogan>

          <ServiceInformation>
            {t('headerMainPage:about')}
          </ServiceInformation>

          <ButtonStart onClick={onClick}>
            <TextButton>
              {currentUserConsumer
                ? `${t('headerMainPage:startShopping')}`
                : `${t('headerMainPage:requestList')}`}
              <IconArrowStart />
            </TextButton>
          </ButtonStart>

        </GreetingsBlock>
      </HeaderBodyContainer>

      <ImageWrapper>
        <ImageHeader src={HeaderImage} />
      </ImageWrapper>

    </HeaderWrapper>
  );
});

export default Header;
