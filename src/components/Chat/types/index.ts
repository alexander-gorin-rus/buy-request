import { IDefaultAction, IDefaultPromiseAction, PayloadWithError } from '../../../core/types';

export interface IChatMessage {
  createdAt: string;
  dialogId: string;
  text: string;
  userId: string;
  isChanged: boolean;
  file?: string;
  id: string;
  images: string[]
}

type User = {
  name: string,
  surname: string,
  avatar: string;
};

export interface ICompanionUserState {
  user: User | null
}

export interface IChatProps {
  userIds: string[];
  isChatOpen: boolean;
  toggleChatView: () => void;
  currentUserId?: string;
  dealId?: string;
}

export interface IChatMediaPayload {
  files?: File[];
}

export interface IChatInputProps {
  sendMessage: (message: string, images?: string[]) => void;
}

export interface IChatMedia {
  image: File;
  preview: string;
  imageSize: number;
  width?: number;
  height?: number;
  imagePixelsCount?: number;
}

export interface ICreatingChatMediaAction {
  type: string;
  payload: IChatMediaPayload;
}

export type ChatMediaActions =
  IDefaultPromiseAction<string, IChatMediaPayload>;

export interface IStyledChatBoxProps {
  isChatOpen: boolean;
}

export interface IStyledMessageProps {
  isSelf: boolean;
  isMediaOpen: boolean;
}

export interface IChatHeaderProps {
  toggleChatView: () => void;
  userName: string;
}

export interface IChatMessageProps {
  message: IChatMessage;
}

export interface IImageContainerProps {
  onClick?: (index: number) => void;
}

export interface IChatMessageListProps {
  messages: IChatMessage[];
}

export interface IStyledChatSpanProps {
  height?: number;
}

export interface IStyledFormProps {
  error?: boolean;
}

export interface ISendMessageFormValues {
  text: string;
  images: IChatMedia[];
}

export interface IGetCompanionUserRequestParams {
  userId: string;
}

export interface CompanionUserPayload extends PayloadWithError {
  user?: User,
}

export interface IGetCompanionUser
  extends IDefaultAction <string, IGetCompanionUserRequestParams> {}

export interface IGetCompanionUserSuccess extends IDefaultAction<string, CompanionUserPayload> {}

export interface IGetCompanionUserFailure
  extends IDefaultAction<string, CompanionUserPayload> {}
