import { Injectable } from '@angular/core';
import { IGroup } from '@core/interfaces/i-group';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectHomeService {

  constructor(private apiService:ApiService) { }

  getGroupsProject(projecto:string){
    return this.apiService.getById('obtenerGruposProyecto',projecto);
  }

  guardarJerarquias(data:IGroup[]){
    return this.apiService.patch('jerarquias',data);
  }

  getIdProject(project:string){
    return this.apiService.getById('proyectoId',project);
  }
}
