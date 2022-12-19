import { RequestStatus } from 'src/utils/constants';

export const REQUESTS_STATUS_OPTIONS = [
  {
    label: 'request:status.disable',
    value: RequestStatus.DISABLE,
  },
  {
    label: 'request:status.active',
    value: RequestStatus.IN_PROGRESS,
  },
];
