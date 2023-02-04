import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { IGroup, IGroupUserAssignment } from '@core/interfaces/i-group';
import { IProjectUserAssingment } from '@core/interfaces/i-project';
import { IRole } from '@core/interfaces/i-role';
import { GroupService } from '@modules/groups';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';

@Component({
  selector: 'app-personal-monitor',
  templateUrl: './personal-monitor.component.html',
  styleUrls: ['./personal-monitor.component.scss'],
})
export class PersonalMonitorComponent {
  groups!:IGroup[];
 
  projectUserAssignment:IProjectUserAssingment={
    usuario_id:0,
    proyecto_id:0
  }
  constructor(private groupService:GroupService,private projectHomeService:ProjectHomeService){

  }

  alertFile(event:any){

  }

  ngOnInit(){
    let idUsuario=localStorage.getItem('id');
    if(Number(idUsuario)){
      this.projectUserAssignment.usuario_id=Number(idUsuario);
      this.projectHomeService.getIdProject(localStorage.getItem('project')||'').subscribe(data=>{
        this.projectUserAssignment.proyecto_id=data;
      });
      this.groupService.getGroupsMinor(this.projectUserAssignment).subscribe(data=>{
        this.groups=data;
      });
    }
  }

}
