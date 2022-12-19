import React, { memo, useEffect, VFC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserSelector } from 'src/core/selectors';
import { TypeUser } from 'src/utils/constants';
import { Avatar } from 'src/components/Avatar';
import ProfileInfo from './components/ProfileInfo';
import ProfileStatistics from './components/ProfileStatistics';
import ProfileRating from './components/ProfileRating';
import ProfileTags from './components/ProfileTags';
import ProfileReviews from './components/ProfileReviews';
import { getProfileSelector } from './selectors';
import { getUserProfileAction } from './actions/actions';
import {
  ProfileWrapper, ProfileHeader, StatisticsContainer, ProfileAvatarContainer,
} from './styles';

const Profile: VFC = memo(() => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserSelector);
  const profile = useSelector(getProfileSelector);

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(getUserProfileAction({ currentUserId: currentUser.id }));
    }
  }, [dispatch, currentUser]);

  if (!profile) return null;

  return (
    <ProfileWrapper>
      <ProfileHeader>
        <ProfileAvatarContainer>
          <Avatar avatar={profile.avatar} />
        </ProfileAvatarContainer>
        <ProfileInfo profile={profile} />
      </ProfileHeader>
      <StatisticsContainer>
        <ProfileStatistics profile={profile} />
        <ProfileRating profile={profile} />
      </StatisticsContainer>
      {profile.type === TypeUser.seller && <ProfileTags />}
      <ProfileReviews />
    </ProfileWrapper>
  );
});
export default Profile;
