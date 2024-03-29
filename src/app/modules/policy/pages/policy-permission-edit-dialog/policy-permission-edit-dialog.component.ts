import { Component,Inject } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPermission } from '@core/interfaces/i-permission';
import { IRolePermissionsAssingment } from '@core/interfaces/i-role';
import { PolicyService } from '@modules/policy/services/policy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles-permission-edit-dialog',
  templateUrl: './policy-permission-edit-dialog.component.html',
  styleUrls: ['./policy-permission-edit-dialog.component.scss']
})
export class PolicyPermissionEditDialogComponent {
  public permisosList:IPermission[]=[];
  editForm!:FormGroup;
  constructor(private policyService:PolicyService,public dialogRef:MatDialogRef<PolicyPermissionEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IRolePermissionsAssingment, private formBuilder: FormBuilder) {  
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
    if(this.data.politica_sistema==0){
      this.policyService.getPermissionsProject().subscribe((resp)=>{
        this.permisosList=resp;
        this.permisosList.forEach(dto=>{
          dto.checked=false;
        });
        this.defaultPermision();
      });
    } else if(this.data.politica_sistema==1) {
      this.policyService.getPermissionsSystem().subscribe((resp)=>{
        this.permisosList=resp;
        this.permisosList.forEach(dto=>{
          dto.checked=false;
        });
        this.defaultPermision();
      });
    }
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
      this.policyService.assignPermisoToPolicy(this.editForm.value).subscribe(data=>{
        if(data.status==true){
          this.dialogRef.close(1);
          Swal.fire('Ok!','Permisos actualizados', 'success');
        }
      })
    }
  }

  cancelEdit(){
    this.dialogRef.close();
  }
}
