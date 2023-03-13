import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '@modules/project/services/project.service';
import { RolService } from '@modules/rol';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-group-project',
  templateUrl: './new-rol-project.component.html',
  styleUrls: ['./new-rol-project.component.scss']
})
export class NewRolProjectComponent {
  groupForm!:FormGroup;

  constructor(private rolService: RolService,@Inject(MAT_DIALOG_DATA) public data: any,private projectService:ProjectService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<NewRolProjectComponent>) { 
    this.buildForm();
  }

  private buildForm(){
    this.groupForm=this.formBuilder.group({
      nombre:['',Validators.required],
      descripcion:[''],
      proyecto_id:[this.data,[Validators.required]],
    });
  }

  get Nombre() {
    return this.groupForm.get('nombre');
  }

  get Descripcion() {
    return this.groupForm.get('descripcion');
  }

  get ProyectoId() {
    return this.groupForm.get('proyecto_id');
  }

  get Jerarquia() {
    return this.groupForm.get('jerarquia');
  }
  submit(){
  }
  createGroup(){ 
    if(this.groupForm.valid){
      this.rolService.create(this.groupForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
          this.dialogRef.close(1);
        }
      });
    }
  }   

  cancelAdd(){
    this.dialogRef.close();
  }
}
