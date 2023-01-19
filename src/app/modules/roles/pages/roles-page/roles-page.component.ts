import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPermissionAssignmetList } from '@core/interfaces/i-permission-assignment';
import { RoleService } from '@modules/roles/services/role.service';
import Swal from 'sweetalert2';
import { RolesEditDialogComponent } from '../roles-edit-dialog/roles-edit-dialog.component';
@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.scss']
})
export class RolesPageComponent {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<IPermissionAssignmetList>;
  rolesPermiso:IPermissionAssignmetList={
    rol_id:0,
    nombre:'',
    permisos:[]
  };
  displayedColumns: string[] = ['rol_id', 'nombre', 'permisos', 'options'];

  constructor(private roleService:RoleService,private formBuilder: FormBuilder, public dialogService: MatDialog) {
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
    this.rolesPermiso.nombre=nombre;
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
    });
  }
  ngOnInit() {
    this.cargarRoles();
  }

  cargarRoles(){
    this.roleService.getRolesPermisos().subscribe((data)=>{ 
      this.dataSource=new MatTableDataSource(data);
    });
  }
  desactivar(id: string, rol: string,permisos:[]) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el rol: ' + rol + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.roleService.desactiveRole(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarRoles();
            Swal.fire('Ok!', 'Rol Desactivado', 'success')  
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
