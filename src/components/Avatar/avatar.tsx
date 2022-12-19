import React, {
  FC, memo, useState, useEffect, ChangeEvent,
} from 'react';
import IconEdit from 'src/icons/IconEdit';
import IconDelete from 'src/icons/IconDelete';
import defaultAvatar from 'src/icons/svg/default-avatar.svg';
import config from 'src/config';
import { IMediaValidator } from 'src/core/types';
import { IAvatarProps } from './types';
import {
  AvatarControls, AvatarWrapper, AvatarLabel,
  AvatarInput, StyledAvatarImg,
} from './styles';

export const Avatar: FC<IAvatarProps> = memo(({
  avatar, setRemoveAvatar, file, setFile,
  isEdit = false, isRemovedAvatar, inputRef, ...anyProps
}) => {
  const avatarUrl = `${config.mediaServiceUrl}/avatar/${avatar}`;
  const [imgSrc, setImgSrc] = useState<string | undefined>(avatarUrl);
  const onError = () => setImgSrc(defaultAvatar);
  const fileBlob = file ? URL.createObjectURL(file?.file) : undefined;

  const handleDelete = () => {
    if (setRemoveAvatar) setRemoveAvatar(true);
    if (setFile) setFile(null);
  };

  const onSetFile = (e: ChangeEvent<HTMLInputElement>) => {
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
          if (setRemoveAvatar) setRemoveAvatar(false);
          if (setFile) setFile(fileAvatar);
        };
        if (typeof fileReader.result === 'string') {
          image.src = fileReader.result;
        }
      };
      fileReader.readAsDataURL(newFile);
    }
  };

  useEffect(() => {
    if (isRemovedAvatar) setImgSrc(defaultAvatar);
  }, [isRemovedAvatar]);

  useEffect(() => {
    if (!fileBlob && !isRemovedAvatar) {
      setImgSrc(avatarUrl);
    }
  }, [avatar, file]);

  return (
    <AvatarWrapper>
      <StyledAvatarImg
        {...anyProps}
        src={fileBlob || imgSrc}
        onError={onError}
        alt="avatar"
      />
      {isEdit && (
        <AvatarControls>
          <AvatarLabel htmlFor="upload-avatar">
            <AvatarInput
              id="upload-avatar"
              type="file"
              name="file"
              accept=".png, .jpg, .jpeg"
              onChange={onSetFile}
              ref={inputRef}
            />
            <IconEdit />
          </AvatarLabel>
          {(file || avatar) && !isRemovedAvatar && (
            <IconDelete onClick={handleDelete} />
          )}
        </AvatarControls>
      )}
    </AvatarWrapper>
  );
});
