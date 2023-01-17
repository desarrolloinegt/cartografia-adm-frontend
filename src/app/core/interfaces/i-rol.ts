import { IPermission } from "./i-permission";

export interface IRol { 
    id: number;
    rol: string;
    permission: IPermission[];
}