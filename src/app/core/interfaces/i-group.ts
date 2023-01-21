export interface IGroup {
    id:number,
    nombre:string,
    descripcion:string,
    jerarquia:number,
    proyecto:string,
    proyecto_id:number
}

export interface IGroupRoleAssignment{
    id:number,
    nombre:string,
    roles:[]
}

export interface IGroupUserAssignment{
    id:number,
    nombre:string,
    usuarios:[]
}
