import { IPermission } from "./i-permission";
import { IRol } from "./i-rol";
export interface IProject {
    id_proyecto: number;
    nombre_proyecto: string;
    permission: IPermission[];
    rol: IRol[];
}