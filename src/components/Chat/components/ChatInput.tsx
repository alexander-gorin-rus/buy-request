import React, {
  VFC,
  memo,
  useCallback,
  useRef,
  useState, useEffect,
} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import i18next, { TFunctionKeys } from 'i18next';
import { chatMessageSendSchema } from 'src/utils/schema';
import dispatchPromise, { getFirstError } from 'src/utils/helpers';
import { IFileResponse } from 'src/core/types';
import { ReactComponent as Add } from 'src/icons/add.svg';
import { setCreatingChatMedia } from 'src/components/Chat/actions/actions';
import { ISendMessageFormValues, IChatInputProps, IChatMedia } from 'src/components/Chat/types';
import {
  StyledChatInput,
  StyledSendMessageButton,
  StyledAddImage,
  StyledChatInputWrapper,
  StyledChatTextarea,
  StyledForm, StyledSendIcon,
  InputFieldWarning,
} from '../styled';
import ChatSlider from './ChatSlider';

const ChatInput: VFC<IChatInputProps> = memo((props) => {
  const { sendMessage } = props;
  const [currentHeight, setCurrentHeight] = useState(40);

  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const {
    control, handleSubmit, formState: { errors }, reset, setValue, watch,
  } = useForm<ISendMessageFormValues>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: joiResolver(chatMessageSendSchema),
    defaultValues: {
      text: '',
      images: [],
    },
  });

  const files = watch('images');
  const text = watch('text');

  const onSendMessage = (values: ISendMessageFormValues) => {
    if (values.images.length) {
      dispatchPromise<IFileResponse[]>(dispatch, setCreatingChatMedia(
        { files: values.images.map((imageInfo) => imageInfo.image) },
      )).then((chatFiles: IFileResponse[]) => {
        sendMessage(values.text, chatFiles.map((chatFile) => chatFile.fileNameMinio));
      });
    } else {
      sendMessage(values.text);
    }
    reset();
  };

  const onImagesChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    if (newFiles?.length) {
      Promise
        .all<IChatMedia>(
        newFiles.map((file: File) => new Promise(
          (resolve, reject) => {
            const img = new Image();
            const preview = URL.createObjectURL(file);
            img.src = preview;
            img.onerror = reject;
            img.onload = () => {
              resolve({
                preview,
                image: file,
                width: img.naturalWidth,
                height: img.naturalHeight,
                imagePixelsCount: img.naturalWidth * img.naturalHeight,
                imageSize: file.size,
              });
            };
          },
        )),
      )
        .then((result: IChatMedia[]) => {
          setValue('images', [...files, ...result]);
          e.target.value = '';
        });
    }
  }, [files]);

  const onDeleteClick = useCallback((imageToDelete: IChatMedia) => {
    setValue('images', files.filter((e) => e !== imageToDelete), { shouldValidate: true });
    URL.revokeObjectURL(imageToDelete.preview);
  }, [files]);

  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onHeightChange = (checkText: string) => {
    const scrollHeight = textareaRef?.current?.scrollHeight ?? 54;
    if (scrollHeight !== currentHeight) {
      setCurrentHeight(scrollHeight);
    }
    if (currentHeight > scrollHeight) {
      setCurrentHeight(currentHeight - 20);
    }
    if (!checkText) {
      setCurrentHeight(54);
    }
  };

  useEffect(() => {
    onHeightChange(text);
  }, [text]);

  return (
    <StyledChatInput>
      <StyledForm
        onSubmit={handleSubmit(onSendMessage)}
        ref={formRef}
        error={!!errors.text || !!errors.images}
      >
        <Controller
          name="text"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <StyledChatTextarea
                {...field}
                id="textarea"
                ref={textareaRef}
                height={currentHeight}
                placeholder={t('chat.sendMessage')}
              />
              {!!error
              && (
              <InputFieldWarning>
                { i18next.t(error?.message as TFunctionKeys)}
              </InputFieldWarning>
              )}
            </>
          )}
        />
        <StyledSendMessageButton type="submit">
          <StyledSendIcon />
        </StyledSendMessageButton>
        <Controller
          name="images"
          control={control}
          render={({ field: { value, ...field }, fieldState: { error } }) => (
            <>
              <StyledChatInputWrapper>
                <StyledAddImage htmlFor="upload-photo">
                  <Add />
                </StyledAddImage>
                <input
                  {...field}
                  style={{ display: 'none' }}
                  id="upload-photo"
                  type="file"
                  multiple
                  accept=".png, .jpg, .jpeg,"
                  onChange={onImagesChange}
                />
              </StyledChatInputWrapper>

              {!!error
               && (
               <InputFieldWarning>
                 { i18next.t(getFirstError(error)?.message as TFunctionKeys)}
               </InputFieldWarning>
               )}
              {(value.length > 0)
                && <ChatSlider value={value} onDeleteClick={onDeleteClick} />}
            </>

          )}
        />
      </StyledForm>

    </StyledChatInput>
  );
});

export default ChatInput;
