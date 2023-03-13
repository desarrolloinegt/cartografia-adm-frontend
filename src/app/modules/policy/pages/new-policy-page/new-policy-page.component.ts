import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { IPermission } from '@core/interfaces/i-permission';
import { IRole, IRolePermissionsAssingment, IRolePermissionsAssingmentCreate } from '@core/interfaces/i-role';
import { PolicyService } from '@modules/policy/services/policy.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-role-page',
  templateUrl: './new-policy-page.component.html',
  styleUrls: ['./new-policy-page.component.scss']
})
export class NewPolicyPageComponent {
  public permisos:IPermission[]=[];
  idRol:number=0;
  rol:IRole={
    nombre:'',
    id:0,
    checked:false
  }
  selectedPermision!:number[];
  asignacionPermisoRol:IRolePermissionsAssingmentCreate={
    id:0,
    permisos:[]
  };
  rolForm!:FormGroup;
  constructor(private policyService: PolicyService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<NewPolicyPageComponent>) {
    this.cargarPermisos();
    
    this.buildForm();
  }

  cargarPermisos(){
    this.policyService.getPermisions().subscribe((data)=>{
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

  submit(){

  }
  createPolicy(){ 
    this.asignacionPermisoRol.permisos=this.selectedPermision;
    this.rol.nombre=this.Nombre?.value;
    this.policyService.createRol(this.rol).subscribe((resp)=>{
      if(resp.status==true){
        this.asignacionPermisoRol.id=resp.id_rol;
        this.policyService.assignPermisoToPolicy(this.asignacionPermisoRol).subscribe((res)=>{
          if(res.status==true){
            Swal.fire('Ok!', 'Politica creada correctamente', 'success');
            this.dialogRef.close(1);
          }
        });
      }
    });
  }

  cancelAdd(){
    this.dialogRef.close();
  }

  permisoSelected(options: MatListOption[]){
    this.selectedPermision=options.map(o=>o.value);
  }
}
