import { IPermission } from "./i-permission"

export interface IRole {  
    id:number,
    nombre: string,
    checked:boolean
}

export interface IRolePermissionsAssingment extends Omit<IRole,'checked'>{
    permisos:IPermission[]
}

export interface IRolePermissionsAssingmentCreate{
    id:number,
    permisos:number[]
}
