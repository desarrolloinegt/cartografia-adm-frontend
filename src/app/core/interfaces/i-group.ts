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
    rol_id:number,
    nombres:string,
    apellidos:string,
    codigo_usuario:number,
    proyecto:string
}
export interface IGroupUserAssignmentFile{
    rol_id:number,
    usuarios:string[],
    proyecto:string
}

export interface IGroupUserList{
    username:string
}

export interface IGroupRoleList{
    nombre:string
}
