import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IGroup } from '@core/interfaces/i-group';
import { IProjectUserAssingment } from '@core/interfaces/i-project';
import { IUpmUserAssignment } from '@core/interfaces/i-upm';
import { GroupService } from '@modules/groups';
import { ExcelService } from '@modules/project-home/services/excel.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';

@Component({
  selector: 'app-personal-upms',
  templateUrl: './personal-upms.component.html',
  styleUrls: ['./personal-upms.component.scss']
})
export class PersonalUpmsComponent {
  groups!: IGroup[];
 
  datos:IUpmUserAssignment[]=[
  ];
  userUpm:IUpmUserAssignment={
    personal:'',
    upm:''
  };
  nameUpms: string[] = [];
  idProject!: number;
  projectUserAssignment: IProjectUserAssingment = {
    usuario_id: 0,
    proyecto_id: 0
  }
  constructor(private groupService: GroupService, private projectHomeService: ProjectHomeService, private projectService: ProjectService,private excelService:ExcelService) {
  }

  ngOnInit() {
    let idUsuario = localStorage.getItem('id');
    if (Number(idUsuario)) {
      this.projectUserAssignment.usuario_id = Number(idUsuario);
      this.projectHomeService.getIdProject(localStorage.getItem('project') || '').subscribe(data => {
        this.projectUserAssignment.proyecto_id = data;
        this.idProject=data;
        this.getGroupsMinor();
      });
    }
  }

  async getGroupsMinor() {
    this.groupService.getGroupsMinor(this.projectUserAssignment).subscribe(data => {
      this.groups = data;
    });
  }

  async cargarUpmsAsignadas() {
    if (Number(this.idProject)) {
      this.projectService.getUpms(this.idProject).subscribe(resp => {
        resp.forEach((element:any) => {
          this.nameUpms.push(element.upm);
        });
        this.createFile();
      });
    }
  }

  createFile() {
    this.datos=[];
    for (let index = 0; index < this.nameUpms.length; index++) {
      this.userUpm={
        personal:' ',
        upm:this.nameUpms[index]
      }
      this.datos.push(this.userUpm);
    }
    this.excelService.exportAsExcelFile(this.datos,'AsignacionUPMS');
  }
}
