import { IResponseApi } from 'src/interfaces/IResponseApi';

import api from './api';

export const signInApp = (
  matricula: string,
  senha: string,
): Promise<IResponseApi> => {
  return Promise.resolve(
    api.post('auth/login', { matricula, senha }, { timeout: 8000 }),
  );
};
