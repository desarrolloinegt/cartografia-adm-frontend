import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGroup, IGroupUserAssignment } from '@core/interfaces/i-group';
import { IProjectUserAssingment } from '@core/interfaces/i-project';
import { IUpmUserAssignment } from '@core/interfaces/i-upm';
import { ExcelService } from '@modules/project-home/services/excel.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import { IUserList } from '@core/interfaces/i-user';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { async } from 'rxjs';
import { RolService } from '@modules/rol';
type AOA = any[][];
@Component({
  selector: 'app-encargado-upms',
  templateUrl: './encargado-upms.component.html',
  styleUrls: ['./encargado-upms.component.scss']
})
export class EncargadoUpmsComponent {
  groups!: IGroup[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  users: IGroupUserAssignment[] = []
  data: AOA = [[1, 2], [3, 4]];
  dataSource: MatTableDataSource<IGroup>;
  displayedColumns: string[] = ['rol', 'encargado', 'upm', 'options'];
  datos: IUpmUserAssignment[] = [];
  dataFile: Object[] = [];
  nameUpms: string[] = [];
  idProject!: number;
  projectUserAssignment: IProjectUserAssingment = {
    usuario_id: 0,
    proyecto_id: 0
  }
  constructor(private rolService: RolService, private projectHomeService: ProjectHomeService, private projectService: ProjectService, private excelService: ExcelService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    let idUsuario = localStorage.getItem('id');
    if (Number(idUsuario)) {
      this.projectUserAssignment.usuario_id = Number(idUsuario);
      this.projectHomeService.getIdProject(localStorage.getItem('project') || '').subscribe(data => {
        this.projectUserAssignment.proyecto_id = data;
        this.idProject = data;
        this.getGroupsMinor();
        this.cargarUpmChief();
      });
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  async getGroupsMinor() {
    this.rolService.getGroupsMinor(this.projectUserAssignment).subscribe(data => {
      this.groups = data;
    });
  }

  verPlantilla() {
    Swal.fire({
      text: 'Ejemplo de plantilla',
      imageUrl: 'assets/EjemploPlantillaUPMUsuario.png',
      imageWidth: 460,
      imageHeight: 200,
      imageAlt: 'Ejemplo del archivo de carga',
    })
  }
  async getUpmsAsignn(grupo: string) {
    let idUsuario = localStorage.getItem('id');
    this.nameUpms = [];
    let str = grupo.split(",");
    if (Number(this.idProject)) {
      this.projectHomeService.getUpmsAssgined({ proyecto_id: this.idProject, usuario_id: idUsuario }).subscribe(resp => {
        resp.forEach((element: any) => {
          this.nameUpms.push(element.upm);
        });
        this.getUsersAssign(str[0], str[1]);
      });
    }
  }
  getUsersAssign(idGrupo: string, nameGroup: string) {
    this.users = [];
    let idUsuario = localStorage.getItem('id');
    this.projectHomeService.getUsersAssigned({ proyecto_id: this.idProject, rol_id: idGrupo, usuario_id: idUsuario }).subscribe(resp => {
      this.users = resp;
      this.createFile(nameGroup);
    });
  }

  createFile(nameGroup: string) {
    this.dataFile = [];
    for (let index = 0; index < this.nameUpms.length; index++) {

      this.dataFile.push({ upm: this.nameUpms[index], codigo_usuario: '', nombres: '', apellidos: '' });

    }
    for (let index = 0; index < this.users.length; index++) {
      this.dataFile.push({upm:"", codigo_usuario: this.users[index].codigo_usuario, nombres: this.users[index].nombres, apellidos: this.users[index].apellidos });
    }
    this.excelService.exportAsExcelFile(this.dataFile, 'AsignacionUPMS' + nameGroup);
  }
  async addFile() {
    this.data = [];
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
  async generateJson() {
    let array: any = [];
    let duplicates: String[] = [];
    this.data = this.data.filter(Boolean);
    this.data.forEach(dto => {
      if (dto[0] && dto[1]) {
        array.push({ upm: dto[0], codigo_usuario: dto[1], proyecto_id: this.idProject })
      }
    });
    array.shift();//Elimina el primer elemento que contiene las cadenas: upm,codigo_usuario
    array = array.filter(Boolean);
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] != null && array[i]['upm']==array[j]['upm'] &&
        array[i]['codigo_inferior'] == array[j]['codigo_inferior']) {
          duplicates.push(array[i]['codigo_usuario'],array[i]['codigo_usuario']);    
        }
      }
    }
    for (let i = 0; i < array.length; i++) {
      for(let j = i + 1; j < array.length; j++){
        if (array[i]['upm'] == array[j]['upm']) {
          duplicates.push(array[i]['upm']);
        }
      } 
    }
    if (duplicates.length > 0) {
      this.Toast.fire({ icon: 'error', title: 'Hay UPMs Repetidos: ' + duplicates });
    } else {
      this.projectHomeService.assignChiefUpms(array).subscribe(resp => {
        if (resp.status == true) {
          this.cargarUpmChief();
          this.Toast.fire({ icon: 'success', title: resp.message });
        }
      });
    }

  }
  cargarUpmChief() {
    let idUsuario = localStorage.getItem('id');
    this.projectHomeService.chargeUpmsChief({ proyecto_id: this.idProject, usuario_id: idUsuario }).subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

}
