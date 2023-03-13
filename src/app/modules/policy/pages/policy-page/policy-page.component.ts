import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IRole, IRolePermissionsAssingment } from '@core/interfaces/i-role';
import { PolicyService } from '@modules/policy/services/policy.service';
import Swal from 'sweetalert2';
import { NewPolicyPageComponent } from '../new-policy-page/new-policy-page.component';
import { PolicyEditDialogComponent } from '../policy-edit-dialog/policy-edit-dialog.component';
import { PolicyPermissionEditDialogComponent } from '../policy-permission-edit-dialog/policy-permission-edit-dialog.component';
@Component({
  selector: 'app-roles-page',
  templateUrl: './policy-page.component.html',
  styleUrls: ['./policy-page.component.scss']
})
export class PolicyPageComponent {
  
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

  constructor(private policyService:PolicyService,private formBuilder: FormBuilder, public dialogService: MatDialog) {
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
    const dialogRef = this.dialogService.open(PolicyEditDialogComponent, {
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
    const dialogRef = this.dialogService.open(NewPolicyPageComponent, {
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
    this.policyService.getPolicys().subscribe((data)=>{ 
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
        this.policyService.desactivePolicy(Number(id)).subscribe((resp) => {
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
    this.policyService.getPolicyPermissions(this.rolesPermisos.id).subscribe(data=>{
      this.rolesPermisos.permisos=data;
      const dialogRef = this.dialogService.open(PolicyPermissionEditDialogComponent, {
        height: '50rem',
        width: '60rem',
        data: this.rolesPermisos
      });
    }); 
  }
}
