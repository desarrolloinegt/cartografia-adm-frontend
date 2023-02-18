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
    return this.apiService.store('politica',nombre);
  }

  assignPermisoToPolicy(data:any){
    return this.apiService.store('asignarPermiso',data);
  }

  getPolicyPermissions(id:number){
    return this.apiService.getById('obtenerPoliticaPermisos',id);
  }

  desactivePolicy(id:number){
    return this.apiService.desactive('politica',id);
  }

  editPolicy(data:any){
    return this.apiService.patch('politica/edit',data);
  }

  getPolicys(){
    return this.apiService.getAll('politicas');
  }
}
