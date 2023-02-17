export interface IUpm {
    id:number,
    nombre:string,
    descripcion:string,
    municipio:string,
    checked:boolean
}
export interface AssignmentUpmProject {
    proyecto_id: number,
    upms: string[],
  }
  export interface AssignmentUpmProjectSustituir{
    proyecto_id:number,
    upm_anterior:number,
    upm_nuevo:string,
    descripcion:string,
    usuario_id:number,
  }

  export interface IUpmUserAssignment{
    personal:string,
    upm:string
  }
  