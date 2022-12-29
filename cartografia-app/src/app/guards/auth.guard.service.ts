import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.loggedIn.pipe(
      take(1),
      map((loggedIn: boolean) => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
