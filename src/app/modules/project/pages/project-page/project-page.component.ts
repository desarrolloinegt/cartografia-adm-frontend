import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProject, IProjectList } from '@core/interfaces/i-project';
import { IUpmAssignmentList } from '@core/interfaces/i-upm-assignment';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';
import { ProjectEditDialogComponent } from '../project-edit-dialog';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<IProjectList>;
  displayedColumns: string[] = ['id', 'nombre', 'year', 'encuesta','upms','progreso','options'];
  date=new Date((new Date()).getDate());
  
  dataEdit:IUpmAssignmentList={
    id:0,
    nombre:'',
    year:'',
    upms:[],
    encuesta:'',
    progreso:0
  }
  constructor(private projectService:ProjectService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.cargarProyectos();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editar(id:string, nombre: string,fecha:string,encuesta:string, upms:[],progres:string) {
    this.dataEdit.nombre=nombre;
    this.dataEdit.id=Number(id);
    this.dataEdit.upms=upms;
    this.dataEdit.encuesta=encuesta;
    this.dataEdit.year=fecha;
    this.dataEdit.progreso=Number(progres);
    const dialogRef = this.dialogService.open(ProjectEditDialogComponent, {
      height: '50rem',
      width: '60rem',
      data: this.dataEdit
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.cargarProyectos();
      } 
    });
  }
  ngOnInit() {
    
  }

  cargarProyectos(){
    this.projectService.getProjects().subscribe((data)=>{ 
      this.dataSource=new MatTableDataSource(data);
    });
  }
  desactivar(id: string, nombre: string) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el Proyecto: ' + nombre + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectService.desactiveProyect(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarProyectos();
            Swal.fire('Ok!', 'Proyecto Desactivado', 'success')  
          }
        },(err) => {
          console.log(err);
        }); 
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
  finalizarProject(id:string,nombre:string){
    Swal.fire({
      title: '¿Esta seguro que desea Finalizar el Proyecto: ' + nombre +'?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectService.projectFinish(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarProyectos();
            Swal.fire('Ok!', 'Proyecto Finalizado', 'success')  
          }
        },(err) => {
          console.log(err);
        }); 
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
}
