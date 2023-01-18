import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private apiService:ApiService) { }

  getProjects(){
    return this.apiService.getAll('proyectos');
  }
}
