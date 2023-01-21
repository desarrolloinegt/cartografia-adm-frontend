export interface IUser {
  DPI: string;
  nombres: string;
  apellidos: string;
  email: string;
  codigo_usuario: number;
  password: string;
  username: string;
}

export interface IUserList{
  id:number,
  username:string,
  checked:boolean
}

