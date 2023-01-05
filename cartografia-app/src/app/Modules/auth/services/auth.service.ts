import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ILogin } from '@core/interfaces/i-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'https://de0f-190-61-99-218.ngrok.io/api/login';
  authState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {
  }

  ifLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authState.next(true);
    }
  }

  login(formData: ILogin): Observable<any> {
    return this.http.post(this.API_URL, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth/login');
  }
}
