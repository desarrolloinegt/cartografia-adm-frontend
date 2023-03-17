import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EstadosUpm } from '@core/interfaces/i-hierarchy';
import { ISupervisor, ISupervisorUserAssignment } from '@core/interfaces/i-supervisor';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { SupervisorService } from '@modules/project-home/services/supervisor.service';
import { DialogBitacoraComponent } from '../dialog-bitacora';
import { DialogSupervisorAssignUserComponent } from '../dialog-supervisor-assign-user';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent {
  formSupervisor!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['upm', 'codigo_usuario', 'nombres', 'apellidos', 'estado', 'options'];
  data: string[] = [];
  idSupervisor!: number;
  idProject:Number=0;
  supervisorData: ISupervisor = {
    id: 0,
    upm: '',
    codigo_usuario: 0,
    nombres: '',
    apellidos: '',
    estado: '',
  }

  supervisorUserData: ISupervisorUserAssignment = {
    codigo_usuario: 0,
    nombre: '',
    proyecto_id:0,
    upm:""
  }

  constructor(
    private formBuilder: FormBuilder,
    private supervisorService: SupervisorService,
    public dialogService: MatDialog,
    private projectHomeService:ProjectHomeService
  ) {
    this.dataSource = new MatTableDataSource();
    this.buildForm();
  }

  ngOnInit() {
    let project=localStorage.getItem('project')||"";
    this.projectHomeService.getIdProject(project).subscribe((resp)=>{
      this.idProject=resp;
      this.supervisorUserData.proyecto_id=resp;
      this.cargarTabla()
    })
    ;
  }

  private buildForm() {
    this.formSupervisor = this.formBuilder.group({
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

  cargarTabla() {
    this.supervisorService.getDataSupervisor({proyecto_id: this.idProject}).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })
  }

  asignar(codigo_usuario: string, nombre: string,upm:string) {
    this.supervisorUserData.codigo_usuario = Number(codigo_usuario);
    this.supervisorUserData.nombre = nombre;
    this.supervisorUserData.upm=upm;
    const dialogRef = this.dialogService.open(DialogSupervisorAssignUserComponent, {
      height: '50rem',
      width: '50rem',
      data: this.supervisorUserData
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.cargarTabla();
      }
    });
  }

  verMapa() {}

  getColor(codigo:string){
    for (let index = 0; index < EstadosUpm.array.length; index++) {
      if(EstadosUpm.array[index].id==Number(codigo)){
        return {color:EstadosUpm.array[index].color,border:`1px solid ${EstadosUpm.array[index].color}`};
      }
     }
     return {};
  }

  seeBitacor(upm:String){
    const dialogRef=this.dialogService.open(DialogBitacoraComponent,{
      height:'40rem',
      width:'48rem',
      data:upm
    });
  }
}
