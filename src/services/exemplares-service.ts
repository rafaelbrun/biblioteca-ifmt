import { AxiosResponse } from 'axios';

import { IExemplar } from 'src/interfaces/IExemplar';
import { IResponseApi, IResponseBack } from 'src/interfaces/IResponseApi';

import api from './api';

export const getAllExemplares = (): Promise<
  AxiosResponse<IResponseBack<IExemplar[]>>
> => {
  return Promise.resolve(api.get('exemplares', { timeout: 8000 }));
};

export const getAllReservas = (idDiscente: number): Promise<AxiosResponse> => {
  return Promise.resolve(
    api.get(`discentes/reservas/${idDiscente}`, { timeout: 8000 }),
  );
};

export const realizarReserva = (
  idDiscente: number,
  idExemplar: number,
): Promise<AxiosResponse> => {
  return Promise.resolve(
    api.post(
      'discentes/reservar',
      { idDiscente, idExemplar },
      { timeout: 8000 },
    ),
  );
};

export const signInApp = (
  matricula: string,
  senha: string,
): Promise<IResponseApi> => {
  return Promise.resolve(
    api.post('discentes/auth', { matricula, senha }, { timeout: 8000 }),
  );
};

export function getAllInteresses(): Promise<AxiosResponse> {
  return Promise.resolve(api.get('exemplares', { timeout: 8000 }));
}
