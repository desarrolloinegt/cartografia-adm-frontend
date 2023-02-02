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
  getProjectView(){
    return this.apiService.getAll('proyectos');
  }
  desactiveProyect(id:number){
    return this.apiService.desactive('proyecto',id);
  }

  getUpms(id:number){
    return this.apiService.getById('obtenerUpmsProyecto',id)
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

  projectFinish(id:number){
    return this.apiService.desactive('finalizarProyecto',id);
  }
  sustituirUpm(data:any){
    return this.apiService.patch('sustituirUpm',data)
  }
}
