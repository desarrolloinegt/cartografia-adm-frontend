import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialogClose } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { IPermiso } from '@core/interfaces/i-permiso';
import { IAsignacionRolPermiso } from '@core/interfaces/iasignacion-rol-permiso';
import { RoleService } from '@modules/roles/services/role.service';
import Swal from 'sweetalert2';
import { RolesPermiso } from '../roles-edit/roles-edit.component';
@Component({
  selector: 'app-roles-edit-dialog',
  templateUrl: './roles-edit-dialog.component.html',
  styleUrls: ['./roles-edit-dialog.component.scss']
})
export class RolesEditDialogComponent {
  editForm!:FormGroup;
  public checked = false;
  selectedPermision:number[]=[];
  public permisosList:IPermiso[]=[];
  public defaultPermisos:IPermiso[]=[];
  asignacionPermisoRolEditado:IAsignacionRolPermiso={
    rol_id:0,
    permisos:[]
  };

  constructor(private roleService:RoleService,public dialogRef:MatDialogRef<string>, @Inject(MAT_DIALOG_DATA) public data: RolesPermiso, private formBuilder: FormBuilder) {
   
    this.buildForm();
    this.getPermisos();
  }
  
  submit(){

  }

  private buildForm(){
    this.editForm = this.formBuilder.group({
      rol_id:[this.data.rol_id,[Validators.required]],
      nombre: [this.data.nombre, [Validators.required]],
      permisos:[{value:[],disabled:true},[Validators.required]]
    });
  }

  get Id(){
    return this.editForm.get('rol_id');
  }
  get Nombre() {
    return this.editForm.get('nombre');
  }

  get Permisos() {
    return this.editForm.get('permisos');
  }

  changePermisoStatus(status:boolean){
    this.checked=status;
    if(this.checked){
      this.Permisos?.enable();
    }else{
      this.Permisos?.disable();
    }
  }
  editRole(){
    if(this.editForm.valid){
      if(this.Permisos?.disabled){
        this.Permisos.setValue("");
        this.Permisos.enable();
      }
      this.roleService.editRole(this.editForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
          this.dialogRef.close(1);
        }
      },(err) => {
        console.log(err);
      });
    }
    
  }

  getPermisos(){
    this.roleService.getPermisions().subscribe((resp)=>{
      this.permisosList=resp;
      this.permisosList.forEach(dto=>{
        dto.checked=false;
      });
      this.defaultPermision();
    });
    
  }
  defaultPermision(){
    for (let i = 0; i < this.permisosList.length; i++) {
      for (let j = 0; j < this.data.permisos.length; j++) {
          if(this.permisosList[i].alias==this.data.permisos[j]){
            this.permisosList[i].checked=true;
          }
      }
    }

  }
  permisoSelected(options: MatListOption[]){
    this.selectedPermision=options.map(o=>o.value);
  }
  cancelEdit(){
    this.dialogRef.close();
  }
}
