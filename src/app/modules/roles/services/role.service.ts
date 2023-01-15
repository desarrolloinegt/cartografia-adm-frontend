import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private apiService:ApiService) { }

  getPermisions(){
    return this.apiService.getAll('permisos');
  }
}
