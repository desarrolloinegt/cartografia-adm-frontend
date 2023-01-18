import { IPermission } from "./i-permission";
import { IRole } from "./i-role";
export interface IProject {
    id: number;
    nombre_proyecto: string;
    permission: IPermission[];
    rol: IRole[];
}

export interface IProjectList extends Omit<IProject,'nombre_proyecto|permission|rol'>{
    nombre:string,
    fecha:Date,
    encuesta:string
}