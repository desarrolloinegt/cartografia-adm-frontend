import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EstadosUpm } from '@core/interfaces/i-hierarchy';
import { AssignmentUpmProject, AssignmentUpmProjectSustituir } from '@core/interfaces/i-upm';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-office-work',
  templateUrl: './office-work.component.html',
  styleUrls: ['./office-work.component.scss']
})
export class OfficeWorkComponent {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['departamento','municipio','upm', 'supervisor', 'estado', 'fecha', 'options'];
  data: string[] = [];
  idProject!: number;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private homeProjectService: ProjectHomeService,
    private projectService: ProjectService
  ) {
    this.dataSource = new MatTableDataSource();
  }

 

  ngOnInit() {
    this.homeProjectService.getIdProject(localStorage.getItem('project') || '')
    .subscribe((data) => {
      this.idProject = data;
      this.chargueUpmFinished();
    });
  }

  chargueUpmFinished() {
    if (this.idProject != 0) {
      this.projectService.getUpmsFinished({proyecto_id:this.idProject}).subscribe((resp) => {
        console.log(resp)
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
  getColor(estado:string){
  for (let index = 0; index < EstadosUpm.array.length; index++) {
    if(EstadosUpm.array[index].id==Number(estado)){
      return {color:EstadosUpm.array[index].color,border:`1px solid ${EstadosUpm.array[index].color}`};
    }
  }
  return {};
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

  crearInforme() {}

}
