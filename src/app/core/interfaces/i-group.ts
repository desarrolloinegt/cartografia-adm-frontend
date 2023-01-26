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
    roles:IGroupRoleList[]
}

export interface IGroupUserAssignment{
    id:number,
    nombre:string,
    usuarios:IGroupUserList[]
}

export interface IGroupUserList{
    username:string
}

export interface IGroupRoleList{
    nombre:string
}
