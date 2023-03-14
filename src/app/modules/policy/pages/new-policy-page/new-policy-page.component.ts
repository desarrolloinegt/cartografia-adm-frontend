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
  policySystem:boolean;
  rol:IRole={
    nombre:'',
    id:0,
    checked:false,
    politica_sistema:-1
  }
  selectedPermision!:number[];
  asignacionPermisoRol:IRolePermissionsAssingmentCreate={
    id:0,
    permisos:[],
  };
  rolForm!:FormGroup;
  constructor(private policyService: PolicyService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<NewPolicyPageComponent>) {
    this.policySystem=false;
    this.cargarPermisos();
    this.buildForm();
  }

  cargarPermisos(){
    if(this.policySystem){
      this.policyService.getPermissionsSystem().subscribe((data)=>{
        this.permisos=[];
        this.permisos=data; 
      });
    } else {
      this.policyService.getPermissionsProject().subscribe((data)=>{
        this.permisos=[];
        this.permisos=data;
      })
    }
  }

  changePermission(status:boolean){
    this.policySystem=status;
    this.cargarPermisos();
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
    if(this.policySystem){
      this.rol.politica_sistema=1;
    }
    if(!this.policySystem) {
      this.rol.politica_sistema=0;
    }
    if(this.rol.politica_sistema==0 || this.rol.politica_sistema==1){
      console.log(this.rol)
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
  }

  cancelAdd(){
    this.dialogRef.close();
  }

  permisoSelected(options: MatListOption[]){
    this.selectedPermision=options.map(o=>o.value);
  }
}
