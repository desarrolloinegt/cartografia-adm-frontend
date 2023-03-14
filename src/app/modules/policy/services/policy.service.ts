import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private apiService:ApiService) { }

  getPermisions(){
    return this.apiService.getAll('permisos');
  }

  getPermissionsSystem(){
    return this.apiService.getAll('permisosSistema');
  }

  getPermissionsProject(){
    return this.apiService.getAll('permisosProyecto');
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

  getPolicysSystem(){
    return this.apiService.getAll('politicasSistema');
  }

  getPolicysProject(){
    return this.apiService.getAll('politicasProyecto');
  }
}
