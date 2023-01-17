import { Injectable } from '@angular/core';
import { BehaviorSubject, distinct, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ILogin } from '@core/interfaces/i-login';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private apiService: ApiService) {}

  get isLogged(): Observable<boolean> {
    return this.authState.asObservable();
  }

  login(formData: ILogin): Observable<any> {
    return this.apiService.store('login', formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', resp.usuario);
        const validateUser = resp.token !== undefined;
        this.authState.next(validateUser);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('projects');
    localStorage.removeItem('usuario');

    setTimeout(() => {
      this.router.navigateByUrl('auth/login');
      this.authState.next(false);
    }, 1500);
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
