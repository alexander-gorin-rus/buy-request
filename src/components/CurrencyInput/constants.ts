import { Currency } from 'src/utils/constants';
import { ICurrencyOption } from './types';

export const currencyOptions: ICurrencyOption[] = [
  { value: Currency.RUB, label: '₽' },
  { value: Currency.USD, label: '$' },
];
