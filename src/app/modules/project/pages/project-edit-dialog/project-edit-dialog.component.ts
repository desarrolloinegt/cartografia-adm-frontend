import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { IProjectDataEdit } from '@core/interfaces/i-project';
import { ISurvey } from '@core/interfaces/i-survey';
import { IUpm } from '@core/interfaces/i-upm';
import { IUpmAssignmentList } from '@core/interfaces/i-upm-assignment';
import { ProjectService } from '@modules/project/services/project.service';
import { SurveyService } from '@modules/surveys';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.scss']
})
export class ProjectEditDialogComponent {
  editForm!: FormGroup;
  encuestas: ISurvey[] = [];
  public checked = false;
  selectedUpms: number[] = [];
  public upmsList: IUpm[] = [];
  date = new Date((new Date()).getDate());
  selectedSurvey:string='';
  asignacionPermisoRolEditado: IUpmAssignmentList = {
    id: 0,
    upms: [],
    encuesta: '',
    year: '',
    nombre: '',
    progreso:0,
  };

  constructor(private surveyService: SurveyService, private projectService: ProjectService, public dialogRef: MatDialogRef<string>, @Inject(MAT_DIALOG_DATA) public data: IProjectDataEdit, private formBuilder: FormBuilder) {
    this.buildForm();
    this.getSurveys();
  }

  submit() {

  }

  private buildForm() {
    this.editForm = this.formBuilder.group({
      nombre:[this.data.nombre,[Validators.required]],
      proyecto_id: [this.data.id, [Validators.required]],
      year: [this.data.year, [Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{4}$/)]],
      descripcion:[this.data.descripcion],
      encuesta_id: ['', Validators.required],
    });
  }

  get Id() {
    return this.editForm.get('proyecto_idd');
  }
  get Nombre() {
    return this.editForm.get('nombre');
  }

  get Encuesta() {
    return this.editForm.get('encuesta_id');
  }
  get Year() {
    return this.editForm.get('year');
  }
  getSurveys() {
    this.surveyService.getSurveys().subscribe((data) => {
      this.encuestas = data;
      this.defaulSurvey();
    });
  }
 
  editProject() {
    if(this.editForm.valid){
      let valueEncuesta = this.Encuesta?.value.split(',');
      this.Encuesta?.setValue(valueEncuesta[0]);
      this.Nombre?.setValue(valueEncuesta[1]+' '+this.Year?.value);
      this.projectService.editProject(this.editForm.value).subscribe((resp)=>{
        if(resp.status==true){
          Swal.fire('Ok!', resp.message, 'success');
          this.dialogRef.close(1);
        }
      },(err) => {
        console.log(err);
      });
    }

  }

  defaulSurvey() {
    for (let i = 0; i < this.encuestas.length; i++) {
      if (this.encuestas[i].nombre == this.data.encuesta) {
        this.selectedSurvey=this.encuestas[i].id+','+this.encuestas[i].nombre;
      }
    }
  }

  cancelEdit() {
    this.dialogRef.close();
  }
}
