import { IPermission } from "./i-permission";
import { IRole, IroleByUser } from "./i-role";
export interface IProjectAssignment {
    nombre:string;  
}

export interface IProject{
    id_proyecto:number,
    nombre_proyecto:string
}
export interface IProjectList extends Omit<IProject,'nombre_proyecto|permission|rol'>{
    nombre:string,
    fecha:Date,
    encuesta:string,
    upms:[]
}

export interface IProjectCreate {
    nombre:string,
    year:string,
    encuesta_id:number
}

export interface IProjectListView extends IProjectCreate{
    id:number,
    progreso:number
}