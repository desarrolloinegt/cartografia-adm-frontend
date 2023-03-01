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
  displayedColumns: string[] = ['supervisor', 'vehiculo', 'options'];
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
  async addTeam() {
    const { value: formValues } = await Swal.fire({
      title: 'Añadir equipo',
      html:
        '<span>Ingrese el codigo de usuario</span>' +
        '<input type="text" style="width:80%;"  placeholder="1234" id="user" class="swal2-input">' +
        '<br>' +
        '<span>Ingrese la placa del vehiculo (opcional)</span>' +
        '<input id="placa" style="width:80%;" value="" placeholder="M123ABC" class="swal2-input">',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        return [
          document.getElementById('user'),
          document.getElementById('placa'),
        ];
      },
    });
    if (formValues) {
      let user = (formValues[0] as HTMLInputElement).value;
      let placa = (formValues[1] as HTMLInputElement).value;
      let data={codigo_usuario:user,placa:placa,proyecto_id:this.idProject};
      this.fieldService.addTeam(data).subscribe(resp=>{
        if(resp.status){
          this.Toast.fire({icon:'success',title:resp.message});
          this.cargarEquipo();
        }
      });
    }
  }

  cargarEquipo() {
    let project=localStorage.getItem('project');
    this.fieldService.getFieldTeam({proyecto:project}).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })
  }

  seeTeam(idUser:string) {
    
      const dialogRef = this.dialogService.open(FieldTeamDialogComponent, {
        height: '40rem',
        width: '50rem',
        data:{proyecto_id:this.idProject,supervisor:Number(idUser)}
      });
  }

  seeExample(){
    Swal.fire({
      text: 'Ejemplo de plantilla',
      imageUrl: 'assets/EjemploEquipo.PNG',
      imageWidth: 375,
      imageHeight: 260,
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
    this.data.forEach(dto => {
      if (dto[1]) {
        array.push({ placa: dto[0], codigo_supervisor: dto[1], proyecto_id: this.idProject });
      }
    });
    array.shift();//Elimina el primer elemento que contiene las cadenas: encargado,personal
    array = array.filter(Boolean);
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] != null && array[i]['codigo_supervisor']==array[j]['codigo_supervisor'] &&
        array[i]['placa'] == array[j]['placa']) {
          duplicates.push(array[i]['placa'],array[i]['codigo_supervisor']);    
        }
      }
    }
    for (let i = 0; i < array.length; i++) {
      for(let j = i + 1; j < array.length; j++){
        if (array[i]['placa']!=null && array[i]['placa'] == array[j]['placa']) {
          duplicates.push(array[i]['placa']);
        }
      } 
    }
    
    for (let index = 0; index < array.length; index++) {
      if(!array[index]['placa']){
        array[index]['placa']=""
      }
    }
    if (duplicates.length > 0) {
      this.Toast.fire({ icon: 'error', title: 'Hay filas repetidas: ' + duplicates });
    } else {
      console.log(array)
      this.fieldService.createFieldTeam(array).subscribe((resp)=>{
        if(resp.status==true){
          this.Toast.fire({icon:'success',title:resp.message});
          this.cargarEquipo();
        }
      });
    }
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
      this.createFile(str[1],users);
      
    });
  }

  createFile(nombre:string,users:any[]){
    let dataFile:any=[];
    let vehicles:any=[];
    this.fieldService.getVehicles().subscribe((data)=>{
      vehicles=data;
      for (let index = 0; index < vehicles.length; index++) {
        dataFile.push({ placa: vehicles[index]['placa'], codigo_usuario: '', nombres: '', apellidos: '' });
      }
      for (let index = 0; index < users.length; index++) {
        dataFile.push({ placa:'', codigo_usuario: users[index].codigo_usuario, nombres: users[index].nombres, apellidos: users[index].apellidos });
      }
      this.excelService.exportAsExcelFile(dataFile,nombre);
    });
   
  }
  async modifyVehicle(user:string,placaAnterior:string){
    const { value: placa } = await Swal.fire({
      title: 'Sustituir vehiculo',
      input: 'text',
      inputPlaceholder: 'M987ABC',
      confirmButtonText: 'Reemplazar vehiculo',
      showCancelButton: true,
      inputLabel: 'Ingrese la placa del nuevo vehiculo',
    });
    if (placa) {
      let data={proyecto_id:this.idProject,usuario_id:Number(user),placa_nueva:placa,placa_anterior:placaAnterior};
      this.fieldService.modifyVehicle(data).subscribe((resp)=>{
        if(resp.status==true){
          this.Toast.fire({icon:'success',title:resp.message});
          this.cargarEquipo();
        }
      });
    }
  }

  async addVehicle(user:string){
    const { value: placa } = await Swal.fire({
      title: 'Asignar vehiculo',
      input: 'text',
      inputPlaceholder: 'M987ABC',
      confirmButtonText: 'Asignar vehiculo',
      showCancelButton: true,
      inputLabel: 'Ingrese la placa del  vehiculo',
    });
    if (placa) {
      let data={proyecto_id:this.idProject,usuario_id:Number(user),placa:placa};
      this.fieldService.addVehicule(data).subscribe((resp)=>{
        if(resp.status==true){
          this.Toast.fire({icon:'success',title:resp.message});
          this.cargarEquipo();
        }
      });
    }
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
