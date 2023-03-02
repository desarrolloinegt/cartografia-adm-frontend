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

  getVehicles(){
    return this.apiService.getAll('vehiculos');
  }

  addTeam(data:any){
    return this.apiService.store('addEquipo',data);
  }
  addVehicule(data:any){
    return this.apiService.patch('addVehiculo',data);
  }

  modifyVehicle(data:any){
    return this.apiService.patch('equipoVehicle/edit',data);
  }
}
