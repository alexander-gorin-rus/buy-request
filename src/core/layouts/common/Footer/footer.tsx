import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { APP_ROUTES } from 'src/core/appRoutes';
import {
  FooterContainer, FooterLinks, FooterText, StyledLink,
} from './styles';

const Footer = memo(() => {
  const { t } = useTranslation('common');
  return (
    <FooterContainer>
      <FooterText>
        {t('footer.info')}
      </FooterText>
      <FooterLinks>
        <StyledLink to={APP_ROUTES.HELP}>{t('footer.links.help')}</StyledLink>
        <StyledLink to={APP_ROUTES.ABOUT}>{t('footer.links.about')}</StyledLink>
        <StyledLink to={APP_ROUTES.LICENSE}>{t('footer.links.license')}</StyledLink>
        <StyledLink to={APP_ROUTES.RULES}>{t('footer.links.rules')}</StyledLink>
      </FooterLinks>

    </FooterContainer>
  );
});

export default Footer;
