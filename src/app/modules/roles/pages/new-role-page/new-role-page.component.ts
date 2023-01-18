import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { IPermission } from '@core/interfaces/i-permission';
import { IRole } from '@core/interfaces/i-role';
import { IPermissionAssignment } from '@core/interfaces/i-permission-assignment';
import { RoleService } from '@modules/roles/services/role.service';
import Swal from 'sweetalert2';
import { IUpmAssignment } from '@core/interfaces/i-upm';
@Component({
  selector: 'app-new-role-page',
  templateUrl: './new-role-page.component.html',
  styleUrls: ['./new-role-page.component.scss']
})
export class NewRolePageComponent {
  public permisos:IPermission[]=[];
  idRol:number=0;
  rol:IRole={
    nombre:''
  }
  selectedPermision!:number[];
  asignacionPermisoRol:IPermissionAssignment={
    rol_id:0,
    permisos:[]
  };
  rolForm!:FormGroup;
  constructor(private roleService: RoleService, private formBuilder: FormBuilder, public dialogService: MatDialog) {
    this.cargarPermisos();
    
    this.buildForm();
  }
  cargarPermisos(){
    this.roleService.getPermisions().subscribe((data)=>{
      this.permisos=data; 
    });
  }

  private buildForm(){
    this.rolForm=this.formBuilder.group({
      nombre:['',Validators.required],
      permisos:['',[Validators.required]]
    });
  }
  get Nombre() {
    return this.rolForm.get('nombre');
  }
  get Permisos() {
    return this.rolForm.get('permisos');
  }

  createRol(){ 
    this.asignacionPermisoRol.permisos=this.selectedPermision;
    this.rol.nombre=this.Nombre?.value;
    this.roleService.createRol(this.rol).subscribe((resp)=>{
      if(resp.status==true){
        this.asignacionPermisoRol.rol_id=resp.id_rol;
        this.roleService.assignPermisoToRol(this.asignacionPermisoRol).subscribe((res)=>{
          if(res.status==true){
            Swal.fire('Ok!', res.message, 'success');
          }
        },(err) => {
          console.log(err);
        });
      }
    });
  }

  permisoSelected(options: MatListOption[]){
    this.selectedPermision=options.map(o=>o.value);
  }
}
