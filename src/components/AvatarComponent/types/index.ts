import { IDispatchPayload } from '../../../containers/refactoredContainers/UserProfile/types';

export interface IAvatarInput {
  file?: FileList
  objectName?: string
}

export interface IAvatar {
  isEdit: boolean;
  src: string | undefined;
  size?: { width: number | string, height: number | string };
  fileBlob?: string;
  onSubmit?: (dispatch: IDispatchPayload) => void;
  userId?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setRemoveFile?:(e: boolean) => void;
}

export interface IFileNameMinio {
  fileNameMinio: string,
  resultInfo: {
    isSuccess: boolean;
    message?: string;
    error: string;
  }
}
