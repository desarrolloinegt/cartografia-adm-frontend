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

  getUsersAssigned(data: any) {
    return this.apiService.store('obtenerCartografosSupervisor', data);
  }


  editUserSupervisor(data: any) {
    return this.apiService.patch('asignarUsuarioSupervisor', data);
  }

  modifyCartographerUpm(data:any){
    return this.apiService.patch('upmCartografoSupervisor/edit',data);
  }
}
