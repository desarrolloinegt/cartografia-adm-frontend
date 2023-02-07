import { Component, ViewChild } from '@angular/core';
import { IGroup, IGroupUserAssignment } from '@core/interfaces/i-group';
import { IProjectUserAssingment } from '@core/interfaces/i-project';
import { IUpm } from '@core/interfaces/i-upm';
import { IPersonalAssignment, IUserList } from '@core/interfaces/i-user';
import { GroupService } from '@modules/groups';
import { ExcelService } from '@modules/project-home/services/excel.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-personal-monitor',
  templateUrl: './personal-monitor.component.html',
  styleUrls: ['./personal-monitor.component.scss'],
})
export class PersonalMonitorComponent {
  groups!: IGroup[];
  idProject!: number;
  users:IPersonalAssignment={
    personal:'',
    encargado:''
  }
  usersFile:IPersonalAssignment[]=[];
  usernames:IUserList[]=[]
  projectUserAssignment: IProjectUserAssingment = {
    usuario_id: 0,
    proyecto_id: 0
  }
 
  constructor(private groupService: GroupService, private projectHomeService: ProjectHomeService,private projectService:ProjectService,private excelService:ExcelService) {

  }
  ngOnInit() {
    let idUsuario = localStorage.getItem('id');
    if (Number(idUsuario)) {
      this.projectUserAssignment.usuario_id = Number(idUsuario);
      this.projectHomeService.getIdProject(localStorage.getItem('project') || '').subscribe(data => {
        this.projectUserAssignment.proyecto_id = data;
        this.getGroupsMinor();
      }); 
    }
    this.projectHomeService.getIdProject(localStorage.getItem('project') || '').subscribe(data => {
      this.idProject = data;
    });
    
  }
  async getGroupsMinor(){
    this.groupService.getGroupsMinor(this.projectUserAssignment).subscribe(data => {
      this.groups = data;
    });
  }

  getUsers(grupo:string){
    let str=grupo.split(',');
    this.groupService.getGroupsUsers(Number(str[0])).subscribe(data => {
      this.usernames=data;
      this.usernames.forEach(data=>{
        this.usersFile.push(this.users={encargado:'',personal:data.username});
      })
     this.excelService.exportAsExcelFile(this.usersFile,str[1]);
    });
  }
}
