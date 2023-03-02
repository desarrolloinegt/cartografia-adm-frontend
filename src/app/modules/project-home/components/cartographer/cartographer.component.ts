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
  getColor(estado:string){
   for (let index = 0; index < EstadosUpm.array.length; index++) {
    if(EstadosUpm.array[index].id==Number(estado)){
      return {color:EstadosUpm.array[index].color,border:`1px solid ${EstadosUpm.array[index].color}`};
    }
   }
   return {};
  }
  initActualization(upm:string){
    let data={upm:upm,proyecto_id:this.idProject}
    this.homeProjectService.initActualization(data).subscribe((resp)=>{
      if(resp.status==true){
        this.Toast.fire({icon:'success',title:resp.message});
        this.cargarUpmsAsignadas();
      }
    });
  }
  finishActualization(upm:string){
    let data={upm:upm,proyecto_id:this.idProject}
    this.homeProjectService.finishActualization(data).subscribe((resp)=>{
      if(resp.status==true){
        this.Toast.fire({icon:'success',title:resp.message});
        this.cargarUpmsAsignadas();
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
  });
}
