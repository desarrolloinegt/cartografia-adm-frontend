import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISupervisor } from '@core/interfaces/i-supervisor';
import { SupervisorService } from '@modules/project-home/services/supervisor.service';

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
    id_cartografo: 0,
    nombre_cartografo: '',
    apellido_cartografo: '',
    estado: '',
  }

  constructor(
    private formBuilder: FormBuilder,
    public supervisorService: SupervisorService
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

  asignar() {}

  verMapa() {}

}
