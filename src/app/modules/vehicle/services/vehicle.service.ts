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
}
