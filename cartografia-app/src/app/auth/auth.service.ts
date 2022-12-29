import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logged = new BehaviorSubject<boolean>(false);

  get loggedIn() {
    return this.logged.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: IUser) {
    if (user.username !== ''  && user.password !== '') {
      this.logged.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.logged.next(false);
    this.router.navigate(['login']);
  }
}
