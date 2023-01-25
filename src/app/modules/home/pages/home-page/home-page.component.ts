import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IProject, IProjectAssignment } from '@core/interfaces/i-project';
import { AuthService } from '@modules/auth';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  permissions:string[]=[];
  public projects: IProjectAssignment[] = [];
  dataSource: MatTableDataSource<IProject>;
  id:number=0;
  constructor(private permissionService:NgxPermissionsService,private auth: AuthService, private router: Router) {
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(){
    this.id=Number(localStorage.getItem('id'));
    this.getProjects();
  }
  getProjects(){
    this.auth.getProjects(this.id).subscribe((data)=>{
      console.log(data);
      this.projects=data;
    });
  }
  loadProject(project:string){
    this.auth.getPermissions(project,this.id).subscribe(data=>{
      this.permissions=data;
      this.permissionService.addPermission(this.permissions);
      localStorage.setItem('project',project);
    })
  }
}
