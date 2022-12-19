import { IMediaValidator } from '../../../containers/refactoredContainers/UserProfile/types';

export const MAX_IMAGE_SIZE_BYTES = 2097152;
export const MAX_VIDEO_SIZE_BYTES = 104857600;
export const MIN_IMAGE_RESOLUTION = 100;
export const MAX_IMAGE_RESOLUTION = 7680;
export const MAX_FILE_RESOLUTION = 33177600;

export const isResolutionValid = (resolution: IMediaValidator) : boolean => {
  const fileResolution = resolution.width * resolution.height;
  return fileResolution >= 10000
    && fileResolution <= MAX_FILE_RESOLUTION
    && resolution.file.size < MAX_IMAGE_SIZE_BYTES
    && resolution.height <= MAX_IMAGE_RESOLUTION
    && resolution.width <= MAX_IMAGE_RESOLUTION
    && resolution.width >= MIN_IMAGE_RESOLUTION
    && resolution.height >= MIN_IMAGE_RESOLUTION;
};
