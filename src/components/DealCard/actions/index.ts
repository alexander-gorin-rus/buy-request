import types from '../../../core/actionTypes';
import {
  IGetDealAction, IGetDealFailureAction, IGetDealFailurePayload,
  IGetDealPayload, IGetDealSuccessAction, IGetDealSuccessPayload,
} from '../types';

export const getDeal = (payload: IGetDealPayload): IGetDealAction => ({
  type: types.GET_DEAL_REQUEST,
  payload,
});

export const getDealSuccess = (payload: IGetDealSuccessPayload):
IGetDealSuccessAction => ({
  type: types.GET_DEAL_SUCCESS,
  payload,
});

export const getDealFailure = (payload: IGetDealFailurePayload):
IGetDealFailureAction => ({
  type: types.GET_DEAL_FAILURE,
  payload,
});
