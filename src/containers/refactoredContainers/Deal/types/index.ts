import { IDefaultAction, IDefaultPromiseAction } from '../../../../core/types';
import { DealStatus } from '../../../../utils/constants';

export interface IUpdateDealStatusPayload {
  id: string,
  status: DealStatus
}

export interface DealControlButtonsProps {
  status: DealStatus;
  dealId: string;
  toggleFeedback: () => void;
  isVisibleEstimateButton: boolean;
}

export interface IUpdateDealStatusAction
  extends IDefaultAction<string, IUpdateDealStatusPayload> {}

export interface IUpdateDealPromiseAction
  extends IDefaultPromiseAction<string, IUpdateDealStatusPayload> {}
