import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPermission } from '@core/interfaces/i-permission';
import { IProject, IProjectAssignment } from '@core/interfaces/i-project';
import { AuthService } from '@modules/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  //public projects: any;
  public projects: IProjectAssignment[] = [];
  public permisos:IPermission[]=[]
  id:number=0;
  constructor(private auth: AuthService, private router: Router) {
    this.id=Number(localStorage.getItem('id'));
    this.getProject();
  }

  getProject(){
    this.auth.getProjects(this.id).subscribe((data)=>{
      this.projects=data
      this.projects.forEach((data)=>{
        this.permisos=data.permisos
      })
    });
  }
}
