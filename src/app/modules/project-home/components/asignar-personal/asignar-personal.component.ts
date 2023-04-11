import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGroup, IGroupUserAssignment } from '@core/interfaces/i-group';
import { IProjectUserAssingment } from '@core/interfaces/i-project';
import { IPersonalAssignment, IUserList } from '@core/interfaces/i-user';
import { ExcelService } from '@modules/project-home/services/excel.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import { RolService } from '@modules/rol';
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  idProject!: number;
  data: AOA = [[1, 2], [3, 4]];
  users: object[] = [];
  usernames: IGroupUserAssignment[] = []
  projectUserAssignment: IProjectUserAssingment = {
    usuario_id: 0,
    proyecto_id: 0
  }
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['encargado', 'empleado', 'options'];

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
        this.getChiefEmployee();
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
    this.rolService.getGroupsMinor(this.projectUserAssignment).subscribe(data => {
      this.groups = data;
    });
  }

  getUsers(grupo: string) {
    let idUsuario = Number(localStorage.getItem('id'));
    let str = grupo.split(',');
    this.users = [];
    this.usernames = [];
    this.projectHomeService.getUsersAssigned({ rol_id: Number(str[0]), proyecto_id: this.idProject, usuario_id: idUsuario }).subscribe(data => {
      this.usernames = data;
      this.usernames.forEach(data => {
        this.users.push({ encargado: '', codigo_usuario: data.codigo_usuario, nombres: data.nombres, apellidos: data.apellidos });
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
  async generateJson() {
    let idUsuario = Number(localStorage.getItem('id'));

    if (Number(idUsuario)) {
      let array: any = [];
      let duplicates: String[] = [];
      this.data.forEach(dto => {
        if (dto[0] && dto[1]) {
          array.push({ codigo_superior: dto[0], codigo_inferior: dto[1], proyecto_id: this.idProject });
        }
      });
      array.shift();//Elimina el primer elemento que contiene las cadenas: encargado,personal
      array = array.filter(Boolean);
      for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
          if (array[i] != null && array[i]['codigo_superior']==array[j]['codigo_superior'] &&
          array[i]['codigo_inferior'] == array[j]['codigo_inferior']) {
            duplicates.push(array[i]['codigo_superior'],array[i]['codigo_inferior']);    
          }
        }
      }
      for (let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++){
          if (array[i]['codigo_inferior'] == array[j]['codigo_inferior']) {
            duplicates.push(array[i]['codigo_inferior']);
          }
        } 
      }
      if (duplicates.length > 0) {
        this.Toast.fire({ icon: 'error', title: 'Hay filas repetidas: ' + duplicates });
      } else {
        this.projectHomeService.assignPersonal(array).subscribe(resp => {
          if (resp.status == true) {
            this.Toast.fire({ icon: 'success', title: resp.message })
            this.getChiefEmployee();
          }
        });
      }
    }
  }

  getChiefEmployee() {
    let idUsuario = Number(localStorage.getItem('id'));
    this.projectHomeService.getChiefEmployee({ usuario_id: idUsuario, proyecto_id: this.idProject }).subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  verPlantilla() {
    Swal.fire({
      text: 'Ejemplo de plantilla',
      imageUrl: 'assets/EjemploPlantillaPersonal.png',
      imageWidth: 375,
      imageHeight: 250,
      imageAlt: 'Ejemplo del archivo de carga',
    })
  }

  deleteAsignation(encargado_id:string,empleado_id:string,encargado:string,empleado:string){
    Swal.fire({
      title: '¿Está seguro que desea desactivar la asignación: ' + empleado + '?',
      text: "¡Esta acción eliminará todas las asignaciones de las tablas Personal y UPM!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Desactivar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectHomeService.deleteAssingmentUsers({encargado_id:encargado_id,empleado_id:empleado_id,proyecto_id:this.idProject}).subscribe(resp => {
          if (resp.status == true) {
            Swal.fire('Ok', resp.message, 'success');
            this.getChiefEmployee();
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
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
