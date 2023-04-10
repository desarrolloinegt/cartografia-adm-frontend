import { Injectable } from '@angular/core';
import { IProjectCreate } from '@core/interfaces/i-project';
import { AssignmentUpmProjectSustituir } from '@core/interfaces/i-upm';
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
  createProject(data:IProjectCreate){
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
  sustituirUpm(data:AssignmentUpmProjectSustituir){
    return this.apiService.patch('sustituirUpm',data)
  }

  createUpms(data:any){
    return this.apiService.store('cargarUpms',data);
  }

  createDepartments(data:any){
    return this.apiService.store('cargarDepartamentos',data);
  }

  createMunicipios(data:any){
    return this.apiService.store('cargarMunicipios',data);
  }

  getUpmCartographer(data:any){
    return this.apiService.store('obtenerUpmCartografo',data)
  }
}
