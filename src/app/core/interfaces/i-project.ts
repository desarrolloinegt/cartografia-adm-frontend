import { IPermission } from "./i-permission";
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
    encuesta_id:number,
    descripcion:string
}

export interface IProjectListView extends IProjectCreate{
    id:number,
    progreso:number
}

export interface IProjectDataEdit extends Omit<IProjectCreate,'encuesta_id'>{
    encuesta:string,
    id:number
}