import React, { VFC } from 'react';

import { useNavigate } from 'react-router';
import { APP_ROUTES } from 'src/core/appRoutes';

import { ReactComponent as Logo } from 'src/logo.svg';
import { StyledNavbarContainer, StyledNavbar, StyledLogoWrapper } from './styles';
import Navigation from './components/Navigation';
import UserActions from './components/UserActions';
import { INavbarProps } from './types';

const Navbar: VFC<INavbarProps> = ({ user }) => {
  const navigate = useNavigate();
  const openDashboard = () => {
    navigate(APP_ROUTES.DASHBOARD);
  };
  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <StyledLogoWrapper onClick={openDashboard}>
          <Logo />
        </StyledLogoWrapper>

        <Navigation authorized={!!user} />
        <UserActions user={user} />
      </StyledNavbar>
    </StyledNavbarContainer>
  );
};

export default Navbar;
