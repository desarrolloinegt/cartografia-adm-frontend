export interface IPermissionAssignment {
    rol_id:number,
    permisos:number[]
}

export interface IPermissionAssignmetList extends Omit<IPermissionAssignment, 'permisos'> {
    nombre:string,
    permisos:[]
}