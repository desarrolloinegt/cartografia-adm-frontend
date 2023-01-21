import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '@modules/roles/services/role.service';

@Component({
  selector: 'app-new-group-role-pages',
  templateUrl: './new-group-role-pages.component.html',
  styleUrls: ['./new-group-role-pages.component.scss']
})
export class NewGroupRolePagesComponent {
  rolForm!:FormGroup;
  constructor(private roleService: RoleService, private formBuilder: FormBuilder) {
    this.cargarRoles();
    
    this.buildForm();
  }
  cargarRoles(){
  }

  private buildForm(){
    this.rolForm=this.formBuilder.group({
      grupo:['', Validators.required],
      roles:['',[Validators.required]]
    });
  }
  get Grupo() {
    return this.rolForm.get('grupo');
  }
  get Roles() {
    return this.rolForm.get('roles');
  }

  createAssignment(){ 
    /*this.asignacionPermisoRol.permisos=this.selectedPermision;
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
    });*/
  }
}
