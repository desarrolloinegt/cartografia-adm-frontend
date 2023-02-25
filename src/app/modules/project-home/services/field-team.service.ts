import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class FieldTeamService {

  constructor(private apiService: ApiService) { }

  getFieldTeam() {
    return this.apiService.getAll('equipos');
  }

  createFieldTeam(data: any) {
    return this.apiService.store('equipos', data);
  }

  editFieldTeam(data: any) {
    return this.apiService.patch('equipos/edit', data);
  }

  desactiveFielTeam(id: number) {
    return this.apiService.desactive('vehiculo', id);
  }
}
