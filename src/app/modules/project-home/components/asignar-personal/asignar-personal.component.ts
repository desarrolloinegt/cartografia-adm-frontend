import { Component, ViewChild } from '@angular/core';
import { IGroup, IGroupUserAssignment } from '@core/interfaces/i-group';
import { IProjectUserAssingment } from '@core/interfaces/i-project';
import { IPersonalAssignment, IUserList } from '@core/interfaces/i-user';
import { GroupService } from '@modules/groups';
import { ExcelService } from '@modules/project-home/services/excel.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-asignar-personal',
  templateUrl: './asignar-personal.component.html',
  styleUrls: ['./asignar-personal.component.scss'],
})
export class AsignarPersonalComponent {
  groups!: IGroup[];
  idProject!: number;
  users:object[]=[];
  nameGroup:string='';
  usernames: IUserList[] = []
  projectUserAssignment: IProjectUserAssingment = {
    usuario_id: 0,
    proyecto_id: 0
  }

  constructor(private groupService: GroupService, private projectHomeService: ProjectHomeService, private projectService: ProjectService, private excelService: ExcelService) {

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
  async getGroupsMinor() {
    this.groupService.getGroupsMinor(this.projectUserAssignment).subscribe(data => {
      this.groups = data;
    });
  }

  getUsers(grupo: string) {
    let str = grupo.split(',');
    this.users[0]={encargado:'',usuario:str[1]};
    this.groupService.getGroupsUsers(Number(str[0])).subscribe(data => {
      this.usernames = data;
      this.usernames.forEach(data => {
        this.users.push({ encargado: '',usuario: data.username });
      })
      this.excelService.exportAsExcelFile(this.users, str[1]);
    });
  }
  async addFile() {
    const { value: file } = await Swal.fire({
      title: 'Seleccione archivo',
      input: 'file',
      inputAttributes: {
        'accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }
    })

    if (file) {
      /*const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
        this.generateJson();*/
    }
    //reader.readAsBinaryString(file);
  }
}
