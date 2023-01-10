import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  newUser(newUser: any): Observable<any> {
    return this.apiService.store('user', newUser);
  }
}
