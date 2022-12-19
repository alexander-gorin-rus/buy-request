import { ReactNode } from 'react';

export interface IPopupProps {
  title: ReactNode;
  accept: () => void;
  cancel: () => void;
  acceptButtonTitle: string;
  cancelButtonTitle: string;
  description?: ReactNode;
  acceptButtonIsLoading?: boolean;
}
