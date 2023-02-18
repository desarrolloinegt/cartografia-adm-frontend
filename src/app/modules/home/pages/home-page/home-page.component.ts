import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IProject, IProjectAssignment } from '@core/interfaces/i-project';
import { AuthService } from '@modules/auth';
import { NgxPermissionsService } from 'ngx-permissions';
import { AppComponent } from 'src/app/app.component';

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
  constructor(private permissionService:NgxPermissionsService,private auth: AuthService, private router: Router,private appComponente:AppComponent) {
    this.dataSource=new MatTableDataSource();
  }
  ngOnInit(){
    localStorage.removeItem('project');
    this.appComponente.ngOnInit()
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
    this.permissionService.flushPermissions();
    this.auth.getPermissions(project,this.id).subscribe(data=>{
      console.log(data)
      this.permissions=data;
      this.permissionService.addPermission(this.permissions);
      localStorage.setItem('project',project);
    })
    localStorage.setItem('project',project)
    this.router.navigate(['projectHome']);
  }
}
