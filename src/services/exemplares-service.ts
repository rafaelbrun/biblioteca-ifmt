import api from "../services/api";
import { AxiosResponse } from "axios";
import { ResponseApi, ResponseBack } from "../interfaces/IResponseApi";
import { IExemplar } from "../interfaces/IExemplar";

export function getAllExemplares(): Promise<AxiosResponse<ResponseBack<IExemplar[]>>> {
    return Promise.resolve(api.get('exemplares', { timeout: 8000 }));
}

export function getAllReservas(idDiscente: number): Promise<AxiosResponse> {
    return Promise.resolve(api.get(`discentes/reservas/${idDiscente}`, { timeout: 8000 }));
}

export function realizarReserva(idDiscente: number, idExemplar: number): Promise<AxiosResponse> {
    return Promise.resolve(api.post('discentes/reservar', { idDiscente, idExemplar }, { timeout: 8000 }));
}

export function signInApp(matricula: string, senha: string): Promise<ResponseApi> {
    return Promise.resolve(api.post('discentes/auth', { matricula, senha }, { timeout: 8000 }));
}

export function getAllInteresses(): Promise<AxiosResponse> {
    return Promise.resolve(api.get('exemplares', { timeout: 8000 }));
}