import { IReserva } from "./IReserva";

export interface IUserAccount {
    id?: number;
    nome: string;
    matricula: string;
    alertas?: number[];
    reservas?: IReserva[];
}