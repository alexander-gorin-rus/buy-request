import { Grid } from '@mui/material';
import React, {
  memo, useState, useCallback, useEffect, VFC,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Loader from '../../../components/Loader';
import UserRating from '../../../components/UserRating';
import {
  LoaderBox, StyledContentContainer,
  StyledPageTitle, StyledPageTitleContainer,
} from '../../../core/layouts/styles';
import { getCurrentUserSelector, getComponentLoadingSelector } from '../../../core/selectors';
import ProfileForm from './components/ProfileForm';
import { getRatingsSelector, getSellerProfileSelector, getTagsSelector } from './selectors';
import { clearSellerProfile, fetchSellerProfileRequest, saveSellerProfileSuccess } from './actions/actions';
import SettingsForm from './components/SettingsForm';
import ChangePasswordModal from '../../../components/ChangePasswordModal';
import { IPasswordChange } from '../../../components/ChangePasswordModal/types';
import { changePasswordRequest } from '../../../components/ChangePasswordModal/actions/actions';
import { AvatarComponent } from '../../../components/AvatarComponent';
import { IDispatchPayload, IMediaValidator } from '../UserProfile/types';

const SellerProfile: VFC = memo(() => {
  const dispatch = useDispatch();
  const { t } = useTranslation('sellerProfile');
  const profileSeller = useSelector(getSellerProfileSelector);
  const tags = useSelector(getTagsSelector);
  const ratings = useSelector(getRatingsSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const isLoading = useSelector(getComponentLoadingSelector);
  const [file, setFile] = useState<IMediaValidator>();
  const [removeFile, setRemoveFile] = useState(false);
  const [isEdit, setEditProfile] = React.useState<boolean>(false);
  const toggleEditForm = (): void => {
    setEditProfile(!isEdit);
  };

  const onSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFile = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const image = new Image();
        image.onload = () => {
          const fileAvatar: IMediaValidator = {
            file: newFile,
            width: image.width,
            height: image.height,
          };
          setRemoveFile(false);
          setFile(fileAvatar);
        };
        if (typeof fileReader.result === 'string') {
          image.src = fileReader.result;
        }
      };
      fileReader.readAsDataURL(newFile);
    }
  };

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const toggleChangePasswordModal = useCallback(() => {
    setShowChangePasswordModal(!showChangePasswordModal);
  }, [setShowChangePasswordModal, showChangePasswordModal]);
  const onChangeAvatar = useCallback(
    (updateAvatar: IDispatchPayload) : void => {
      dispatch(
        saveSellerProfileSuccess(updateAvatar),
      );
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    (passwordData: IPasswordChange, reset: () => void): void => {
      dispatch(
        changePasswordRequest({
          ...passwordData,
          reset,
          setShowChangePasswordModal,
        }),
      );
    },
    [dispatch],
  );
  useEffect(() => {
    if (currentUser?.id) {
      dispatch(fetchSellerProfileRequest({ userId: currentUser.id }));
    }
    return () => {
      dispatch(clearSellerProfile());
    };
  }, [dispatch, currentUser]);

  return (
    <StyledContentContainer maxWidth="lg">
      <StyledPageTitleContainer>
        <StyledPageTitle>{t('title')}</StyledPageTitle>
      </StyledPageTitleContainer>
      <LoaderBox>
        {isLoading && <Loader isComponent isLinear />}
      </LoaderBox>
      {profileSeller && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <ProfileForm
              profileSeller={profileSeller}
              showChangePasswordModal={showChangePasswordModal}
              setShowChangePasswordModal={setShowChangePasswordModal}
              media={file}
              removeAvatar={removeFile}
              toggleEditForm={toggleEditForm}
              isEdit={isEdit}
              setFile={setFile}
              setRemoveAvatar={setRemoveFile}
            />
            <SettingsForm
              tags={tags}
              settingData={profileSeller.setting}
            />
            <ChangePasswordModal
              show={showChangePasswordModal}
              onSubmit={onSubmit}
              toggle={toggleChangePasswordModal}
            />
          </Grid>
          {
            currentUser && ratings && (
              <Grid item xs={12} md={5}>
                <AvatarComponent
                  isEdit={isEdit}
                  setRemoveFile={setRemoveFile}
                  src={!removeFile ? currentUser.avatar : ''}
                  fileBlob={file && !removeFile ? URL.createObjectURL(file?.file) : undefined}
                  userId={currentUser.id}
                  onChange={onSetFile}
                  onSubmit={onChangeAvatar}
                  size={{ width: 200, height: 200 }}
                />
                <UserRating
                  rating={ratings.userRating}
                  userId={currentUser.id}
                  userName={`${profileSeller.name} ${profileSeller.surname}`}
                />
              </Grid>
            )
          }
        </Grid>
      )}
    </StyledContentContainer>
  );
});
export default SellerProfile;
