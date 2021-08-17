import api from "../services/api";
import { IUserAccount } from "../interfaces/IUserAccount";
import { AxiosResponse } from "axios";

export function signIn(email: string, password: string): Promise<AxiosResponse> {
    return Promise.resolve(api.post('users/auth', { email, password }, { timeout: 8000 }));
}

export function updateUser(user: IUserAccount): Promise<AxiosResponse> {
    return Promise.resolve(api.post('users/update', { user }, { timeout: 8000 }));
}