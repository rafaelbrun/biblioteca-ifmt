import { IUserAccount } from "./IUserAccount";

export interface ResponseApi {
    data: {
        login: boolean,
        token: string,
        user: IUserAccount,
    }
}