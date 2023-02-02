import { Injectable } from '@angular/core';
import { BehaviorSubject, distinct, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ILogin } from '@core/interfaces/i-login';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authState = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private apiService: ApiService) {
    this.ifLoggedIn();
  }

  ifLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authState.next(true);
    }
  }

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
    this.apiService.logout().subscribe();
    localStorage.removeItem('token');
    localStorage.removeItem('project');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');
    setTimeout(() => {
      this.router.navigateByUrl('auth/login');
      this.authState.next(false);
    }, 1500);
  }

  isAuthenticated() {
    return this.authState.value;
  }

  getProjects(id:number):Observable<any>{
    return this.apiService.getById('projectsAssing',id);
  }

  getPermissions(project:string,usuario_id:number){
    return this.apiService.store('obtenerPermisos',{proyecto:project,usuario_id:usuario_id});
  }

  getPermissionAdmin(id:number){
    return this.apiService.getById('obtenerPermisosAdmin',id);
  }
}
