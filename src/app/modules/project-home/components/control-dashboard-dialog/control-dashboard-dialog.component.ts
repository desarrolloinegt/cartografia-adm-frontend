import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDepartament } from '@core/interfaces/i-departament';
import { ControlDashboardService } from '@modules/project-home/services/control-dashboard.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';

@Component({
  selector: 'app-control-dashboard-dialog',
  templateUrl: './control-dashboard-dialog.component.html',
  styleUrls: ['./control-dashboard-dialog.component.scss']
})
export class ControlDashboardDialogComponent {
  total: number;
  totalProgres: number;
  finished: number;
  progress: number;
  projectId: number;
  percentajeFinished: number;
  percentajeProgress: number;
  departments: IDepartament[];

  formDashboard!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['municipio', 'upm', 'estado', 'options'];
  data: string[] = [];
  idDepartament!: number;
  departamentoData: IDepartament = {
    id: 0,
    nombre: '',
    image: '',
  }

  

  constructor(
    private formBuilder: FormBuilder,
    private dashboardService: ControlDashboardService,
    public dialogService: MatDialog,
    private projectHomeService: ProjectHomeService
  ) {
    this.dataSource = new MatTableDataSource();
    this.buildForm();

    this.total = 0;
    this.finished = 0;
    this.progress = 0;
    this.projectId = -1;
    this.percentajeFinished = 0;
    this.percentajeProgress = 0;
    this.totalProgres = 0;
    this.departments = [];
  }

  ngOnInit() {
    let departament = localStorage.getItem('departament')||"";
    this.projectHomeService.getIdDepartament(departament).subscribe((resp)=>{
      this.idDepartament = resp;
      this.cargarTabla()
    });
  }

  private buildForm() {
    this.formDashboard = this.formBuilder.group({
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
    this.dashboardService.getDepartments({id_departamento: this.idDepartament}).subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  styleFinished() {
    return { 'stroke-dasharray': `${this.percentajeFinished},100` };
  }

  styleProgress() {
    return { 'stroke-dasharray': `${this.percentajeProgress},100` };
  }
}
