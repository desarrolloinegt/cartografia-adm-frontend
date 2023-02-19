import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  data: AOA = [[1, 2], [3, 4]];
  users:object[]=[];
  usernames: IGroupUserAssignment[] = []
  projectUserAssignment: IProjectUserAssingment = {
    usuario_id: 0,
    proyecto_id: 0
  }
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['encargado','personal', 'options'];

  constructor(private groupService: GroupService, private projectHomeService: ProjectHomeService, private projectService: ProjectService, private excelService: ExcelService) {
    this.dataSource=new MatTableDataSource();
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
    this.projectHomeService.getIdProject(localStorage.getItem('project') || '').subscribe(data => {
      this.idProject = data;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  async getGroupsMinor() {
    this.groupService.getGroupsMinor(this.projectUserAssignment).subscribe(data => {
      this.groups = data;
    });
  }

  getUsers(grupo: string) {
    let idUsuario =Number(localStorage.getItem('id'));
    let str = grupo.split(',');
    this.users=[];
    this.usernames=[];
    this.projectHomeService.getUsersAssigned({rol_id:Number(str[0]),proyecto_id:this.idProject,usuario_id:idUsuario}).subscribe(data => {
      this.usernames = data;
      this.usernames.forEach(data => {
        this.users.push({ encargado: '',codigo_usuario: data.codigo_usuario,nombres:data.nombres,apellidos:data.apellidos});
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
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
        this.generateJson();
    }
    reader.readAsBinaryString(file);
  }
  }
  generateJson(){
    let idUsuario =Number(localStorage.getItem('id'));
    if(Number(idUsuario)){
      let array:any=[];
      this.data.forEach(dto=>{
        if(dto[0] && dto[1]){
          array.push({codigo_superior:dto[0],codigo_inferior:dto[1],proyecto_id:this.idProject,usuario_id:idUsuario});
        }
      });
      this.projectHomeService.assignPersonal(array).subscribe(resp=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    }
  }

  verPlantilla(){
    Swal.fire({
      text: 'Ejemplo de plantilla',
      imageUrl: 'assets/EjemploPlantillaPersonal.png',
      imageWidth: 375,
      imageHeight: 250,
      imageAlt: 'Ejemplo del archivo de carga',
    })
  }
}
