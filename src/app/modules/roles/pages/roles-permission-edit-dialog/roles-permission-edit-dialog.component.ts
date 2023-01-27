import { Component,Inject } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPermission } from '@core/interfaces/i-permission';
import { IRolePermissionsAssingment } from '@core/interfaces/i-role';
import { RoleService } from '@modules/roles/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles-permission-edit-dialog',
  templateUrl: './roles-permission-edit-dialog.component.html',
  styleUrls: ['./roles-permission-edit-dialog.component.scss']
})
export class RolesPermissionEditDialogComponent {
  public permisosList:IPermission[]=[];
  editForm!:FormGroup;
  constructor(private roleService:RoleService,public dialogRef:MatDialogRef<RolesPermissionEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IRolePermissionsAssingment, private formBuilder: FormBuilder) {  
    this.buildForm();
    this.getPermisos();
  }

  private buildForm(){
    this.editForm = this.formBuilder.group({
      id:[this.data.id,[Validators.required]],
      permisos:[[],[Validators.required]]
    });
  }
  get Permisos(){
    return this.editForm.get('permisos');
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
          if(this.permisosList[i].alias==this.data.permisos[j].alias){
            this.permisosList[i].checked=true;
          }
      }
    }
  }
  submit(){}

  editRole(){
    if(this.editForm.valid){
      this.roleService.assignPermisoToRol(this.editForm.value).subscribe(data=>{
        if(data.status==true){
          this.dialogRef.close(1);
          Swal.fire('Ok!', data.message, 'success');
        }
      })
    }
  }

  cancelEdit(){
    this.dialogRef.close();
  }
}
