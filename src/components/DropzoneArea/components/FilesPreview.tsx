import React, {
  VFC, memo, useCallback,
} from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';

import { useDropzone } from 'react-dropzone';
import uniqueId from 'lodash/uniqueId';
import {
  StyledDropzone,
  StyledThumbContainer,
} from '../styles';
import { IFilesPreviewProps } from '../types';
import { IMedia } from '../../../core/types';
import config from '../../../config';
import FilePreivew from './FilePreivew';
import { ReactComponent as Add } from '../../../images/add.svg';

const FilesPreview: VFC<IFilesPreviewProps> = memo(({
  onChange, files, disabled, bucketName, acceptedFiles, filesLimit,
}) => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDelete = (fileForRemove: IMedia) => (): void => {
    const newFiles = files.filter(
      (file) => file.fileNameMinio !== fileForRemove.fileNameMinio || file.id !== fileForRemove.id,
    );

    onChange(newFiles);
  };
  const onDrop = useCallback((newFiles: File[]): void => {
    if (newFiles.length) {
      Promise
        .all<IMedia>(
        newFiles
          .map((file: File) => new Promise(
            (resolve, reject) => {
              const img = new Image();
              const preview = URL.createObjectURL(file);
              img.src = preview;
              img.onerror = reject;
              img.onload = () => {
                resolve({
                  fileNameMinio: '',
                  fileOriginalName: file.name,
                  mimetype: file.type,
                  id: uniqueId('file_'),
                  preview: URL.createObjectURL(file),
                  file,
                  imageWidth: img.naturalWidth,
                  imageHeight: img.naturalHeight,
                  imagePixelsCount: img.naturalWidth * img.naturalHeight,
                  fileSize: file.size,
                });
              };
            },
          )),
      )
        .then((result: IMedia[]) => {
          onChange([...files, ...result]);
        });
    }
  }, [files]);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = files.findIndex(
        (file) => file.id === active.id || file.fileNameMinio === active.id,
      );
      const newIndex = files.findIndex(
        (file) => file.id === over?.id || file.fileNameMinio === over?.id,
      );

      const newOrderedFiles = arrayMove(files, oldIndex, newIndex);

      onChange(newOrderedFiles);
    }
  }, [files]);

  const {
    getRootProps, getInputProps, isFocused, isDragAccept, isDragReject,
  } = useDropzone({ onDrop, accept: acceptedFiles, maxFiles: filesLimit });

  return (
    <StyledThumbContainer>
      <DndContext
        autoScroll={false}
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >

        <SortableContext items={files} strategy={horizontalListSortingStrategy}>
          {files.map((file, index) => {
            const isSelected = index === 0;
            const preview = file.preview || `${config.mediaServiceUrl}/${file.bucket || bucketName}/${file.fileNameMinio}`;
            const key = `${file.fileNameMinio || file.fileOriginalName}_${index}`;
            return (
              <FilePreivew
                isSelected={isSelected}
                file={file}
                key={key}
                handleDelete={handleDelete(file)}
                preview={preview}
                disabled={disabled}
              />
            );
          })}
        </SortableContext>
      </DndContext>
      <StyledDropzone
        disabled={disabled}
        {...getRootProps({ isFocused, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <Add />
      </StyledDropzone>
    </StyledThumbContainer>
  );
});

export default FilesPreview;
