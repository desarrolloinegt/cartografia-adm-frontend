import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from '@core/interfaces/i-project';
import { AuthService } from '@modules/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  //public projects: any;
  public projects: IProject[] = [];

  constructor(private auth: AuthService, private router: Router) {
    this.projects = JSON.parse(localStorage.getItem('projects')|| "[]");
    console.log(this.projects);
  }
}
