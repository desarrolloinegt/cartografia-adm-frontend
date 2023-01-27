import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatListOption } from '@angular/material/list';
import { ISurvey } from '@core/interfaces/i-survey';
import { IProjectCreate } from '@core/interfaces/i-project';
import { IUpm } from '@core/interfaces/i-upm';
import { IUpmAssignment } from '@core/interfaces/i-upm-assignment';
import { ProjectService } from '@modules/project/services/project.service';
import { SurveyService } from '@modules/surveys';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project-page.component.html',
  styleUrls: ['./new-project-page.component.scss']
})
export class NewProjectPageComponent {
  projectForm!: FormGroup;
  encuestas: ISurvey[] = [];
  upmSelected!: number[];
  upms: IUpm[] = [];
  pipe = new DatePipe('es-GT');
  date = new Date((new Date()).getDate());
  now = Date.now();
  project: IProjectCreate = {
    nombre: '',
    encuesta_id: 0,
    year: '',
    descripcion:''
  };
  upmAsignment: IUpmAssignment = {
    proyecto_id: 0,
    upms: []
  }
  constructor(private projectService: ProjectService, private formBuilder: FormBuilder, private surveyService: SurveyService, public dialogRef: MatDialogRef<NewProjectPageComponent>) {
    this.buildForm();
    this.cargarEncuestas();
  }

  private buildForm() {
    this.projectForm = this.formBuilder.group({
      year: ['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{4}$/)]],
      encuesta: ['', [Validators.required]],
      descripcion: ['']
    });
  }
  get Year() {
    return this.projectForm.get('year');
  }

  get Encuesta() {
    return this.projectForm.get('encuesta');
  }

  get Descripcion() {
    return this.projectForm.get('descripcion');
  }

  cargarEncuestas() {
    this.surveyService.getSurveys().subscribe((data) => {
      this.encuestas = data;
    });
  }
  createProject() {
    if (this.projectForm.valid) {
      let valueEncuesta = this.Encuesta?.value.split(',');
      this.project.nombre = valueEncuesta[1] + ' ' + this.Year?.value;
      this.project.encuesta_id = valueEncuesta[0];
      this.project.year = this.Year?.value;
      this.project.descripcion=this.Descripcion?.value;
      if (Number(this.project.encuesta_id)) {
        this.projectService.createProject(this.project).subscribe((resp) => {
          if (resp.status == true) {
            Swal.fire('Ok!', 'Proyecto creado Correctamente', 'success');
            this.dialogRef.close(1);
          }
        });
      }
    }
  }

  cancelAdd() {
    this.dialogRef.close();
  }
}
