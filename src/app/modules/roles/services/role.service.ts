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
}
