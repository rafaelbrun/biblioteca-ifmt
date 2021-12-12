import { IExemplar } from "./IExemplar";

export interface INotificaoExemplar {
    id: number;
    exemplar: IExemplar;
    dataNotificacao: Date;
}