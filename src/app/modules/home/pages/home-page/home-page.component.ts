import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IPermission } from '@core/interfaces/i-permission';
import { IProject, IProjectAssignment } from '@core/interfaces/i-project';
import { IRole, IroleByUser } from '@core/interfaces/i-role';
import { AuthService } from '@modules/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  //public projects: any;
  projectList:IProject[]=[];
  roles:IroleByUser[]=[];
  public projects: IProjectAssignment[] = [];
  public permisos:IPermission[][]=[]
  displayedColumns: string[] = ['proyecto','options'];
  dataSource: MatTableDataSource<IProject>;
  id:number=0;
  constructor(private auth: AuthService, private router: Router) {
    this.dataSource=new MatTableDataSource();
    
  }

  ngOnInit(){
    this.id=Number(localStorage.getItem('id'));
    this.getProject();
    console.log(this.projectList)
  }
  getProject(){
    this.auth.getProjects(this.id).subscribe((data)=>{
      this.projects=data
      this.projects.forEach((dat)=>{
        this.projectList.push(dat.proyecto[0]);
        dat.roles.forEach(rol=>{
          this.roles.push(rol);
        })
        
      })
      this.dataSource=new MatTableDataSource(this.projectList);
    });
  }
}
