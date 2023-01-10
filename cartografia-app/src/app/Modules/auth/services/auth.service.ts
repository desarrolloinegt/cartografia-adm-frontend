import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ILogin } from '@core/interfaces/i-login';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState = new BehaviorSubject(true);

  constructor(private router: Router, private apiService: ApiService) {}

  ifLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authState.next(true);
    }
  }

  login(formData: ILogin): Observable<any> {
    return this.apiService.store('login', formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth/login');
    this.authState.next(false);
  }
  
  isAuthenticated() {
    return this.authState.value;
  }
}
