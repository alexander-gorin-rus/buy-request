import {
  MAX_IMAGE_RESOLUTION,
  MAX_IMAGE_SIZE_BYTES,
  MIN_IMAGE_RESOLUTION,
} from 'src/components/DropzoneArea/constants';
import I18next from 'src/i18next';
import { IMediaValidator } from 'src/core/types';

export const avatarValidationMessage = (file: IMediaValidator) => {
  if (file.file.size > MAX_IMAGE_SIZE_BYTES) {
    return I18next.t('errors:mediaFile.IMAGE_SIZE');
  }
  if (file.height > MAX_IMAGE_RESOLUTION || file.width > MAX_IMAGE_RESOLUTION) {
    return I18next.t('errors:mediaFile.MAX_IMAGE_RESOLUTION');
  }
  if (file.height < MIN_IMAGE_RESOLUTION || file.width < MIN_IMAGE_RESOLUTION) {
    return I18next.t('errors:mediaFile.MIN_IMAGE_RESOLUTION');
  }

  return undefined;
};
