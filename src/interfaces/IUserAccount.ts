import { IReserva } from './IReserva';

export interface IUserAccount {
  alertas?: string;
  id: number;
  interesse?: string;
  matricula: string;
  nome: string;
  reservas?: IReserva[];
}
