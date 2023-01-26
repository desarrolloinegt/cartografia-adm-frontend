import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private apiService:ApiService) { }

  getGroups(){
    return this.apiService.getAll('grupos');
  }

  create(data:any){
    return this.apiService.store('grupo',data);
  }

  editGroup(data:any){
    return this.apiService.patch('grupo/edit',data)
  }

  getGroupsRoles(id:number){
    return this.apiService.getById('obtenerGruposRoles',id);
  }

  editGroupRoles(data:any){
    return this.apiService.patch('asignacionGrupoRol/edit',data)
  }
  assignGroupRoles(data:any){
    return this.apiService.store('asignarGrupoRol',data);
  }


  getGroupsUsers(id:number){
    return this.apiService.getById('obtenerGrupoUsuarios',id);
  }
  editGroupUsers(data:any){
    return this.apiService.patch('asignacionGrupoUsuario/edit',data);
  }
  assignGroupUsers(data:any){
    return this.apiService.store('asignarGrupoUsuario',data)
  }
 
 
}
