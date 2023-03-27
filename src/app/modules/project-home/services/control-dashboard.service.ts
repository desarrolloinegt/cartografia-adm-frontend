import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ControlDashboardService {

  
  constructor(private apiService: ApiService) { }


  getData(data:any){
    return this.apiService.store('progresoUpms',data);
  }

  getDepartments(data:any){
    return this.apiService.store('departamentosProyecto',data)
  }

  getDataDepartment(data:any){
    return this.apiService.store('dataDepartamentosProyecto',data)
  }
}
