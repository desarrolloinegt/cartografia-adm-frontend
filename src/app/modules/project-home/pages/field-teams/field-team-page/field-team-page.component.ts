import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IFieldTeam } from '@core/interfaces/i-field-team';
import { IRole } from '@core/interfaces/i-role';
import { FieldTeamService } from '@modules/project-home/services/field-team.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';
import { FieldTeamDialogComponent } from '../field-team-dialog';
import { NewFieldTeamPageComponent } from '../new-field-team-page';
import * as XLSX from 'xlsx';
import { GroupService } from '@modules/groups';
import { ExcelService } from '@modules/project-home/services/excel.service';
type AOA = any[][];
@Component({
  selector: 'app-field-team-page',
  templateUrl: './field-team-page.component.html',
  styleUrls: ['./field-team-page.component.scss']
})
export class FieldTeamPageComponent {
  formFieldTeams!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data: AOA = [[1, 2], [3, 4]];
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['supervisor', 'vehiculo', 'placa', 'options'];
  idFieldTeam!: number;
  projectId!:number;
  roles:IRole[]=[];
  idProject:number=0;
  fieldTeamData: IFieldTeam = {
    id: 0,
    equipo: '',
    supervisor: '',
    vehiculo: '',
    placa: '',
    modelo: '',
  }

  constructor(
    private formBuilder: FormBuilder,
    public dialogService: MatDialog,
    private fieldService: FieldTeamService,
    private groupService:GroupService,
    private projectHomeService:ProjectHomeService,
    private excelService: ExcelService  
  ) {
    this.dataSource = new MatTableDataSource();
    this.buildForm();
  }

  ngOnInit() {
    let idUsuario = localStorage.getItem('id');
    if (Number(idUsuario)) {
      this.projectHomeService.getIdProject(localStorage.getItem('project') || '').subscribe(data => {
        this.idProject = data;
        this.getGroupsMinor();
      });
    }
    this.projectHomeService.getIdProject(localStorage.getItem('project') || '').subscribe(data => {
      this.idProject = data;
    });
    this.cargarEquipo();
  }

  private buildForm() {
    this.formFieldTeams = this.formBuilder.group({
      file: [''],
    }); 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async getGroupsMinor() {
    this.groupService.getGroupsMinor({proyecto_id:this.idProject}).subscribe(data => {
      this.roles = data;
    });
  }
  open() {
    const dialogRef = this.dialogService.open(NewFieldTeamPageComponent, {
      height: '50rem',
      width: '50rem',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==1) {
        this.cargarEquipo();
      }
    });
  }

  cargarEquipo() {
    let project=localStorage.getItem('project');
    this.fieldService.getFieldTeam({proyecto:project}).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })
  }

  editar(id: number, equipo: string, supervisor:string, vehiculo:string, placa: string, modelo:string) {
    this.fieldTeamData.id = id;
    this.fieldTeamData.equipo = equipo;
    this.fieldTeamData.supervisor = supervisor;
    this.fieldTeamData.vehiculo = vehiculo;
    this.fieldTeamData.placa = placa;
    this.fieldTeamData.modelo = modelo;
    const dialogRef = this.dialogService.open(FieldTeamDialogComponent, {
      height: '50rem',
      width: '50rem',
      data: this.fieldTeamData
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 1) {
        this.cargarEquipo();
      }
    });
  }

  desactivar(id: number, equipo:string) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el Equipo: ' + equipo + '?', 
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.fieldService.desactiveFielTeam(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarEquipo();
            Swal.fire('Ok!', resp.message, 'success')
          }
        }, (error) => {
          console.log(error);
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }

  seeTeam(idUser:string) {
    this.fieldService.getUsersTeam({proyecto_id:this.idProject,supervisor:Number(idUser)}).subscribe((resp)=>{
      const dialogRef = this.dialogService.open(FieldTeamDialogComponent, {
        height: '50rem',
        width: '50rem',
        data: resp
      });
    });
  }

  seeExample(){
    Swal.fire({
      text: 'Ejemplo de plantilla',
      imageUrl: 'assets/EjemploPlantillaPersonal.png',
      imageWidth: 375,
      imageHeight: 250,
      imageAlt: 'Ejemplo del archivo de carga',
    })
  }
  async addFile(){
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
  async generateJson(){
    let array: any = [];
    let duplicates: String[] = [];
    let teams:any=[];
    this.data.forEach(dto => {
      if (dto[0] && dto[1]) {
        array.push({ codigo_superior: dto[0], codigo_inferior: dto[1], proyecto_id: this.idProject });
        teams.push(dto[0]);
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
    teams.shift();
    teams=teams.filter((item:any,index:any)=>{
      return teams.indexOf(item)===index;
    });
    if (duplicates.length > 0) {
      this.Toast.fire({ icon: 'error', title: 'Hay filas repetidas: ' + duplicates });
    } else {
      this.projectHomeService.assignPersonal(array).subscribe(resp => {
        if (resp.status == true) {
          this.Toast.fire({ icon: 'success', title: resp.message })
          this.createTeams(teams);
        }
      });
    }
  }

  createTeams(teams:[]){
    let object={proyecto_id:this.idProject,supervisores:teams};
    this.fieldService.createFieldTeam(object).subscribe((resp)=>{
      if(resp.status==true){
        this.cargarEquipo();
      }
    });
  }
  getUsers(grupo:string){
    let idUsuario = Number(localStorage.getItem('id'));
    let str = grupo.split(',');
    let users:any[] = [];
    let usernames = [];
    this.projectHomeService.getUsersAssigned({ rol_id: Number(str[0]), proyecto_id: this.idProject, usuario_id: idUsuario }).subscribe((data) => {
      usernames = data;
      usernames.forEach((data:any) => {
        users.push({ encargado: '', codigo_usuario: data.codigo_usuario, nombres: data.nombres, apellidos: data.apellidos });
      })
      this.excelService.exportAsExcelFile(users, str[1]);
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
  });
}
