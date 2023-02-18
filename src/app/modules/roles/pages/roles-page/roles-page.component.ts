import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IRole, IRolePermissionsAssingment } from '@core/interfaces/i-role';
import { RoleService } from '@modules/roles/services/role.service';
import Swal from 'sweetalert2';
import { NewRolePageComponent } from '../new-role-page/new-role-page.component';
import { RolesEditDialogComponent } from '../roles-edit-dialog/roles-edit-dialog.component';
import { RolesPermissionEditDialogComponent } from '../roles-permission-edit-dialog/roles-permission-edit-dialog.component';
@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.scss']
})
export class RolesPageComponent {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<IRole>;
  rolesPermisos:IRolePermissionsAssingment={
    id:0,
    nombre:'',
    permisos:[]
  };
  rolEdit:IRole={
    nombre:'',
    id:0,
    checked:false
  }
  displayedColumns: string[] = ['id', 'nombre', 'options'];

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

  editar(id:string, nombre: string) {
    this.rolEdit.id=Number(id);
    this.rolEdit.nombre=nombre;
    const dialogRef = this.dialogService.open(RolesEditDialogComponent, {
      height: '15rem',
      width: '60rem',
      data: this.rolEdit
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

  open() {
    const dialogRef = this.dialogService.open(NewRolePageComponent, {
      height: '50rem',
      width: '60rem',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==1){
        this.cargarRoles();
      } 
    });
  }

  cargarRoles(){
    this.roleService.getPolicys().subscribe((data)=>{ 
      this.dataSource=new MatTableDataSource(data);
    });
  }

  desactivar(id: string, rol: string) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar la politica: ' + rol + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.roleService.desactivePolicy(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarRoles();
            Swal.fire('Ok!',resp.message, 'success')  
          }
        }) 
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }

  verPermisos(id:string,nombre:string){
    this.rolesPermisos.id=Number(id);
    this.rolesPermisos.nombre=nombre;
    this.roleService.getPolicyPermissions(this.rolesPermisos.id).subscribe(data=>{
      this.rolesPermisos.permisos=data;
      const dialogRef = this.dialogService.open(RolesPermissionEditDialogComponent, {
        height: '50rem',
        width: '60rem',
        data: this.rolesPermisos
      });
    }); 
  }
}
