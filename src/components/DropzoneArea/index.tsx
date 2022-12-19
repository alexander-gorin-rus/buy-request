import React, {
  memo, VFC, useEffect, useMemo,
} from 'react';

import { FieldError } from 'react-hook-form';
import isArray from 'lodash/isArray';
import FilesPreview from './components/FilesPreview';
import {
  StyledDropzoneContainer, StyledDropzoneTitle,
  StyledCustomBox, StyledFilesZone,
} from './styles';
import { IDropzoneProps } from './types';
import I18next from '../../i18next';
import { ReactComponent as Helper } from '../../images/helper.svg';
import { InputFieldWarning } from '../CustomStyledInput/style';

const DropzoneArea: VFC<IDropzoneProps> = memo(({
  onChange,
  acceptedFiles = ['image/jpeg', 'image/jpg', 'image/png'],
  filesLimit,
  files,
  title = null,
  disabled = false,
  bucketName,
  error,
}: IDropzoneProps) => {
  const { t } = I18next;

  const errorToShow = useMemo(() => {
    if (isArray(error)) {
      const firstError = error?.find((errorItem) => errorItem);
      if (firstError) { return (Object.values(firstError)[0] as FieldError)?.message; }
    } else {
      return error?.message;
    }

    return '';
  }, [error]);

  useEffect(() => () => {
    files.forEach(((file) => file.preview && URL.revokeObjectURL(file.preview)));
  }, [files]);

  return (
    <StyledDropzoneContainer>
      {
            title
            && (
              <StyledCustomBox>
                <StyledDropzoneTitle disabled={disabled} isError={!!error}>
                  { title }
                </StyledDropzoneTitle>
                <Helper />
              </StyledCustomBox>
            )
          }
      <StyledFilesZone>
        <FilesPreview
          onChange={onChange}
          files={files}
          disabled={disabled}
          bucketName={bucketName}
          acceptedFiles={acceptedFiles}
          filesLimit={filesLimit}
        />
      </StyledFilesZone>

      {
            errorToShow
            && (
              <InputFieldWarning>
                { t(errorToShow) }
              </InputFieldWarning>
            )
          }
    </StyledDropzoneContainer>
  );
});

export default DropzoneArea;
