import { IPermission } from "./i-permission";
import { IRole } from "./i-role";
export interface IProject {
    id_proyecto: number;
    nombre_proyecto: string;
    permission: IPermission[];
    rol: IRole[];
}