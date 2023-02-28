import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class FieldTeamService {

  constructor(private apiService: ApiService) { }

  getFieldTeam(data:any) {
    return this.apiService.store('equipos',data);
  }

  createFieldTeam(data: any) {
    return this.apiService.store('equipo', data);
  }

  editFieldTeam(data: any) {
    return this.apiService.patch('equipo/edit', data);
  }

  desactiveFielTeam(id: number) {
    return this.apiService.desactive('vehiculo', id);
  }

  getUsersTeam(data:any){
    return this.apiService.store('miembrosEquipo',data);
  }
}
