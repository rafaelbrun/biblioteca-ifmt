import { AxiosResponse } from 'axios';

import { IExemplar } from 'src/interfaces/IExemplar';
import { IResponseBack } from 'src/interfaces/IResponseApi';

import api from './api';

export const getAllExemplares = (): Promise<
  AxiosResponse<IResponseBack<IExemplar[]>>
> => {
  return Promise.resolve(api.get('exemplares', { timeout: 8000 }));
};

export const getMultiExemplares = (
  ids: number[],
): Promise<AxiosResponse<IResponseBack<IExemplar[]>>> => {
  return Promise.resolve(
    api.post('exemplares/multi', { ids }, { timeout: 8000 }),
  );
};

export const removerReserva = (
  idDiscente: number,
  idExemplar: number,
): Promise<AxiosResponse<IResponseBack<null>>> => {
  return Promise.resolve(
    api.post(
      'discentes/reserva/remover',
      { idDiscente, idExemplar },
      { timeout: 8000 },
    ),
  );
};
