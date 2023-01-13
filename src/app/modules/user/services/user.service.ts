import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  newUser(newUser: any): Observable<any> {
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

  desactiveUser(id:number){
    return this.apiService.desactive('usuario',id);
  }

  editUser(data:any): Observable<any>{
    return this.apiService.patch('usuario/edit',data);
  }
}
