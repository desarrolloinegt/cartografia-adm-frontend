import { IUserList } from "./i-user";

export interface ISupervisor {
    id: number;
    upm:string;
    codigo_usuario:number;
    nombres:string;
    apellidos: string;
    estado: string;
}

export interface ISupervisorUserAssignment {
    id: number,
    nombre: string,
    users: IUserList[]
}
