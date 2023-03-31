import { Component } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { IRole } from '@core/interfaces/i-role';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';

@Component({
  selector: 'app-home-project-page',
  templateUrl: './home-project-page.component.html',
  styleUrls: ['./home-project-page.component.scss']
})

export class HomeProjectPageComponent {
  project!:string;
  projectId:number=-1;
  roles: IRole[] = [];
  
  constructor(private router:Router,private projectHomeService:ProjectHomeService){
  }

  ngOnInit(){
    this.project=localStorage.getItem('project')||'';
    this.projectHomeService.getIdProject(this.project).subscribe(resp=>{
      this.projectId=resp
      if(this.projectId==-1 || !this.project){
        this.router.navigateByUrl('home');
      }
    })
    
  }
  
}
