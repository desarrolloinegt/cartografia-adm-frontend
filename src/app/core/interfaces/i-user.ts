export interface IUser {
  DPI: string;
  nombres: string;
  apellidos: string;
  descripcion: string;
  telefono: string;
  email: string;
  codigo_usuario: number;
  password: string;
  username: string;
  button: boolean;
}

export interface IUserList{
  id:number,
  username:string,
  checked:boolean
}

export interface IPersonalAssignment{
  encargado:string,
  personal:string
}

