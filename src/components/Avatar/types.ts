import { ImgHTMLAttributes, RefObject } from 'react';
import { IMediaValidator } from 'src/core/types';

export interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  avatar: string;
  setRemoveAvatar?: (state: boolean) => void;
  isRemovedAvatar?: boolean;
  isEdit?: boolean;
  file?: IMediaValidator | null;
  setFile?: (state: IMediaValidator | null) => void;
  inputRef?: RefObject<HTMLInputElement> | null;
}
