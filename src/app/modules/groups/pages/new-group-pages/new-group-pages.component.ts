import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IHierarchy } from '@core/interfaces/i-hierarchy';
import { IProject, IProjectListView } from '@core/interfaces/i-project';
import { GroupService } from '@modules/groups/services';
import { ProjectService } from '@modules/project/services/project.service';
import { SurveyService } from '@modules/surveys';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-group-pages',
  templateUrl: './new-group-pages.component.html',
  styleUrls: ['./new-group-pages.component.scss']
})
export class NewGroupPagesComponent {
  groupForm!:FormGroup;
  projects:IProjectListView[]=[];
  jerarquias=IHierarchy.getHierarchys();
  constructor(private groupService: GroupService,private projectService:ProjectService, private formBuilder: FormBuilder) { 
    this.buildForm();
    this.getProjects();

  }
  private buildForm(){
    this.groupForm=this.formBuilder.group({
      nombre:['',Validators.required],
      descripcion:['',[Validators.required]],
      proyecto_id:['',[Validators.required]],
      jerarquia:[0,[Validators.required]]
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
  createGroup(){ 
    if(this.groupForm.valid){
      this.groupService.create(this.groupForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
        }
      }, (err) => {
        console.log(err);
      });
    }
  }   
}
