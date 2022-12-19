export interface IPaginationProps {
  total: number;
  page: number;
  onChange: (value: number) => void;
}

export interface IStyledPageLinkProps {
  active?: boolean;
}
