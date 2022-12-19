import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCurrentUserSelector } from 'src/core/selectors';
import BackButton from 'src/components/BackButton';
import { APP_ROUTES } from 'src/core/appRoutes';
import types from 'src/core/actionTypes';
import { getUserProfileAction } from '../Profile/actions/actions';
import { getProfileSelector } from '../Profile/selectors';
import ProfileForm from './components/ProfileForm';
import { ProfileSettingsWrapper } from './styles';

const ProfileSettings: FC = memo(() => {
  const dispatch = useDispatch();
  const { t } = useTranslation('profile');
  const currentUser = useSelector(getCurrentUserSelector);
  const profile = useSelector(getProfileSelector);

  const handleTransitionBackPage = () => {
    dispatch({
      type: types.CLEAR_SETTINGS_STATE,
    });
  };

  useEffect(() => {
    if (currentUser?.id && !profile) {
      dispatch(getUserProfileAction({ currentUserId: currentUser.id }));
    }
  }, [dispatch, currentUser, profile]);

  if (!profile) return null;

  return (
    <ProfileSettingsWrapper>
      <BackButton
        title={t('backBtnTitle')}
        url={APP_ROUTES.PROFILE}
        onClick={handleTransitionBackPage}
      />
      <ProfileForm profile={profile} />
    </ProfileSettingsWrapper>
  );
});

export default ProfileSettings;
