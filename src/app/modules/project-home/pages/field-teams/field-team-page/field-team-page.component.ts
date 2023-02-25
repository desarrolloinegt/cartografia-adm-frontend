import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IFieldTeam } from '@core/interfaces/i-field-team';
import { FieldTeamService } from '@modules/project-home/services/field-team.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';
import { FieldTeamDialogComponent } from '../field-team-dialog';
import { NewFieldTeamPageComponent } from '../new-field-team-page';

@Component({
  selector: 'app-field-team-page',
  templateUrl: './field-team-page.component.html',
  styleUrls: ['./field-team-page.component.scss']
})
export class FieldTeamPageComponent {
  formFieldTeams!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['equipo', 'supervisor', 'vehiculo', 'placa', 'modelo', 'options'];
  data: string[] = [];
  idFieldTeam!: number;
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
    private homeProjectService: ProjectHomeService,
    private projectService: ProjectService
  ) {
    this.dataSource = new MatTableDataSource();
    this.buildForm();
  }

  ngOnInit() {
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
    this.fieldService.getFieldTeam().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
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

  verEquipo() {}
}
