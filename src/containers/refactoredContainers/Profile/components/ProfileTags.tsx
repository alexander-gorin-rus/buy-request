import React, {
  memo, useMemo, useState, useEffect, FC,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import IconEdit from 'src/icons/IconEdit';
import Badge from 'src/components/Badge';
import { LANGUAGES } from 'src/utils/constants';
import { CustomAutocomplete } from 'src/components/CustomAutocomplete';
import { IAutocompleteItem } from 'src/components/CustomAutocomplete/types';
import { ITag } from 'src/core/types';
import { getComponentLoadingSelector } from 'src/core/selectors';
import { saveTagsAction } from '../actions/actions';
import { getTagsSelector, getSellerProfileSelector } from '../selectors';
import {
  ProfileTitle, ProfileTagsHeader, ProfileTagsList,
  ProfileTagsBadges, StyledButton, ProfileTagsControls,
} from '../styles';

const ProfileTags: FC = memo(() => {
  const { t, i18n: { language } } = useTranslation(['common', 'profile']);
  const dispatch = useDispatch();
  const [isFieldError, setIsFieldError] = useState(false);
  const [isEditTags, setIsEditTags] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tags = useSelector(getTagsSelector);
  const sellerProfile = useSelector(getSellerProfileSelector);
  const isLoading = useSelector(getComponentLoadingSelector);

  const subscribedTagsData = useMemo(() => (
    tags && sellerProfile
      ? tags.filter((tag) => sellerProfile.subscribedTags.includes(tag.id))
      : []
  ), [tags, sellerProfile]);

  const toggleEdit = () => {
    if (isFieldError) setIsFieldError(false);
    setIsEditTags((prevState) => !prevState);
  };

  const handleOnChangeTags = (e: IAutocompleteItem[]) => {
    if (isFieldError) setIsFieldError(false);
    setSelectedTags(e.map((tag) => tag.id));
  };

  const handleOnSubmit = () => {
    if (selectedTags.length) {
      dispatch(saveTagsAction({
        updatedData: {
          tags: selectedTags,
        },
        toggleEdit,
      }));
    } else {
      setIsFieldError(true);
    }
  };

  useEffect(() => {
    if (tags && sellerProfile?.subscribedTags) {
      setSelectedTags(tags
        .filter((tag) => sellerProfile.subscribedTags.includes(tag.id))
        .map((tag) => tag.id));
    }
  }, [tags, sellerProfile, isEditTags]);

  return (
    <div>
      <ProfileTagsHeader>
        <ProfileTitle>
          {t('profile:subscribeToTags')}
        </ProfileTitle>
        {isEditTags
          ? (
            <ProfileTagsControls>
              <StyledButton onClick={toggleEdit} noBorder>
                {t('profile:cancel')}
              </StyledButton>
              <StyledButton onClick={handleOnSubmit} isLoading={isLoading} noBorder>
                {t('profile:save')}
              </StyledButton>
            </ProfileTagsControls>
          )
          : (
            <IconEdit onClick={toggleEdit} />
          )}
      </ProfileTagsHeader>
      <ProfileTagsList>
        {isEditTags
          ? tags && (
          <CustomAutocomplete
            label={t('common:form.label.tags')}
            itemsList={tags}
            emptyValueText={t('profile:emptyTags')}
            onChange={handleOnChangeTags}
            tagsLocalization={(item: IAutocompleteItem) => {
              const tag = item as ITag;
              return (language === LANGUAGES.en)
                ? tag.titleEn : tag.titleRu;
            }}
            value={selectedTags}
            placeholder="placeholder"
            error={isFieldError && t('common:form.validations.minOneTag')}
          />
          )
          : !!subscribedTagsData.length && (
          <ProfileTagsBadges>
            {subscribedTagsData.map((tag) => (
              <Badge key={tag.id}>
                {language === LANGUAGES.en ? tag?.titleEn : tag?.titleRu}
              </Badge>
            ))}
          </ProfileTagsBadges>
          )}
      </ProfileTagsList>
    </div>
  );
});

export default ProfileTags;
