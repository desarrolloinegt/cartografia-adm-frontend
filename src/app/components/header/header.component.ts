import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '@modules/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  loggedIn$!: Observable<boolean>;
  constructor(private auth: AuthService) {}

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
