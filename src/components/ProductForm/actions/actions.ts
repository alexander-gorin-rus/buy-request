import types from '../../../core/actionTypes';
import {
  ErrorPayload,
  IGetTagsAction,
  IGetTagsFailureAction,
  IGetTagsSuccessAction,
  TagsSuccessPayload,
} from '../types';

export const fetchTagsRequest = (): IGetTagsAction => ({
  type: types.PRODUCT_FORM_TAGS_REQUEST,
  payload: {},
});

export const fetchTagsSuccess = (
  payload: TagsSuccessPayload,
): IGetTagsSuccessAction => ({
  type: types.PRODUCT_FORM_TAGS_SUCCESS,
  payload,
});

export const fetchTagsFailure = (
  payload: ErrorPayload,
): IGetTagsFailureAction => ({
  type: types.PRODUCT_FORM_TAGS_FAILURE,
  payload,
});
