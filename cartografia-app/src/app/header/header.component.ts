import { Observable, observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
      }
      .fill-remaining-space {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  loggedIn$!: Observable<boolean>; 

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loggedIn$ = this.authService.loggedIn;
  }

  logout() {
    this.authService.logout();
  }

}
