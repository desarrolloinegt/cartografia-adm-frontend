import { Component } from '@angular/core';
import { IDepartament } from '@core/interfaces/i-departament';
import { ControlDashboardService } from '@modules/project-home/services/control-dashboard.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';

@Component({
  selector: 'app-control-dashboard',
  templateUrl: './control-dashboard.component.html',
  styleUrls: ['./control-dashboard.component.scss']
})
export class ControlDashboardComponent {
  total:number;
  totalProgres:number;
  finished:number;
  progress:number;
  projectId:number;
  percentajeFinished:number;
  percentajeProgress:number;
  departments:IDepartament[];
  constructor(private projectHomeService:ProjectHomeService, private dashService:ControlDashboardService){
    this.total=0;
    this.finished=0;
    this.progress=0;
    this.projectId=-1;
    this.percentajeFinished=0;
    this.percentajeProgress=0;
    this.totalProgres=0;
    this.departments=[]
  }
  ngOnInit(){
    let project=localStorage.getItem('project')||'';
    this.projectHomeService.getIdProject(project).subscribe((data)=>{
      this.projectId=data;
      this.getData();
    })
  }
  getData(){
    let data={proyecto_id:this.projectId}
    this.dashService.getData(data).subscribe((resp)=>{
      console.log(resp)
      this.finished=resp.finalizados;
      this.total=resp.total;
      this.progress=resp.progreso;
      this.totalProgres=this.total-this.finished;
      this.percentajeFinished=(resp.finalizados*100)/this.total;
      this.percentajeProgress=(resp.progreso*100)/this.total;
    })
    this.dashService.getDepartments(data).subscribe((data)=>{
      this.departments=data;
    })
  }
  styleFinished(){
    return {"stroke-dasharray":`${this.percentajeFinished},100`}
  }
  styleProgress(){
    return {"stroke-dasharray":`${this.percentajeProgress},100`}
  }
}
