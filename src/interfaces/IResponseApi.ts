import { IUserAccount } from './IUserAccount';

export interface IResponseApi {
  data: {
    login: boolean;
    token: string;
    user: IUserAccount;
  };
}

export interface IResponseBack<T> {
  data: T;
  error?: string;
  success: boolean;
}
