import { AxiosResponse } from 'axios';

import { IResponseBack } from 'src/interfaces/IResponseApi';
import { IUserAccount } from 'src/interfaces/IUserAccount';

import api from './api';

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

export function criarInteresse(
  idDiscente: number,
  idExemplar: number,
): Promise<AxiosResponse<IResponseBack<null>>> {
  return Promise.resolve(
    api.post(
      'discentes/interesse',
      { idDiscente, idExemplar },
      { timeout: 8000 },
    ),
  );
}

export function removerInteresse(
  idDiscente: number,
  idExemplar: number,
): Promise<AxiosResponse<IResponseBack<null>>> {
  return Promise.resolve(
    api.post(
      'discentes/interesse/remover',
      { idDiscente, idExemplar },
      { timeout: 8000 },
    ),
  );
}

export function getAllInteresses(
  idDiscente: number,
): Promise<AxiosResponse<IResponseBack<IUserAccount>>> {
  return Promise.resolve(api.get(`discentes/${idDiscente}`, { timeout: 8000 }));
}
