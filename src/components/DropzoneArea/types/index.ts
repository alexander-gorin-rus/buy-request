import { DropzoneRootProps } from 'react-dropzone';
import { IDefaultAction, IMedia } from '../../../core/types';

export interface IStyledFilePreviewProps {
  src: string | null | undefined;
}

export interface IPreviewProps {
  selected: boolean;
}

export interface IFilesPreviewProps {
  onChange: (files: IMedia[]) => void;
  files: IMedia[];
  disabled: boolean;
  bucketName: string;
  filesLimit?: number;
  acceptedFiles?: string[];
}

export interface IFilePreviewProps {
  isSelected: boolean;
  file: IMedia;
  handleDelete: () => void;
  disabled: boolean;
  preview: string;
}

export interface IPreviewFiles {
  name: string;
  preview: string | null;
  key: string;
}

export interface IDropzoneProps {
  onChange: (files: IMedia[]) => void;
  files: IMedia[] | [];
  filesLimit?: number;
  acceptedFiles?: string[];
  maxFileSize?: number;
  customErrorMessage?: string | null;
  title?: string | null;
  disabled?: boolean;
  bucketName: string;
  error?: any;
}

export interface IDropzoneStyleProps extends DropzoneRootProps {
  isError?: boolean;
  disabled?: boolean;
}

export interface IDeleteFilesPayload {
  files: string[];
  bucketName: string;
}

export interface IUploadFilesSuccessAction extends IDefaultAction<string, null> {}
export interface IGetFilesSuccessAction extends IDefaultAction<string, null> {}
export interface IDeleteFilesAction extends IDefaultAction<string, IDeleteFilesPayload> {}
