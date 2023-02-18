import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialogClose } from '@angular/material/dialog';
import { IRole } from '@core/interfaces/i-role';
import { RoleService } from '@modules/roles/services/role.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-roles-edit-dialog',
  templateUrl: './roles-edit-dialog.component.html',
  styleUrls: ['./roles-edit-dialog.component.scss']
})
export class RolesEditDialogComponent {
  editForm!:FormGroup;

  constructor(private roleService:RoleService,public dialogRef:MatDialogRef<string>, @Inject(MAT_DIALOG_DATA) public data: IRole, private formBuilder: FormBuilder) {  
    this.buildForm();
  }
  
  submit(){

  }

  private buildForm(){
    this.editForm = this.formBuilder.group({
      id:[this.data.id,[Validators.required]],
      nombre: [this.data.nombre, [Validators.required]],
    });
  }

  get Id(){
    return this.editForm.get('id');
  }
  get Nombre() {
    return this.editForm.get('nombre');
  }

  editRole(){
    if(this.editForm.valid){
      console.log(this.editForm.value)
      this.roleService.editPolicy(this.editForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', 'Politica actualizada', 'success');
          this.dialogRef.close(1);
        }
      });
    }
    
  }
  cancelEdit(){
    this.dialogRef.close();
  }
}
