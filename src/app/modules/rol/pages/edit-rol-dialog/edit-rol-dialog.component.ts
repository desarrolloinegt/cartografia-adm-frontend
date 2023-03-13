import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGroup } from '@core/interfaces/i-group';
import { IHierarchy } from '@core/interfaces/i-hierarchy';
import { IProjectListView } from '@core/interfaces/i-project';
import { ProjectService } from '@modules/project/services/project.service';
import { RolService } from '@modules/rol/services';
import Swal from 'sweetalert2';
import { NewRolPagesComponent } from '../new-rol-pages';

@Component({
  selector: 'app-edit-rol-dialog',
  templateUrl: './edit-rol-dialog.component.html',
  styleUrls: ['./edit-rol-dialog.component.scss']
})
export class EditRolDialogComponent {
  editForm!:FormGroup;
  projects:IProjectListView[]=[];
  jerarquias=IHierarchy.getHierarchys();
  constructor(private rolService:RolService,private projectService:ProjectService,public dialogRef:MatDialogRef<IGroup>, @Inject(MAT_DIALOG_DATA) public data: IGroup, private formBuilder: FormBuilder) {
    this.buildForm();
  }
  
  submit(){
  }

  private buildForm(){
    this.editForm = this.formBuilder.group({
      id:[this.data.id,[Validators.required]],
      nombre: [this.data.nombre, [Validators.required]],
      descripcion: [this.data.descripcion],
    });
  }

  get Id(){
    return this.editForm.get('id');
  }
  get Nombre() {
    return this.editForm.get('nombre');
  }

  get Descripcion() {
    return this.editForm.get('descripcion');
  }
  get Jerarquia() {
    return this.editForm.get('jerarquia');
  }
 

  editGroup(){
    if(this.editForm.valid){
      this.rolService.editGroup(this.editForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', 'Rol editado correctamente', 'success');
          this.dialogRef.close(1);
        }
      })
    }
  }
  cancelEdit(){
    this.dialogRef.close();
  }
}
