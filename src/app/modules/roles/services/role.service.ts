import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private apiService:ApiService) { }

  getPermisions(){
    return this.apiService.getAll('permisos');
  }
  
  createRol(nombre:any){
    return this.apiService.store('rol',nombre);
  }

  assignPermisoToRol(data:any){
    return this.apiService.store('asignarPermiso',data);
  }

  getRolesPermisos(){
    return this.apiService.getAll('asignacionesRolPermiso');
  }

  desactiveRole(id:number){
    return this.apiService.desactive('rol',id);
  }

  editRole(data:any){
    return this.apiService.patch('rol/edit',data);
  }

  getRoles(){
    return this.apiService.getAll('roles');
  }
}
