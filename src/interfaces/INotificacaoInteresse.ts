import { IExemplar } from './IExemplar';

export interface INotificaoExemplar {
  dataNotificacao: Date;
  exemplar: IExemplar;
  id: number;
}
