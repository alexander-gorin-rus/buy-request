import { IUpdateDealStatusAction, IUpdateDealStatusPayload } from '../types';
import types from '../../../../core/actionTypes';

export const setUpdateDeal = (
  payload: IUpdateDealStatusPayload,
): IUpdateDealStatusAction => ({
  type: types.UPDATE_DEAL_REQUEST,
  payload,
});

export const setUpdateDealFailure = (
  payload: any,
): IUpdateDealStatusAction => ({
  type: types.UPDATE_DEAL_FAILURE,
  payload,
});
