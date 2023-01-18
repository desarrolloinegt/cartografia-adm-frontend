import { IPermission } from "./i-permission";
import { IRole, IroleByUser } from "./i-role";
export interface IProjectAssignment {
    proyecto:IProject[];
    roles: IroleByUser[];
    permisos: IPermission[];  
}

export interface IProject{
    id_proyecto:number,
    nombre_proyecto:string
}
export interface IProjectList extends Omit<IProject,'nombre_proyecto|permission|rol'>{
    nombre:string,
    fecha:Date,
    encuesta:string
}