import { IDefaultPromiseAction } from '../../../../core/types';

export type FormInputs = {
  comment?: string,
  rating: number
};

export interface ICreatingFeedback {
  entityId: string;
  entityName: string;
  value: number;
  comment?: string;
}

export interface ICreatingRequestState {
  error: string | null | undefined | {};
  isLoading: boolean;
}

export interface ICreatingFeedbackState {
  ratings : string[];
}

export interface ISetFeedback<T, P> {
  type: T;
  payload?: P;
}

export type ErrorPayload = {
  error: string | string[],
  ratings?: [],
};

export type FeedbackPayload = {
  [key: string]: any
};

export interface ISetCreatingFeedback extends ISetFeedback<string, FeedbackPayload> {}
export interface ISetCreatingFeedbackSuccess extends ISetFeedback<string, FeedbackPayload> {}
export interface ISetCreatingFeedbackFailure extends ISetFeedback<string, ErrorPayload> {}
export interface ICreatingFeedbackPromiseAction
  extends IDefaultPromiseAction<string, FeedbackPayload> {}

export type CreateFeedbackActions =
  ISetCreatingFeedback |
  ISetCreatingFeedbackSuccess |
  ISetCreatingFeedbackFailure;
