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
    grupo_id:number,
    nombres:string,
    apellidos:string,
    codigo_usuario:number
}
export interface IGroupUserAssignmentFile{
    grupo_id:number,
    usuarios:string[]
}

export interface IGroupUserList{
    username:string
}

export interface IGroupRoleList{
    nombre:string
}
