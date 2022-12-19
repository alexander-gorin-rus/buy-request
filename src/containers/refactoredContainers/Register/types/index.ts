import { OnChangeValue } from 'react-select';
import { ISelectOption } from 'src/components/Select/types';
import { IDefaultAction, IDefaultPromiseAction } from 'src/core/types';

export interface IUser {
  name: string;
  surname: string;
  userName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  type: string;
  company: string;
}

export interface IUserTypeItem extends ISelectOption {}

export interface IUserTypeProps {
  itemsList: ISelectOption[];
  buttonTitle?: string;
  optionPlaceholder?: string;
  title: string;
  handleSelect: (
    value: OnChangeValue<ISelectOption, false>,
  ) => void;
  error?: string;
  value: ISelectOption | null | undefined;
}

export interface IRegisterState {}

export interface RegisterPayload {
  user: IUser,
}

export interface IFetchRegisterRequest extends IDefaultPromiseAction<string, RegisterPayload> {}
export interface IFetchRegisterSuccess extends IDefaultAction<string, {}> {}

export type RegisterActions = IFetchRegisterRequest | IFetchRegisterSuccess;
