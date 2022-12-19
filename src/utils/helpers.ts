import CryptoJS from 'crypto-js';
import { FieldError } from 'react-hook-form';
import { AnyAction, Dispatch } from 'redux';
import isArray from 'lodash/isArray';
import { LANGUAGES } from 'src/utils/constants';
import config from '../config';
import i18next from '../i18next';

export function getEncryptPassword(password: string): string {
  return CryptoJS.SHA256(password + config.secretKey).toString();
}

export const doesUserExist = () => {
  const user = localStorage.getItem('buy-request@user');
  return !!user;
};

export function decrypt(encryptedString: string) {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedString, 'secret');
  return JSON.parse(CryptoJS.enc.Utf8.stringify(decryptedBytes));
}

export const getDecryptedUserFromLocalStorage = () => {
  const user = localStorage.getItem('buy-request@user');
  const decryptedUser = decrypt(user!);
  return JSON.parse(decryptedUser);
};

export function writeToLocalStorage(obj: object) {
  const data = CryptoJS.AES.encrypt(JSON.stringify(obj), 'secret');
  localStorage.setItem('buy-request@user', data.toString());
}

export function removeUserFromLocalStorage() {
  localStorage.removeItem('buy-request@user');
}

export const getUserFormLocalStorage = () => {
  const user = localStorage.getItem('buy-request@user');
  if (user) {
    return decrypt(user);
  }
  return undefined;
};

export function isJson(message: string) {
  try {
    JSON.parse(message);
  } catch (e) {
    return message;
  }
  return (
    JSON.parse(message).description || JSON.parse(message).error_description
  );
}

export default function dispatchPromise<T>(dispatch: Dispatch, action: AnyAction) {
  return new Promise<T>((resolve, reject) => {
    dispatch({
      ...action,
      resolve,
      reject,
    });
  });
}

export function isEmpty(obj: object) {
  return !!Object.keys(obj).length;
}

export function shorten(text: string) {
  const words = text.split(' ');
  if (words.length > 9) {
    const short = words.slice(0, 9);
    short.push('...');
    return short.join(' ');
  }
  return text;
}

export function getFormattedPrice<T>(price: T): string | T {
  const inNumber = Number(price);
  return inNumber
    ? `${inNumber.toLocaleString()}${i18next.t('currencySign')}`
    : price;
}

export function truncateString(str: string, n: number): string {
  if (!str || str.length <= n) return str;
  const subString = str.substring(0, n - 1);
  return `${subString.substring(0, subString.lastIndexOf(' '))}...`;
}

export function dateFormat(date: string, options?: Intl.DateTimeFormatOptions): string {
  const newDate = new Date(date);
  const dd = String(newDate.getDate()).padStart(2, '0');
  const mm = String(newDate.getMonth() + 1).padStart(2, '0');
  const yyyy = newDate.getFullYear();

  if (options) {
    const locales = i18next.language === LANGUAGES.en ? 'en-US' : 'ru-RU';

    return newDate.toLocaleDateString(locales, options);
  }

  return `${dd}.${mm}.${yyyy}`;
}

export function timeFormat(date: string): string {
  const newDate = new Date(date);
  const hr = newDate.getHours();
  const min = String(newDate.getMinutes()).padStart(2, '0');

  return `${hr}:${min}`;
}

export function dateFormatWithTime(date: string): string {
  const newDate = new Date(date);
  const dd = String(newDate.getDate()).padStart(2, '0');
  const mm = String(newDate.getMonth() + 1).padStart(2, '0');
  const yyyy = newDate.getFullYear();
  const hours = String(newDate.getHours()).padStart(2, '0');
  const minutes = String(newDate.getMinutes()).padStart(2, '0');

  return `${dd}.${mm}.${yyyy}, ${hours}:${minutes}`;
}

export function timeFormatForNotifications(dateStr: string): string {
  const date = new Date(dateStr);
  const differenceDays = Math.round(
    (new Date().getTime() - date.getTime()) / (1000 * 3600 * 24),
  );

  if (differenceDays > 0) {
    return `${differenceDays} ${i18next.t('notifications:day')}`;
  }

  return timeFormat(dateStr);
}

export const formatPhoneNumber = (phoneNumberString: string) => {
  const cleaned = (`${phoneNumberString}`).replace(/\D/g, '').replace('7', '');
  const arr = cleaned.split('');

  let result:string = '';

  if (arr.length === 0) {
    return '';
  }

  arr.forEach((item, index) => {
    if (index === 0) {
      result += `(${item}`;
      return;
    }

    if (index === 2) {
      result += `${item}${index === arr.length - 1 ? '' : ')'}`;
      return;
    }

    result += item;
  });
  return `+7${result}`;
};

export function getFirstError(
  error: FieldError | Array<{ [key: string]: FieldError }>,
): FieldError | null {
  if (isArray(error)) {
    const firstError = error.find(
      (errorItem) => errorItem,
    );
    if (firstError) { return (Object.values(firstError)[0] as FieldError); }
    return null;
  }
  return error;
}

export const countingRating = (data: number[] = []) => {
  const counts: Record<string, number> = {};

  /* eslint-disable-next-line */
  for (const num of data) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  return counts;
};
