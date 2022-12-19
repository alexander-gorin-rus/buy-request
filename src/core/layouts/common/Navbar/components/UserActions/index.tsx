import React, { VFC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import LanguageToggle from 'src/components/LanguageToggle';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { APP_ROUTES } from 'src/core/appRoutes';
import { setUserLogout } from 'src/core/actions/actions';
import { TypeUser } from 'src/utils/constants';
import { Avatar } from 'src/components/Avatar';

import Notifications from '../Notifications';
import { IUserActionsProps } from './types';
import {
  StyledUserActionsContainer,
  StyledLogout,
  StyledLogin,
  StyledAvatarWrapper,
} from './styles';

const UserActions: VFC<IUserActionsProps> = ({ user }) => {
  const { t } = useTranslation('navbar');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = () => {
    navigate(APP_ROUTES.LOGIN);
  };

  const register = () => {
    navigate(APP_ROUTES.REGISTER);
  };
  const openProfile = () => {
    if (user?.type === TypeUser.seller || TypeUser.consumer) {
      navigate(APP_ROUTES.PROFILE);
    }
  };

  const logout = () => {
    dispatch(setUserLogout());
  };

  if (user) {
    return (
      <StyledUserActionsContainer>
        <LanguageToggle hideMobile />
        <StyledAvatarWrapper>
          <Avatar
            avatar={user.avatar}
            onClick={openProfile}
          />
        </StyledAvatarWrapper>
        <Notifications />
        <StyledLogout onClick={logout} />
      </StyledUserActionsContainer>
    );
  }
  return (
    <StyledUserActionsContainer smallGap>
      <LanguageToggle />
      <CustomStyledButton onClick={login} low noBorder>
        <StyledLogin />
        {t('userActions.login')}
      </CustomStyledButton>
      <CustomStyledButton primary low onClick={register}>{t('userActions.signup')}</CustomStyledButton>
    </StyledUserActionsContainer>
  );
};

export default UserActions;
