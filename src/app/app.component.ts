import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '@modules/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //@ViewChild('appDrawer') appDrawer: MatDrawer; 
  opened = true;

  constructor(private auth: AuthService) {}

  get token() {
    return localStorage.getItem('token') || '';
  }

  get usuario() {
    return localStorage.getItem('usuario') || '';
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }


  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
