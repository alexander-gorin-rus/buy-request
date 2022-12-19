export interface ICardProps<D extends IBaseCardData> {
  data: D;
  url?: string;
  cover?: string;
  statusLabels?: { [key: string]: string }
}

export interface IBaseCardData { // share the interface
  id: string;
  description: string;
  createdAt: string;
  tags?: string[];
  price?: string;
  title: string;
  status?: string;
  mark?: string;
}
