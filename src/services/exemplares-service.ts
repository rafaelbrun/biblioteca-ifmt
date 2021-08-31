import api from "../services/api";
import { AxiosResponse } from "axios";

export function signIn(email: string, password: string): Promise<AxiosResponse> {
    return Promise.resolve(api.post('users/auth', { email, password }, { timeout: 8000 }));
}

export function getAllExemplares(): Promise<AxiosResponse> {
    return Promise.resolve(api.get('exemplares', { timeout: 8000 }));
}