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
  get project(){
    return localStorage.getItem('project')||'';
  }
  ngOnInit(){
    localStorage.removeItem('project');
    this.id=Number(localStorage.getItem('id'));
    this.getProjects();
  }
  getProjects(){
    this.auth.getProjects(this.id).subscribe((data)=>{
      this.projects=data;
    });
  }
  loadProject(project:string){
    localStorage.removeItem('project');
    this.auth.getPermissions(project,this.id).subscribe(data=>{
      this.permissions=data;
      this.permissionService.addPermission(this.permissions);
      localStorage.setItem('project',project);
    })
    localStorage.setItem('project',project)
    this.router.navigate(['projectHome']);
  }

}
