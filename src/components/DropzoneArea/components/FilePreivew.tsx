import React, { VFC } from 'react';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ReactComponent as Delete } from '../../../images/delete.svg';

import {
  StyledNoPreview,
  StyledRemoveBtn,
  StyledThumb,
  StyledThumbInner,
} from '../styles';

import { IFilePreviewProps } from '../types';
import MediaPreview from '../../MediaPreview';

const FilePreview: VFC<IFilePreviewProps> = ({
  isSelected, file, handleDelete, disabled, preview,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: file.fileNameMinio || file.id, disabled });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
    >
      <StyledThumb selected={isSelected}>
        {
            !disabled && (
            <StyledRemoveBtn onClick={handleDelete}>
              <Delete />
            </StyledRemoveBtn>
            )
        }
        <StyledThumbInner
          {...attributes}
          {...listeners}
        >
          {preview ? (
            <MediaPreview url={preview} />
          ) : (
            <StyledNoPreview>
              <FilePresentIcon fontSize="large" />
            </StyledNoPreview>
          )}
        </StyledThumbInner>
      </StyledThumb>
    </div>
  );
};

export default FilePreview;
