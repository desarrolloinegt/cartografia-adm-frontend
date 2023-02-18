import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRoleUserAssignment, IRoleUserAssignmentCreate } from '@core/interfaces/i-role';
import { IUser } from '@core/interfaces/i-user';
import { ApiService } from '@core/services/api.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  newUser(newUser: IUser): Observable<any> {
    return this.apiService.store('registro', newUser);
  }

  getAllUsers(limit?:number, offset?:number){
    let params=new HttpParams();
    if(limit && offset){
      params=params.set('limit',limit);
      params=params.set('offset',offset);
    }
    return this.apiService.getAll('usuarios');
  }

  getAllUserListView(){
    return this.apiService.getAll('usuariosList');
  }

  desactiveUser(id:number){
    return this.apiService.desactive('usuario',id);
  }

  editUser(data:IUser): Observable<any>{
    return this.apiService.patch('usuario/edit',data);
  }

  getUserPolicys(id:number){
    return this.apiService.getById('obtenerPoliticaUser',id);
  }
  assignUserPolicys(data:IRoleUserAssignmentCreate){
    return this.apiService.patch('asignarPoliticaUser',data);
  }
}
