import { Injectable } from '@angular/core';
import { ISupervisorUserAssignment } from '@core/interfaces/i-supervisor';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private apiService: ApiService) { }

  getDataSupervisor(data: any) {
    return this.apiService.store('obtenerUpmSupervisor', data)
  }

  getGroupUsers(id:number) {
    return this.apiService.getById('obtenerUsuarioAsignado', id);
  }

  addUserToGroup(data: ISupervisorUserAssignment) {
    return this.apiService.store('asignacionSupervisorUsuario', data);
  }

  editUserSupervisor(data: any) {
    return this.apiService.patch('asignarUsuarioSupervisor', data);
  }
}
