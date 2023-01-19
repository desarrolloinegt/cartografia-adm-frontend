import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private apiService:ApiService) { }

  getProjects(){
    return this.apiService.getAll('obtenerUpmsProyecto');
  }

  desactiveProyect(id:number){
    return this.apiService.desactive('proyecto',id);
  }

  getUpms(){
    return this.apiService.getAll('upms')
  }

  createProject(data:any){
    return this.apiService.store('proyecto',data);
  }

  assignUpmToProject(data:any){
    return this.apiService.store('asginarUpmsProyecto',data)
  }

  editProject(data:any){
    return this.apiService.patch('proyecto/edit',data);
  }
}
