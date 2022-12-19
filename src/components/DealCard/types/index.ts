import { IDeal } from '../../../core/types';
import { AnimationStatusState } from '../../../utils/hooks/animStateHook';

export interface IDealState {
  error: null | string;
  isLoading: boolean;
  deal: IDeal | null;
}

export interface IDealCardProps {
  toggleChatView: () => void;
  dealId: string;
  currentUser: ICurrentUserProps;
}

interface ICurrentUserProps {
  type: string;
}

export interface ICollapsatorProps {
  animState: AnimationStatusState;
}

export interface IStyledArrow {
  isOpen: boolean;
}

export interface IGetDealPayload {
  dealId: string;
}

export interface IGetDealSuccessPayload {
  deal: IDeal;
  isLoading?: false;
  error?: null;
}

export interface IGetDealFailurePayload {
  deal?: null;
  isLoading?: false;
  error: null | string,
}

export interface IGetDealAction {
  type: string;
  payload: IGetDealPayload;
}

export interface IGetDealSuccessAction {
  type: string;
  payload: IGetDealSuccessPayload;
}

export interface IGetDealFailureAction {
  type: string;
  payload: IGetDealFailurePayload;
}

export type GetDealActions =
  IGetDealSuccessAction |
  IGetDealFailureAction;
