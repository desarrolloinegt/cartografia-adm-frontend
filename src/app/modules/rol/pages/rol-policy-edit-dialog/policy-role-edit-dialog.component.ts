import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGroupRoleAssignment } from '@core/interfaces/i-group';
import { IRole } from '@core/interfaces/i-role';
import { PolicyService } from '@modules/policy/services/policy.service';
import { RolService } from '@modules/rol/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-group-role-edit-dialog',
  templateUrl: './policy-role-edit-dialog.component.html',
  styleUrls: ['./policy-role-edit-dialog.component.scss']
})
export class PolicyRoleEditDialogComponent {
  editForm!:FormGroup;
  public checked = false;
  roles:IRole[]=[]

  constructor(private policyService:PolicyService,private rolService:RolService ,public dialogRef:MatDialogRef<IGroupRoleAssignment>, @Inject(MAT_DIALOG_DATA) public data: IGroupRoleAssignment, private formBuilder: FormBuilder) {
    this.buildForm();
    this.getRoles();
  }
  
  submit(){

  }

  private buildForm(){
    this.editForm = this.formBuilder.group({
      rol_id:[this.data.id,[Validators.required]],
      politicas:[[],[Validators.required]]
    });
  }

  get Roles(){
    return this.editForm.get('roles');
  }

  editGroup(){   
    if(this.editForm.valid){
      this.rolService.editGroupRoles(this.editForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', 'Politicas guardadas correctamente', 'success');
          this.dialogRef.close(1);
        }
      });
    }
  }

  getRoles(){
    this.policyService.getPolicysProject().subscribe((resp)=>{
      this.roles=resp;
      this.roles.forEach(dto=>{
        dto.checked=false;
      });
      this.defaultRoles();
    });
    
  }
  defaultRoles(){
    for (let i = 0; i < this.roles.length; i++) {
      for (let j = 0; j < this.data.roles.length; j++) {
          if(this.roles[i].nombre==this.data.roles[j].nombre){
            this.roles[i].checked=true;
          }
      }
    }
  }
  cancelEdit(){
    this.dialogRef.close();
  }
}
