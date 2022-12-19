import { del } from '../../../core/axios';

export function* deleteAvatar(avatarName: string | null): Generator<any> {
  yield del({
    path: 'file',
    params: {
      fileNamesMinio: JSON.stringify([avatarName]),
      bucketName: 'avatar',
    },
  });
}
