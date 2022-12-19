import { ICurrentUser } from '../../../../../types';

export interface IUserActionsProps {
  user?: ICurrentUser | null;
}

export interface IStyledUserActionsContainerProps {
  smallGap?: boolean;
}
