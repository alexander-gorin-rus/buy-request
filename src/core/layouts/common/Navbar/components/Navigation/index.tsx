import React, { VFC } from 'react';

import { useTranslation } from 'react-i18next';
import { matchPath, useLocation, useNavigate } from 'react-router';
import { INavigationProps } from './types';
import { StyledNaviagationContainer, StyledNavigationItem, StyledBurger } from './styles';
import { APP_ROUTES } from '../../../../../appRoutes';
import NavigationMenu, { StyledNavigationMenuItem } from '../NavigationMenu';

const Navigation: VFC<INavigationProps> = ({ authorized }) => {
  const { t } = useTranslation('navbar');
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigationClick = (url: string) => () => {
    if (url) navigate(url);
  };

  if (authorized) {
    return (
      <StyledNaviagationContainer>
        <StyledNavigationItem
          onClick={handleNavigationClick(APP_ROUTES.CATALOG)}
          active={!!matchPath(APP_ROUTES.CATALOG_BASE_ROUTE, location.pathname)}
        >
          {t('navigations.products')}
        </StyledNavigationItem>
        <StyledNavigationItem
          onClick={handleNavigationClick(APP_ROUTES.REQUEST_MARKETPLACE)}
          active={!!matchPath(APP_ROUTES.REQUESTS_BASE_ROUTE, location.pathname)}
        >
          {t('navigations.requests')}
        </StyledNavigationItem>
        <StyledNavigationItem
          onClick={handleNavigationClick(APP_ROUTES.OFFERS)}
          active={!!matchPath(APP_ROUTES.OFFERS_BASE_ROUTE, location.pathname)}
        >
          {t('navigations.offers')}
        </StyledNavigationItem>
        <StyledNavigationItem
          onClick={handleNavigationClick(APP_ROUTES.MY_DEALS)}
          active={!!matchPath(APP_ROUTES.DEALS_BASE_ROUTE, location.pathname)}
        >
          {t('navigations.deals')}
        </StyledNavigationItem>
        <NavigationMenu trigger={<StyledBurger />}>
          <StyledNavigationMenuItem
            onClick={handleNavigationClick(APP_ROUTES.CATALOG)}
            active={!!matchPath(APP_ROUTES.CATALOG_BASE_ROUTE, location.pathname)}
          >
            {t('navigations.products')}
          </StyledNavigationMenuItem>
          <StyledNavigationMenuItem
            onClick={handleNavigationClick(APP_ROUTES.REQUEST_MARKETPLACE)}
            active={!!matchPath(APP_ROUTES.REQUESTS_BASE_ROUTE, location.pathname)}
          >
            {t('navigations.requests')}
          </StyledNavigationMenuItem>
          <StyledNavigationMenuItem
            onClick={handleNavigationClick(APP_ROUTES.OFFERS)}
            active={!!matchPath(APP_ROUTES.OFFERS_BASE_ROUTE, location.pathname)}
          >
            {t('navigations.offers')}
          </StyledNavigationMenuItem>
          <StyledNavigationMenuItem
            onClick={handleNavigationClick(APP_ROUTES.MY_DEALS)}
            active={!!matchPath(APP_ROUTES.DEALS_BASE_ROUTE, location.pathname)}
          >
            {t('navigations.deals')}
          </StyledNavigationMenuItem>
        </NavigationMenu>

      </StyledNaviagationContainer>
    );
  }
  return null;
};

export default Navigation;
