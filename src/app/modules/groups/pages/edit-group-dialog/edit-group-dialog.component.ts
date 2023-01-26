import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGroup } from '@core/interfaces/i-group';
import { IHierarchy } from '@core/interfaces/i-hierarchy';
import { IProjectListView } from '@core/interfaces/i-project';
import { GroupService } from '@modules/groups/services';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';
import { NewGroupPagesComponent } from '../new-group-pages';

@Component({
  selector: 'app-edit-group-dialog',
  templateUrl: './edit-group-dialog.component.html',
  styleUrls: ['./edit-group-dialog.component.scss']
})
export class EditGroupDialogComponent {
  editForm!:FormGroup;
  projects:IProjectListView[]=[];
  jerarquias=IHierarchy.getHierarchys();
  constructor(private groupService:GroupService,private projectService:ProjectService,public dialogRef:MatDialogRef<IGroup>, @Inject(MAT_DIALOG_DATA) public data: IGroup, private formBuilder: FormBuilder) {
    this.buildForm();
    this.getProjects();
  }
  
  submit(){
  }

  private buildForm(){
    this.editForm = this.formBuilder.group({
      id:[this.data.id,[Validators.required]],
      nombre: [this.data.nombre, [Validators.required]],
      descripcion: [this.data.descripcion],
      proyecto_id:[this.data.proyecto_id,[Validators.required]],
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

  get ProyectoId() {
    return this.editForm.get('proyecto_id');
  }
  get Jerarquia() {
    return this.editForm.get('jerarquia');
  }
  getProjects(){
    this.projectService.getProjectView().subscribe(data=>{
      this.projects=data;
    })
  }

  editGroup(){
    if(this.editForm.valid){
      this.groupService.editGroup(this.editForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
          this.dialogRef.close(1);
        }
      },(err) => {
        console.log(err);
      });
    }
  }
  cancelEdit(){
    this.dialogRef.close();
  }
}
