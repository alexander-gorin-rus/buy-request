import * as R from 'ramda';

interface ActionTypeObject {
  [key: string]: string,
}
/*
  Example
  createAsyncActionType('LOGIN')
  will return an object
  {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE'
  }
*/
export const createAsyncActionType = (prefix: string): ActionTypeObject => {
  const obj: ActionTypeObject = {};
  obj[`${prefix}_REQUEST`] = `${prefix}_REQUEST`;
  obj[`${prefix}_SUCCESS`] = `${prefix}_SUCCESS`;
  obj[`${prefix}_FAILURE`] = `${prefix}_FAILURE`;
  obj[`${prefix}_WARNING`] = `${prefix}_WARNING`;
  obj[`${prefix}_INFO`] = `${prefix}_INFO`;
  return obj;
};
/*
  Example
  createSyncActionType('CHANGE_TAB')
  will return an object
  {
    CHANGE_TAB: 'CHANGE_TAB'
  }
*/
export const createSyncActionType = (prefix:string): ActionTypeObject => {
  const obj: ActionTypeObject = {};
  obj[prefix] = prefix;
  return obj;
};
// These functions are for generating a list of types
export const createAsyncActions = (...col: Array<string>) => col
  .reduce((acc, el) => R.merge(acc, createAsyncActionType(el)), {});
export const createSyncActions = (...col: Array<string>) => col
  .reduce((acc, el) => R.merge(acc, createSyncActionType(el)), {});
