import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private apiService: ApiService) { }

  getVehicle() {
    return this.apiService.getAll('vehiculos');
  }

  createVehicle(data:any) {
    return this.apiService.store('vehiculo', data);
  }

  editVechicle(data:any) {
    return this.apiService.patch('vehiculo/edit', data);
  }

  desactiVehicle(id:number) { 
    return this.apiService.desactive('vehiculo/id', id);
  }
}
