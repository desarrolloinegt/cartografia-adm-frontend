import { Injectable } from '@angular/core';
import { IGroup } from '@core/interfaces/i-group';
import { ApiService } from '@core/services/api.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root',
})
export class ProjectHomeService {
  constructor(private apiService: ApiService) {}

  getGroupsProject(projecto: string) {
    return this.apiService.getById('obtenerRolesProyecto', projecto);
  }

  guardarJerarquias(data: IGroup[]) {
    return this.apiService.patch('jerarquias', data);
  }

  getIdProject(project: string) {
    return this.apiService.getById('proyectoId', project);
  }

  assignChiefUpms(data: any) {
    return this.apiService.store('asignarUpmPersonal', data);
  }

  chargeUpmsChief(data: any) {
    return this.apiService.store('obtenerUpmPersonal', data);
  }

  getUpmsAssgined(data: any) {
    return this.apiService.store('obtenerUpmsAsignados', data);
  }

  getChiefEmployee(data: any) {
    return this.apiService.store('obtenerEncargadoEmpleado', data);
  }

  getUsersAssigned(data: any) {
    return this.apiService.store('obtenerPersonalAsignado', data);
  }

  assignPersonal(data: any) {
    return this.apiService.store('asginarPersonal', data);
  }

  verDetalleSustitucion(id: number) {
    return this.apiService.getById('detalleSustitucion', id);
  }

  supervisor(data: any) {
    return this.apiService.store('detalleSupervisor', data);
  }

  cartografo(data: any) {
    return this.apiService.store('detalleCartografo', data);
  }

  fieldTeam(data:any) {
    return this.apiService.store('detalleFieldTeam', data);
  }
}
