import {
  IDefaultMedia,
  IFileResponse,
  IMedia,
  IDeleteFileResponse,
} from '../../types';
import { post, del } from '../../axios';

export async function uploadFiles(files: File[], bucketName: string): Promise<IDefaultMedia[]> {
  const filesFormData = new FormData();

  files.forEach((fileItem: File) => {
    filesFormData.append('file[]', fileItem);
  });

  const response: IFileResponse[] = await post(
    {
      path: 'file',
      data: filesFormData,
    },
    undefined,
    undefined,
    {
      bucketName,
    },
  );
  return response.filter((responseItem) => responseItem.resultInfo.isSuccess)
    .map((responseItem: IFileResponse) => ({
      fileNameMinio: responseItem.fileNameMinio,
      fileOriginalName: responseItem.fileOriginalName,
      bucket: bucketName,
      mimetype: responseItem.mimetype,
    }));
}

export async function deleteFiles(
  fileNames: string[],
  bucketName: string,
): Promise<IDeleteFileResponse[]> {
  const response = await del<IDeleteFileResponse[]>({
    path: 'file',
    params: {
      fileNamesMinio: JSON.stringify(fileNames),
      bucketName,
    },
  });
  return response;
}

export async function uploadMediaIfNeeded(
  media: IMedia[],
  bucketName: string,
  withBucket: boolean = true,
): Promise<IDefaultMedia[]> {
  return Promise.all(media.map(async (mediaItem) => {
    if (mediaItem.file) {
      const result = await uploadFiles(
        [mediaItem.file],
        bucketName,
      );
      if (withBucket) {
        return {
          fileNameMinio: result[0]?.fileNameMinio,
          fileOriginalName: result[0]?.fileOriginalName,
          mimetype: result[0]?.mimetype,
          bucket: bucketName,
        };
      }

      return {
        fileNameMinio: result[0]?.fileNameMinio,
        fileOriginalName: result[0]?.fileOriginalName,
        mimetype: result[0]?.mimetype,
      };
    }
    if (withBucket) {
      return {
        fileNameMinio: mediaItem.fileNameMinio,
        fileOriginalName: mediaItem.fileOriginalName,
        mimetype: mediaItem.mimetype,
        bucket: mediaItem.bucket,
      };
    }

    return {
      fileNameMinio: mediaItem.fileNameMinio,
      fileOriginalName: mediaItem.fileOriginalName,
      mimetype: mediaItem.mimetype,
    };
  }));
}
