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

  getGroupsRoles(){
    return this.apiService.getAll('obtenerGruposRoles');
  }

  getGroupWithoutRoles(){
    return this.apiService.getAll('obtenerGrupoSinRol');
  }

  editGroupRoles(data:any){
    return this.apiService.patch('asignacionGrupoRol/edit',data)
  }
  assignGroupRoles(data:any){
    return this.apiService.store('asignarGrupoRol',data);
  }


  getGroupsUsers(){
    return this.apiService.getAll('obtenerGrupoUsuarios');
  }
  getGroupWithoutUsers(){
    return this.apiService.getAll('obtenerGrupoSinUsuarios');
  }
  editGroupUsers(data:any){
    return this.apiService.patch('asignacionGrupoUsuario/edit',data);
  }
  assignGroupUsers(data:any){
    return this.apiService.store('asignarGrupoUsuario',data)
  }
 
 
}
