import { IPermission } from "./i-permission";

export interface IRole {  
    nombre: string;
}

export interface IroleByUser extends IRole{
    id:number,
}
