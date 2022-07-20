import { IReserva } from './IReserva';

export interface IUserAccount {
  id: number;
  interesses?: number[];
  matricula: string;
  nome: string;
  reservas?: IReserva[];
}
