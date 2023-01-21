import { IPermission } from "./i-permission";

export interface IRole {  
    nombre: string;
}

export interface IroleByUser extends IRole{
    id:number,
}

export interface IRoleList{
    id:number,
    nombre:string,
    checked:boolean
}