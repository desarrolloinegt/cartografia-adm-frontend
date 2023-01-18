export interface IUpm {
    id:number,
    nombre:string,
    descripcion:string,
    municipio:string
}

export interface IUpmAssignment{
    proyecto_id:number,
    upms:number[]
}
