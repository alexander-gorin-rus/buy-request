import { IDeal, ITag } from '../../../../core/types';

export interface IRequestInfoProps {
  deal: IDeal | null | undefined;
}

export interface ISummaryProps {
  tags: ITag [] | undefined;
  deal: IDeal | null | undefined;
  open: boolean;
  setSummaryOpen: () => void;
}
