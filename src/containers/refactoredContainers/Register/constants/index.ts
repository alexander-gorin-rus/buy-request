import { ISelectOption } from 'src/components/Select/types';
import { TypeUser } from 'src/utils/constants';

export const USER_TYPE_OPTIONS: ISelectOption[] = [
  {
    label: 'common:form.label.userConsumer',
    value: TypeUser.consumer,
  },
  {
    label: 'common:form.label.userSeller',
    value: TypeUser.seller,
  },
];
