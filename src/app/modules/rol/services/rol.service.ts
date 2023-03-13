import { Injectable } from '@angular/core';
import { IGroupUserAssignment, IGroupUserAssignmentFile } from '@core/interfaces/i-group';
import { IProjectUserAssingment } from '@core/interfaces/i-project';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private apiService:ApiService) { }

  getGroups(){
    return this.apiService.getAll('roles');
  }

  create(data:any){
    return this.apiService.store('rol',data);
  }

  editGroup(data:any){
    return this.apiService.patch('rol/edit',data)
  }

  desactiveGroup(id:number){
    return this.apiService.desactive('rol',id);
  }


  getGroupsRoles(id:number){
    return this.apiService.getById('obtenerRolPoliticas',id);
  }

  editGroupRoles(data:any){
    return this.apiService.patch('asignarRolPoliticas',data)
  }



  getGroupsUsers(id:number){
    return this.apiService.getById('obtenerUsuariosRol',id);
  }
  addUserToGroup(data:IGroupUserAssignment){
    return this.apiService.store('asignacionUsuarioRol',data);
  }
  assignGroupUsersFile(data:IGroupUserAssignmentFile){
    return this.apiService.store('asignarUsuariosRol',data)
  }
  deleteUserToGroup(data:IGroupUserAssignment){
    return this.apiService.patch('eliminarUsuarioRol',data)
  }

 
 
  getGroupsMinor(data:any){
    return this.apiService.store('seleccionarRolesMenores',data)
  }
}
