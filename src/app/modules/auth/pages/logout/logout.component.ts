import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  get usuario() {
    return localStorage.getItem('usuario') || '';
  }

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.logout();
  }
}
