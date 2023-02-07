import { Injectable } from '@angular/core';
import { IGroupUserAssignment, IGroupUserAssignmentFile } from '@core/interfaces/i-group';
import { IProjectUserAssingment } from '@core/interfaces/i-project';
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
  addUserToGroup(data:IGroupUserAssignment){
    return this.apiService.store('asignacionGrupoUsuario',data);
  }
  assignGroupUsersFile(data:IGroupUserAssignmentFile){
    return this.apiService.store('asignarGruposUsuarios',data)
  }
  deleteUserToGroup(data:IGroupUserAssignment){
    return this.apiService.patch('eliminarUsuarioGrupo',data)
  }

  desactiveGroup(id:number){
    return this.apiService.desactive('grupo',id);
  }
 
  getGroupsMinor(data:IProjectUserAssingment){
    return this.apiService.store('seleccionarGruposMenores',data)
  }
}
