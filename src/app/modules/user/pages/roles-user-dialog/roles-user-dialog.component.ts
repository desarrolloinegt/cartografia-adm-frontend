import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRole, IRoleUserAssignment } from '@core/interfaces/i-role';
import { RoleService } from '@modules/roles/services/role.service';
import { UserService } from '@modules/user/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles-user-dialog',
  templateUrl: './roles-user-dialog.component.html',
  styleUrls: ['./roles-user-dialog.component.scss']
})
export class RolesUserDialogComponent {
  editForm!:FormGroup;
  rolesList!:IRole[];
  constructor(private formBuilder:FormBuilder,private userService:UserService,private roleService:RoleService,public dialogRef:MatDialogRef<RolesUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IRoleUserAssignment){
    this.buildForm();
    this.getPolicys();
  }
  private buildForm(){
    this.editForm = this.formBuilder.group({
      id:[this.data.id,[Validators.required]],
      roles:[[],[Validators.required]]
    });
  }
  get Roles(){
    return this.editForm.get('roles');
  }
  getPolicys(){
    this.roleService.getPolicys().subscribe((resp)=>{
      this.rolesList=resp;
      this.rolesList.forEach(dto=>{
        dto.checked=false;
      });
      this.defaultPermision();
    });
    
  }
  defaultPermision(){
    for (let i = 0; i < this.rolesList.length; i++) {
      for (let j = 0; j < this.data.roles.length; j++) {
          if(this.rolesList[i].nombre==this.data.roles[j].nombre){
            this.rolesList[i].checked=true;
          }
      }
    }
  }
  submit(){}
  cancelEdit(){
    this.dialogRef.close();
  }
  editUser(){
    if(this.editForm.valid){
      this.userService.assignUserPolicys(this.editForm.value).subscribe((resp)=>{
        this.dialogRef.close();
        if(resp.status==true){
          Swal.fire('Ok', resp.message, 'success');
        }
      });
    }
  }
}
