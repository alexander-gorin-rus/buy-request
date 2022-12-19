import React, { VFC, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { FooterText, StyledLink } from 'src/core/layouts/common/Footer/styles';
import { APP_ROUTES } from 'src/core/appRoutes';
import LanguageToggle from 'src/components/LanguageToggle';

import {
  StyledNavigationMenuItem,
  StyledMenuContainer,
  StyledClose,
  StyledTriggerContainer,
  NavbarContentContainer,
  MenuContainer,
  NavbarLinksContainer,
  StyledMenu,
} from './styles';
import { INavigationMenuProps } from './types';

const NavigationMenu: VFC<INavigationMenuProps> = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation('common');

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <StyledTriggerContainer type="button" onClick={toggleIsOpen}>{trigger}</StyledTriggerContainer>
      {isOpen && (
        <StyledMenuContainer>
          <NavbarContentContainer>
            <StyledMenu>
              <MenuContainer>
                {children}
              </MenuContainer>
              <LanguageToggle />
            </StyledMenu>

            <NavbarLinksContainer>
              <StyledClose onClick={toggleIsOpen} />
              <StyledLink to={APP_ROUTES.HELP}>{t('footer.links.help')}</StyledLink>
              <StyledLink to={APP_ROUTES.ABOUT}>{t('footer.links.about')}</StyledLink>
              <StyledLink to={APP_ROUTES.LICENSE}>{t('footer.links.license')}</StyledLink>
              <StyledLink to={APP_ROUTES.RULES}>{t('footer.links.rules')}</StyledLink>
              <FooterText>
                {t('footer.info')}
              </FooterText>
            </NavbarLinksContainer>
          </NavbarContentContainer>
        </StyledMenuContainer>
      )}
    </>
  );
};

export { StyledNavigationMenuItem };

export default NavigationMenu;
