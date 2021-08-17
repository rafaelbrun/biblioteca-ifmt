import { IExemplar } from "./IExemplar";

export interface IReserva {
    id: number;
    exemplar: IExemplar;
    validade: string;
}