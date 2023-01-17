import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { IPermiso } from '@core/interfaces/i-permiso';
import { IRol } from '@core/interfaces/i-rol';
import { IAsignacionRolPermiso } from '@core/interfaces/iasignacion-rol-permiso';
import { RoleService } from '@modules/roles/services/role.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-role-page',
  templateUrl: './new-role-page.component.html',
  styleUrls: ['./new-role-page.component.scss']
})
export class NewRolePageComponent {
  public permisos:IPermiso[]=[];
  idRol:number=0;
  rol:IRol={
    nombre:''
  }
  selectedPermision!:number[];
  asignacionPermisoRol:IAsignacionRolPermiso={
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
