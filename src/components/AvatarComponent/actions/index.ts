import types from '../../../core/actionTypes';
import { IAvatarInput } from '../types';

export const updateAvatarRequest = (
  payload: IAvatarInput,
) => ({
  type: types.UPLOAD_AVATAR_REQUEST,
  payload,
});
