import React, { VFC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { APP_ROUTES } from 'src/core/appRoutes';
import useWindowSize from 'src/utils/hooks/useWindowSize';
import { BREAKPOINTS, TypeUser } from 'src/utils/constants';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import IconEdit from 'src/icons/IconEdit';
import {
  ProfileTitle, ProfileTitleWrapper, ProfileSecondaryContent,
  EditButtonWrapper, StyledProfileType,
} from '../styles';
import { IProfileData } from '../types';

const ProfileInfo: VFC<IProfileData> = memo(({
  profile: {
    surname, name, email, type,
  },
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation('profile');
  const [width = BREAKPOINTS.mobile] = useWindowSize();

  const handleOpenProfileSettings = () => {
    navigate(APP_ROUTES.PROFILE_SETTINGS);
  };

  return (
    <div>
      {width > BREAKPOINTS.mobile && (
        <StyledProfileType>
          {type === TypeUser.consumer ? t('consumer') : t('seller')}
        </StyledProfileType>
      )}
      <ProfileTitleWrapper>
        <ProfileTitle>
          {`${surname} ${name}`}
        </ProfileTitle>
      </ProfileTitleWrapper>
      <ProfileSecondaryContent>
        {email}
      </ProfileSecondaryContent>
      <EditButtonWrapper>
        <CustomStyledButton
          onClick={handleOpenProfileSettings}
          noBorder
        >
          <IconEdit />
          {t('editProfile')}
        </CustomStyledButton>
      </EditButtonWrapper>
    </div>
  );
});

export default ProfileInfo;
