import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISupervisor, ISupervisorUserAssignment } from '@core/interfaces/i-supervisor';
import { SupervisorService } from '@modules/project-home/services/supervisor.service';
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
  supervisorData: ISupervisor = {
    id: 0,
    upm: '',
    codigo_usuario: 0,
    nombres: '',
    apellidos: '',
    estado: '',
  }

  supervisorUserData: ISupervisorUserAssignment = {
    id: 0,
    nombre: '',
    users: [],
  }

  constructor(
    private formBuilder: FormBuilder,
    public supervisorService: SupervisorService,
    public dialogService: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource();
    this.buildForm();
  }

  ngOnInit() {
    this.cargarTabla();
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
    this.supervisorService.getDataSupervisor({proyecto_id: 1}).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  asignar(idUser: string, nombre: string) {
    this.supervisorUserData.id = Number(idUser);
    this.supervisorUserData.nombre = nombre;
    this.supervisorService.getGroupUsers(this.supervisorUserData.id).subscribe(data => {
      this.supervisorUserData.users = data;
      const dialogRef = this.dialogService.open(DialogSupervisorAssignUserComponent, {
        height: '50rem',
        width: '50rem',
        data: this.supervisorUserData
    });
  })
}

  verMapa() {}

}
