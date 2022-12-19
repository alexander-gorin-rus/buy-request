import React, { memo, VFC } from 'react';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { IAvatar } from './types';

export const AvatarComponent: VFC<IAvatar> = memo(({
  isEdit, onSubmit, onChange, src, userId, fileBlob, setRemoveFile,
  size = { width: 36, height: 36 }, ...anyProps
}) => {
  const { t } = useTranslation('common');
  const handleDelete = () => {
    if (setRemoveFile) {
      setRemoveFile(true);
    }
  };

  return (
    <div>
      <Avatar
        alt="avatar"
        {...anyProps}
        src={fileBlob || (src ? `${config.mediaServiceUrl}/avatar/${src}` : '')}
        sx={size}
      />
      {
        isEdit
        && (
          <>
            <label htmlFor="upload-photo">
              <input
                style={{ display: 'none' }}
                id="upload-photo"
                type="file"
                name="file"
                accept=".png, .jpg, .jpeg"
                onChange={onChange}
              />
              <Fab
                color="primary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
              >
                <AddIcon />
                {t('media.add')}
              </Fab>
            </label>
            <IconButton aria-label="delete" onClick={handleDelete}>
              <CancelPresentationIcon />
            </IconButton>
          </>
        )
      }
    </div>
  );
});
