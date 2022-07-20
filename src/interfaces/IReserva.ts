import { IExemplar } from './IExemplar';

export interface IReserva {
  exemplar: IExemplar;
  id: number;
  validade: Date;
}
