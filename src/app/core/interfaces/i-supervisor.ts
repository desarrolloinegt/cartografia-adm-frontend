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
    codigo_usuario: number,
    nombre: string,
    proyecto_id:number,
    upm:string
}
