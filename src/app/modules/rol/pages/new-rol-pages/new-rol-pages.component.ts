import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IHierarchy } from '@core/interfaces/i-hierarchy';
import { IProject, IProjectListView } from '@core/interfaces/i-project';
import { ProjectService } from '@modules/project/services/project.service';
import { RolService } from '@modules/rol/services';
import { SurveyService } from '@modules/surveys';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-group-pages',
  templateUrl: './new-rol-pages.component.html',
  styleUrls: ['./new-rol-pages.component.scss']
})
export class NewRolPagesComponent {
  groupForm!:FormGroup;
  projects:IProjectListView[]=[];
  jerarquias=IHierarchy.getHierarchys();
  constructor(private rolService: RolService,private projectService:ProjectService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<NewRolPagesComponent>) { 
    this.buildForm();
    this.getProjects();
  }

  private buildForm(){
    this.groupForm=this.formBuilder.group({
      nombre:['',Validators.required],
      descripcion:[''],
      proyecto_id:['',[Validators.required]],
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

  getProjects(){
    this.projectService.getProjectView().subscribe(data=>{
      this.projects=data;
    })
  }
  submit(){
    
  }
  createGroup(){ 
    if(this.groupForm.valid){
      console.log(this.groupForm.value)
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
