import { IReserva } from "./IReserva";

export interface IUserAccount {
    id?: number;
    nome: string;
    matricula: string;
    alertaIdsExemplar?: number[];
    reservas?: IReserva[];
}