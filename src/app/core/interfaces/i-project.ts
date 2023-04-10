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
    descripcion:string,
    automatizacion:number
}

export interface IProjectListView extends IProjectCreate{
    id:number,
    progreso:number
}

export interface IProjectDataEdit extends Omit<IProjectCreate,'encuesta_id|automatizacion'>{
    encuesta:string,
    id:number
}

export interface IProjectUserAssingment {
    usuario_id:number,
    proyecto_id:number
}