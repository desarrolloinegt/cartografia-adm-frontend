import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private apiService: ApiService) { }

  

  getDataSupervisor(data: any) {
    return this.apiService.store('obtenerUpmSupervisor', data)
  }


}
