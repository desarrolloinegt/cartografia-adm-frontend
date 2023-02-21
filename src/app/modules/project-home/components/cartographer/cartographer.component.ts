import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AssignmentUpmProject, AssignmentUpmProjectSustituir } from '@core/interfaces/i-upm';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';

@Component({
  selector: 'app-cartographer',
  templateUrl: './cartographer.component.html',
  styleUrls: ['./cartographer.component.scss']
})
export class CartographerComponent {
  formUpms!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['departamento', 'municipio', 'upm', 'estado', 'options'];
  data: string[] = [];
  idProject!: number;

  assignment: AssignmentUpmProject = {
    proyecto_id: 0,
    upms: []
  };
  upmDataSust: AssignmentUpmProjectSustituir = {
    proyecto_id: 0,
    upm_nuevo: '',
    upm_anterior: 0,
    descripcion:'',
    usuario_id:0
  }

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private homeProjectService: ProjectHomeService,
    private projectService: ProjectService
  ){
    this.dataSource = new MatTableDataSource();
    this.buildForm();
  }

  private buildForm(){
    this.formUpms = this.formBuilder.group({
      file: [''],
    });
  }

  ngOnInit() {
    this.homeProjectService
      .getIdProject(localStorage.getItem('project') || '')
      .subscribe((data) => {
        this.idProject = data;
        this.cargarUpmsAsignadas();
      });
  }

  cargarUpmsAsignadas() {
    if (this.idProject != 0) {
      this.projectService.getUpmCartographer({proyecto_id:this.idProject}).subscribe((resp) => {
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
}
