import { DatePipe, formatDate } from '@angular/common';
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
  pipe = new DatePipe('es-GT');
  date=new Date((new Date()).getDate());
  now=Date.now();
  project:IProjectCreate={
    nombre:'',
    encuesta_id:0,
    fecha:this.date
  };
  upmAsignment:IUpmAssignment={
    proyecto_id:0,
    upms:[]
  }
  constructor(private projectService: ProjectService, private formBuilder: FormBuilder,private encuestaService:EncuestaService) { 
    this.buildForm();
    this.cargarEncuestas();
    this.cargarUpms();
  }

  private buildForm(){
    this.projectForm=this.formBuilder.group({
      nombre:['',Validators.required],
      fecha:['',[Validators.required]],
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
  cargarUpms(){
    this.projectService.getUpms().subscribe((data)=>{
      this.upms=data
    });
  }
  createProject(){ 
    if(this.projectForm.valid){
      this.project.nombre=this.Nombre?.value;
      this.project.encuesta_id=this.Encuesta?.value;
      this.project.fecha=this.Fecha?.value;
      this.upmAsignment.upms=this.upmSelected;
      this.projectService.createProject(this.project).subscribe((resp)=>{
        if(resp.status==true){
          this.upmAsignment.proyecto_id=resp.id;
          this.projectService.assignUpmToProject(this.upmAsignment).subscribe((res)=>{
            if(res.status==true){
              Swal.fire('Ok!','Proyecto creado Correctamente', 'success');
            }
          },(err) => {
            console.log(err);
          });
        }
      });
    }
  }   
  upmSelecteds(options: MatListOption[]){
    this.upmSelected=options.map(o=>o.value);
  }
}
