import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProject, IProjectList } from '@core/interfaces/i-project';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<IProjectList>;
  displayedColumns: string[] = ['id', 'nombre', 'fecha', 'encuesta','options'];

  constructor(private projectService:ProjectService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editar(id:string, nombre: string, permisos:[]) {
    /*this.rolesPermiso.nombre=nombre;
    this.rolesPermiso.rol_id=Number(id);
    this.rolesPermiso.permisos=permisos;
    const dialogRef = this.dialogService.open(RolesEditDialogComponent, {
      height: '50rem',
      width: '60rem',
      data: this.rolesPermiso
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.cargarRoles();
      } 
    });*/
  }
  ngOnInit() {
    this.cargarProyectos();
  }

  cargarProyectos(){
    this.projectService.getProjects().subscribe((data)=>{ 
      this.dataSource=new MatTableDataSource(data);
    });
  }
  desactivar(id: string, rol: string,permisos:[]) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el Proyecto: ' + rol + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        /*this.roleService.desactiveRole(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarRoles();
            Swal.fire('Ok!', 'Rol Desactivado', 'success')  
          }
        },(err) => {
          console.log(err);
        }); */
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
}
