import { DealStatus } from '../../../../utils/constants';
import i18next from '../../../../i18next';

export const DEAL_STATUS_OPTIONS = [
  {
    label: 'dealCard:dealStatus.confirm',
    selectName: i18next.t('dealCard:dealStatusPlural.confirm'),
    value: DealStatus.COMPLETED,
  },
  {
    label: 'dealCard:dealStatus.canceled',
    selectName: i18next.t('dealCard:dealStatusPlural.canceled'),
    value: DealStatus.CANCELED,
  },
  {
    label: 'dealCard:dealStatus.progress',
    value: DealStatus.IN_PROGRESS,
  },
  {
    label: 'dealCard:dealStatus.customer_paid',
    value: DealStatus.CUSTOMER_PAID,
  },
  {
    label: 'dealCard:dealStatus.paid',
    value: DealStatus.PAID,
  },
];
