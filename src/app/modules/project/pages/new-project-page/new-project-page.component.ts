import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatListOption } from '@angular/material/list';
import { IEncuesta } from '@core/interfaces/i-encuesta';
import { IUpm } from '@core/interfaces/i-upm';
import { ProjectService } from '@modules/project/services/project.service';
import { SurveyService } from '@modules/surveys';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project-page.component.html',
  styleUrls: ['./new-project-page.component.scss']
})
export class NewProjectPageComponent {
  projectForm!:FormGroup;
  encuestas:IEncuesta[]=[];
  upmSelected!:number[];
  upms:IUpm[]=[];
  constructor(private projectService: ProjectService, private formBuilder: FormBuilder,private surveyService:SurveyService) { 
    this.buildForm();
    this.cargarEncuestas();
  }

  private buildForm(){
    this.projectForm=this.formBuilder.group({
      nombre:['',Validators.required],
      fecha:['',Validators.required],
      encuesta:['',[Validators.required]],
      upms:['',[Validators.required]]
    });
  }
  get Nombre() {
    return this.projectForm.get('nombre');
  }
  get Fecha() {
    return this.projectForm.get('fecha');
  }

  get Encuesta() {
    return this.projectForm.get('encuesta');
  }

  cargarEncuestas(){
    this.surveyService.getSurveys().subscribe((data)=>{
        this.encuestas=data;
    });
  }

  createProject(){ 
    /*this.roleService.createRol(this.rol).subscribe((resp)=>{
      if(resp.status==true){
        this.asignacionPermisoRol.rol_id=resp.id_rol;
        this.roleService.assignPermisoToRol(this.asignacionPermisoRol).subscribe((res)=>{
          if(res.status==true){
            Swal.fire('Ok!', res.message, 'success');
          }
        },(err) => {
          console.log(err);
        });
      }
    });*/
  }
  permisoSelected(options: MatListOption[]){
    this.upmSelected=options.map(o=>o.value);
  }
}
