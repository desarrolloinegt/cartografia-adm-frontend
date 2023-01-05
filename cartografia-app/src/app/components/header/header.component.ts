import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { AuthService } from '@modules/auth';
import { Observable } from 'rxjs';

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
}
