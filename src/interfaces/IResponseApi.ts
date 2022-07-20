import { IUserAccount } from './IUserAccount';

export interface ResponseApi {
  data: {
    login: boolean;
    token: string;
    user: IUserAccount;
  };
}

export interface ResponseBack<T> {
  data: T;
  success: boolean;
  error?: string;
}
