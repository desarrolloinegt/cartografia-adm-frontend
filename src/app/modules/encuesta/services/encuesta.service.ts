import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private apiService:ApiService) { }


  getEncuestas(){
    return this.apiService.getAll('encuestas');
  }
}
