import React, {
  FC, memo, useEffect, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from 'src/components/BackButton';
import { APP_ROUTES } from 'src/core/appRoutes';
import { Avatar } from 'src/components/Avatar';
import { IMediaValidator } from 'src/core/types';
import { getCurrentUserSelector } from 'src/core/selectors';
import IconDelete from 'src/icons/IconDelete';
import { getUserProfileAction } from '../Profile/actions/actions';
import { getProfileSelector } from '../Profile/selectors';
import { setIsRemovedAvatar, setNewAvatar } from '../ProfileSettings/actions/actions';
import { getProfileSettingsSelector } from '../ProfileSettings/selectors';
import { ProfileSettingsWrapper } from '../ProfileSettings/styles';
import { StyledMobileAvatar, StyledMobileAvatarControls, StyledMobileAvatarControl } from './styles';

const ProfileAvatarSettings: FC = memo(() => {
  const { t } = useTranslation('profile');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const profile = useSelector(getProfileSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const { newAvatar, isRemovedAvatar } = useSelector(getProfileSettingsSelector);

  const setRemoveAvatar = (data: boolean) => {
    dispatch(setIsRemovedAvatar({ isRemovedAvatar: data }));
  };

  const setFile = (file: IMediaValidator | null) => {
    dispatch(setNewAvatar({ newAvatar: file }));
  };

  const handleSelectFile = () => {
    if (inputRef?.current) {
      inputRef.current.click();
    }
  };

  const handleDelete = () => {
    setRemoveAvatar(true);
    setFile(null);
  };

  useEffect(() => {
    if (currentUser?.id && !profile) {
      dispatch(getUserProfileAction({ currentUserId: currentUser.id }));
    }
  }, [dispatch, currentUser, profile]);

  return (
    <ProfileSettingsWrapper>
      <BackButton title={t('avatarSettingsBackBtn')} url={APP_ROUTES.PROFILE_SETTINGS} />
      {profile && (
        <StyledMobileAvatar>
          <Avatar
            isEdit
            avatar={profile.avatar}
            isRemovedAvatar={isRemovedAvatar}
            setRemoveAvatar={setRemoveAvatar}
            file={newAvatar}
            setFile={setFile}
            inputRef={inputRef}
          />
          <StyledMobileAvatarControls>
            <StyledMobileAvatarControl onClick={handleSelectFile}>
              { profile.avatar ? t('replaceImage') : t('addImage')}
            </StyledMobileAvatarControl>
            {(newAvatar || profile.avatar) && !isRemovedAvatar && (
              <IconDelete onClick={handleDelete} />
            )}
          </StyledMobileAvatarControls>
        </StyledMobileAvatar>
      )}
    </ProfileSettingsWrapper>
  );
});

export default ProfileAvatarSettings;
