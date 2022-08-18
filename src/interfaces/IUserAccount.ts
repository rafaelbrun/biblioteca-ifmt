import { IReserva } from './IReserva';

export interface IUserAccount {
  id: number;
  interesse?: string;
  matricula: string;
  nome: string;
  reservas?: IReserva[];
}
