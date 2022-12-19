import {
  ISetCreatingFeedback,
  ISetCreatingFeedbackSuccess,
  ISetCreatingFeedbackFailure,
  ErrorPayload,
  ICreatingFeedback,
} from '../types';
import types from '../../../../core/actionTypes/index';

export const setCreatingFeedback = (
  payload: ICreatingFeedback,
): ISetCreatingFeedback => ({
  type: types.CREATE_FEEDBACK_REQUEST,
  payload,
});

export const setCreatingFeedbackSuccess = (): ISetCreatingFeedbackSuccess => ({
  type: types.CREATE_FEEDBACK_SUCCESS,
});

export const setCreatingFeedbackFailure = (
  payload: ErrorPayload,
): ISetCreatingFeedbackFailure => ({
  type: types.CREATE_FEEDBACK_FAILURE,
  payload,
});
