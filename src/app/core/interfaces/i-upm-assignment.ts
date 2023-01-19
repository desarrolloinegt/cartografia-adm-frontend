export interface IUpmAssignment{
    proyecto_id:number,
    upms:number[]
}

export interface IUpmAssignmentList  {
    id:number,
    nombre:string,
    year:string,
    progreso:number,
    encuesta:string
    upms:[]
}